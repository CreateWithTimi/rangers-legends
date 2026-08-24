import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import christianChukwu from '../../data/legends/christian-chukwu.js';
import './ComicReader.css';

const formatPage = (pageNumber) => String(pageNumber).padStart(2, '0');

function isEditableTarget(target) {
  if (!(target instanceof HTMLElement)) {
    return false;
  }

  return target.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName);
}

function ComicReader() {
  const pages = christianChukwu.comicPages;
  const totalPages = pages.length;
  const readerRef = useRef(null);
  const [pageIndex, setPageIndex] = useState(0);
  const [mode, setMode] = useState('single');
  const [isCompact, setIsCompact] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fullscreenAvailable, setFullscreenAvailable] = useState(false);
  const [imageErrors, setImageErrors] = useState({});

  const canUseSpread = mode === 'spread' && !isCompact;
  const currentPage = pages[pageIndex];
  const visiblePages = useMemo(() => {
    if (!currentPage) {
      return [];
    }

    return canUseSpread ? pages.slice(pageIndex, Math.min(pageIndex + 2, totalPages)) : [currentPage];
  }, [canUseSpread, currentPage, pageIndex, pages, totalPages]);

  const canGoPrevious = pageIndex > 0;
  const canGoNext = canUseSpread ? pageIndex + 2 < totalPages : pageIndex < totalPages - 1;
  const pageLabel = currentPage ? `Page ${formatPage(currentPage.number)} / ${formatPage(totalPages)}` : 'Comic unavailable';

  function goToPage(nextIndex) {
    setPageIndex(Math.min(Math.max(nextIndex, 0), totalPages - 1));
  }

  function goPrevious() {
    if (!canGoPrevious) {
      return;
    }

    goToPage(pageIndex - (canUseSpread ? 2 : 1));
  }

  function goNext() {
    if (!canGoNext) {
      return;
    }

    goToPage(pageIndex + (canUseSpread ? 2 : 1));
  }

  async function toggleFullscreen() {
    if (!fullscreenAvailable || !readerRef.current) {
      return;
    }

    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
        return;
      }

      await readerRef.current.requestFullscreen();
    } catch {
      setIsFullscreen(Boolean(document.fullscreenElement));
    }
  }

  useEffect(() => {
    document.title = `${pageLabel} - Christian Chukwu Comic | Rangers Legends`;
  }, [pageLabel]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 900px)');
    const handleChange = () => setIsCompact(mediaQuery.matches);

    handleChange();
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (isCompact && mode === 'spread') {
      setMode('single');
    }
  }, [isCompact, mode]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (isEditableTarget(event.target)) {
        return;
      }

      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        goPrevious();
      }

      if (event.key === 'ArrowRight') {
        event.preventDefault();
        goNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [canGoNext, canGoPrevious, canUseSpread, pageIndex]);

  useEffect(() => {
    setFullscreenAvailable(Boolean(document.fullscreenEnabled));

    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  if (!currentPage) {
    return (
      <div className="comic-reader comic-reader--empty">
        <p className="comic-reader__kicker">Legend {christianChukwu.legendNumber}</p>
        <h1>Comic unavailable</h1>
        <p>The approved comic pages are not available in the project data.</p>
        <Link className="comic-reader__link" to={`/legends/${christianChukwu.slug}`}>
          Back to Chairman
        </Link>
      </div>
    );
  }

  return (
    <article className="comic-reader" ref={readerRef}>
      <header className="comic-reader__bar">
        <Link className="comic-reader__back" to={`/legends/${christianChukwu.slug}`}>
          Back to Chairman
        </Link>
        <div className="comic-reader__identity" aria-label="Comic reader status">
          <span>Legend {christianChukwu.legendNumber}</span>
          <strong>Comic</strong>
          <span aria-live="polite">{pageLabel}</span>
        </div>
        <div className="comic-reader__tools" aria-label="Reader controls">
          <div className="comic-mode" aria-label="Reading mode">
            <button type="button" aria-pressed={mode === 'single'} onClick={() => setMode('single')}>
              Single
            </button>
            <button
              type="button"
              aria-pressed={mode === 'spread'}
              disabled={isCompact}
              onClick={() => setMode('spread')}
            >
              Spread
            </button>
          </div>
          {fullscreenAvailable ? (
            <button className="comic-reader__tool" type="button" onClick={toggleFullscreen}>
              {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
            </button>
          ) : null}
        </div>
      </header>

      <div className="comic-reader__stage">
        <button
          className="comic-reader__nav comic-reader__nav--previous"
          type="button"
          disabled={!canGoPrevious}
          onClick={goPrevious}
          aria-label="Previous comic page"
        >
          Previous
        </button>

        <div className={canUseSpread ? 'comic-pages comic-pages--spread' : 'comic-pages'} aria-label={pageLabel}>
          {visiblePages.map((page, index) => (
            <figure className="comic-page" key={page.id}>
              {imageErrors[page.id] ? (
                <div className="comic-page__error" role="alert">
                  Page {formatPage(page.number)} could not be loaded.
                </div>
              ) : (
                <img
                  src={page.src}
                  alt={page.alt}
                  loading={pageIndex === 0 && index === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  onError={() => setImageErrors((current) => ({ ...current, [page.id]: true }))}
                />
              )}
              <figcaption>Page {formatPage(page.number)}</figcaption>
            </figure>
          ))}
        </div>

        <button
          className="comic-reader__nav comic-reader__nav--next"
          type="button"
          disabled={!canGoNext}
          onClick={goNext}
          aria-label="Next comic page"
        >
          Next
        </button>
      </div>

      <footer className="comic-reader__footer" aria-label="Comic page navigation">
        <p aria-live="polite">{pageLabel}</p>
        <div className="comic-page-index">
          {pages.map((page, index) => (
            <button
              type="button"
              key={page.id}
              aria-current={index === pageIndex ? 'page' : undefined}
              aria-label={`Go to page ${formatPage(page.number)}`}
              onClick={() => goToPage(index)}
            >
              {formatPage(page.number)}
            </button>
          ))}
        </div>
      </footer>
    </article>
  );
}

export default ComicReader;

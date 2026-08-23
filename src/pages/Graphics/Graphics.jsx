import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import christianChukwu from '../../data/legends/christian-chukwu.js';
import './Graphics.css';

function ArtworkMeta({ artwork, eyebrow = artwork.label }) {
  return (
    <div className="graphics-art-meta">
      <p className="graphics-kicker">{eyebrow}</p>
      <h2>{artwork.title}</h2>
      <p>{artwork.theme}</p>
    </div>
  );
}

function Graphics() {
  const artworks = christianChukwu.graphics;
  const [activeIndex, setActiveIndex] = useState(null);
  const closeButtonRef = useRef(null);
  const lastTriggerRef = useRef(null);
  const activeArtwork = activeIndex === null ? null : artworks[activeIndex];

  function openViewer(index, event) {
    lastTriggerRef.current = event.currentTarget;
    setActiveIndex(index);
  }

  function closeViewer() {
    setActiveIndex(null);
  }

  function showPrevious() {
    setActiveIndex((current) => (current === null ? current : (current + artworks.length - 1) % artworks.length));
  }

  function showNext() {
    setActiveIndex((current) => (current === null ? current : (current + 1) % artworks.length));
  }

  useEffect(() => {
    document.title = `Graphics | ${christianChukwu.name} | Rangers Legends`;
  }, []);

  useEffect(() => {
    if (activeIndex === null) {
      lastTriggerRef.current?.focus();
      return undefined;
    }

    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeViewer();
      }

      if (event.key === 'ArrowLeft') {
        showPrevious();
      }

      if (event.key === 'ArrowRight') {
        showNext();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeIndex]);

  return (
    <div className="graphics-page">
      <section className="graphics-hero graphics-shell" aria-labelledby="graphics-hero-title">
        <div>
          <p className="graphics-kicker">Legend {christianChukwu.legendNumber}</p>
          <h1 id="graphics-hero-title">Graphics</h1>
        </div>
        <div className="graphics-hero__copy">
          <p className="graphics-hero__statement">
            Art that keeps
            <span>the legacy alive.</span>
          </p>
          <p>
            A visual collection inspired by Christian Chukwu, Rangers history, and the moments that shaped the
            Chairman story.
          </p>
        </div>
      </section>

      <section className="graphics-featured graphics-shell graphics-rule" aria-labelledby="featured-artwork-title">
        <div className="graphics-featured__art">
          <button type="button" onClick={(event) => openViewer(0, event)} aria-label={`View artwork: ${artworks[0].title}`}>
            <img src={artworks[0].src} alt={artworks[0].alt} loading="eager" decoding="async" />
          </button>
        </div>
        <div className="graphics-featured__meta">
          <ArtworkMeta artwork={artworks[0]} eyebrow="Featured" />
          <p className="graphics-featured__statement">The man. The captain. The legacy.</p>
          <button className="graphics-view-button" type="button" onClick={(event) => openViewer(0, event)}>
            View Artwork
          </button>
        </div>
      </section>

      <section className="graphics-collection graphics-shell graphics-rule" aria-labelledby="graphics-collection-title">
        <div className="graphics-section-heading">
          <p className="graphics-kicker">Artwork Collection</p>
          <h2 id="graphics-collection-title">Three visual pieces from Collection 001.</h2>
        </div>
        <div className="graphics-gallery">
          {artworks.map((artwork, index) => (
            <article className={index === 0 ? 'graphics-piece graphics-piece--wide' : 'graphics-piece'} key={artwork.id}>
              <button type="button" onClick={(event) => openViewer(index, event)} aria-label={`View artwork: ${artwork.title}`}>
                <img src={artwork.src} alt={artwork.alt} loading={index === 0 ? 'eager' : 'lazy'} decoding="async" />
              </button>
              <div>
                <span>{artwork.number}</span>
                <h3>{artwork.title}</h3>
                <p>{artwork.theme}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="graphics-context graphics-shell graphics-rule" aria-labelledby="graphics-context-title">
        <div>
          <p className="graphics-kicker">From Story to Symbol</p>
          <h2 id="graphics-context-title">From story to symbol.</h2>
        </div>
        <div>
          <p>
            The Rangers Legends graphics transform moments from the Chairman story into standalone visual pieces —
            designed to live beyond the comic across culture, apparel, collectibles, and digital media.
          </p>
          <Link className="button-link" to={`/legends/${christianChukwu.slug}/apparel`}>
            Explore Apparel
          </Link>
        </div>
      </section>

      {activeArtwork ? (
        <div
          className="graphics-viewer"
          role="dialog"
          aria-modal="true"
          aria-labelledby="graphics-viewer-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeViewer();
            }
          }}
        >
          <div className="graphics-viewer__panel">
            <header className="graphics-viewer__bar">
              <div>
                <p className="graphics-kicker">{activeArtwork.label}</p>
                <h2 id="graphics-viewer-title">{activeArtwork.title}</h2>
              </div>
              <button ref={closeButtonRef} type="button" onClick={closeViewer}>
                Close
              </button>
            </header>
            <figure>
              <img src={activeArtwork.src} alt={activeArtwork.alt} />
            </figure>
            <footer className="graphics-viewer__nav" aria-label="Artwork viewer navigation">
              <button type="button" onClick={showPrevious}>
                Previous
              </button>
              <span>
                {activeArtwork.number} / {String(artworks.length).padStart(2, '0')}
              </span>
              <button type="button" onClick={showNext}>
                Next
              </button>
            </footer>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Graphics;

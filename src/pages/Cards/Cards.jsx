import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import christianChukwu from '../../data/legends/christian-chukwu.js';
import './Cards.css';

const experienceLinks = [
  { label: 'Read It.', href: `/legends/${christianChukwu.slug}/story` },
  { label: 'Watch It.', href: `/legends/${christianChukwu.slug}/film` },
  { label: 'See It.', href: `/legends/${christianChukwu.slug}/graphics` },
  { label: 'Wear It.', href: `/legends/${christianChukwu.slug}/apparel` },
  { label: 'Collect It.', href: `/legends/${christianChukwu.slug}/cards`, active: true },
];

function CardArtwork({ src, alt, loading = 'lazy', errored, onError }) {
  if (errored) {
    return (
      <span className="card-artwork-fallback" role="img" aria-label={alt}>
        Artwork unavailable
      </span>
    );
  }

  return <img src={src} alt={alt} loading={loading} decoding="async" onError={onError} />;
}

function CardFigure({ card, flipped, buttonLabel, onFlip, loading = 'lazy', imageErrors, onImageError }) {
  const frontErrorKey = `${card.id}-front`;
  const backErrorKey = `${card.id}-back`;

  return (
    <button
      className={flipped ? 'card-figure card-figure--flipped' : 'card-figure'}
      type="button"
      onClick={onFlip}
      aria-label={buttonLabel}
    >
      <span className="card-figure__inner">
        <span className="card-figure__face card-figure__face--front">
          <CardArtwork
            src={card.front}
            alt={card.frontAlt}
            loading={loading}
            errored={imageErrors[frontErrorKey]}
            onError={() => onImageError(frontErrorKey)}
          />
        </span>
        <span className="card-figure__face card-figure__face--back">
          <CardArtwork
            src={card.back}
            alt={card.backAlt}
            loading="lazy"
            errored={imageErrors[backErrorKey]}
            onError={() => onImageError(backErrorKey)}
          />
        </span>
      </span>
    </button>
  );
}

function Cards() {
  const cards = christianChukwu.cards;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [imageErrors, setImageErrors] = useState({});
  const selectedCard = cards[selectedIndex];
  const sideLabel = isFlipped ? 'Back' : 'Front';
  const progressLabel = `Card ${String(selectedIndex + 1).padStart(2, '0')} of ${String(cards.length).padStart(2, '0')}`;

  function selectCard(index) {
    setSelectedIndex(index);
    setIsFlipped(false);
  }

  function showPrevious() {
    setSelectedIndex((current) => {
      const nextIndex = Math.max(0, current - 1);
      if (nextIndex !== current) {
        setIsFlipped(false);
      }
      return nextIndex;
    });
  }

  function showNext() {
    setSelectedIndex((current) => {
      const nextIndex = Math.min(cards.length - 1, current + 1);
      if (nextIndex !== current) {
        setIsFlipped(false);
      }
      return nextIndex;
    });
  }

  function toggleFlip() {
    setIsFlipped((current) => !current);
  }

  function markImageError(key) {
    setImageErrors((current) => (current[key] ? current : { ...current, [key]: true }));
  }

  useEffect(() => {
    document.title = `Cards | ${christianChukwu.name} | Rangers Legends`;
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const target = event.target;
      const isEditable =
        target instanceof HTMLElement &&
        (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable);

      if (isEditable) {
        return;
      }

      if (event.key === 'ArrowLeft') {
        showPrevious();
      }

      if (event.key === 'ArrowRight') {
        showNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [cards.length]);

  return (
    <div className="cards-page">
      <section className="cards-hero cards-shell" aria-labelledby="cards-hero-title">
        <div>
          <p className="cards-kicker">Legend {christianChukwu.legendNumber}</p>
          <h1 id="cards-hero-title">Cards</h1>
        </div>
        <div className="cards-hero__copy">
          <p className="cards-hero__statement">Collect the story.</p>
          <p>Five cards. Five pieces of the Chairman story. One collection.</p>
          <div className="cards-meta" aria-label="Collection metadata">
            <span>Collection 001</span>
            <span>{christianChukwu.name}</span>
          </div>
        </div>
      </section>

      <section className="cards-opening cards-shell cards-rule" aria-labelledby="cards-opening-title">
        <div className="cards-opening__copy">
          <p className="cards-kicker">Collection Opening</p>
          <h2 id="cards-opening-title">Five chapters. One archive set.</h2>
        </div>
        <div className="cards-fan" aria-label="Collection 001 card fronts">
          {cards.map((card, index) => (
            <button
              className="cards-fan__card"
              type="button"
              style={{ '--card-index': index }}
              onClick={() => selectCard(index)}
              key={card.id}
              aria-label={`Inspect ${card.number} ${card.displayTitle}`}
            >
              <CardArtwork
                src={card.front}
                alt={card.frontAlt}
                loading={index === 0 ? 'eager' : 'lazy'}
                errored={imageErrors[`${card.id}-front`]}
                onError={() => markImageError(`${card.id}-front`)}
              />
              <span>{card.number}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="card-inspector cards-shell cards-rule" aria-labelledby="card-inspector-title">
        <div className="card-inspector__meta">
          <p className="cards-kicker">Interactive Archive</p>
          <h2 id="card-inspector-title">{selectedCard.displayTitle}</h2>
          <p className="card-inspector__number">{selectedCard.number}</p>
          <p className="card-inspector__side" aria-live="polite">
            {sideLabel}
          </p>
          <p className="card-inspector__progress">{progressLabel}</p>
          <div className="card-selector" aria-label="Choose a card">
            {cards.map((card, index) => (
              <button
                className={index === selectedIndex ? 'card-selector__button card-selector__button--active' : 'card-selector__button'}
                type="button"
                onClick={() => selectCard(index)}
                aria-current={index === selectedIndex ? 'true' : undefined}
                key={card.id}
              >
                {card.number}
              </button>
            ))}
          </div>
        </div>

        <div className="card-inspector__stage">
          <CardFigure
            card={selectedCard}
            flipped={isFlipped}
            buttonLabel={`Flip ${selectedCard.number} to ${isFlipped ? 'front' : 'back'}`}
            onFlip={toggleFlip}
            loading="eager"
            imageErrors={imageErrors}
            onImageError={markImageError}
          />
        </div>

        <div className="card-controls" aria-label="Card archive controls">
          <button type="button" onClick={showPrevious} disabled={selectedIndex === 0}>
            Previous
          </button>
          <button type="button" onClick={toggleFlip}>
            {isFlipped ? 'View Front' : 'View Back'}
          </button>
          <button type="button" onClick={showNext} disabled={selectedIndex === cards.length - 1}>
            Next
          </button>
        </div>
      </section>

      <section className="complete-collection cards-shell cards-rule" aria-labelledby="complete-collection-title">
        <div>
          <p className="cards-kicker">Complete Collection</p>
          <h2 id="complete-collection-title">The complete collection.</h2>
        </div>
        <div className="complete-collection__grid">
          {cards.map((card) => (
            <article className="complete-card" key={card.id}>
              <CardArtwork
                src={card.front}
                alt={card.frontAlt}
                errored={imageErrors[`${card.id}-front`]}
                onError={() => markImageError(`${card.id}-front`)}
              />
              <div>
                <span>{card.number}</span>
                <h3>{card.displayTitle}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="card-statement cards-shell cards-rule" aria-labelledby="card-statement-title">
        <div>
          <p className="cards-kicker">Collector Archive</p>
          <h2 id="card-statement-title">History, in your hands.</h2>
        </div>
        <p>
          Each card turns part of the Chairman story into something tangible — a moment to revisit, a piece to
          collect, and another way for the archive to keep moving.
        </p>
      </section>

      <section className="legend-completion cards-shell cards-rule" aria-labelledby="legend-completion-title">
        <div>
          <p className="cards-kicker">Legend 001</p>
          <h2 id="legend-completion-title">You've met the Chairman.</h2>
        </div>
        <nav className="legend-completion__links" aria-label="Legend 001 experience links">
          {experienceLinks.map((link) =>
            link.active ? (
              <span className="legend-completion__link legend-completion__link--active" key={link.label}>
                {link.label}
              </span>
            ) : (
              <Link className="legend-completion__link" to={link.href} key={link.label}>
                {link.label}
              </Link>
            ),
          )}
        </nav>
        <div className="legend-completion__actions">
          <Link className="button-link button-link--primary" to={`/legends/${christianChukwu.slug}`}>
            Back to Legend 001
          </Link>
          <Link className="button-link" to="/legends">
            Explore All Legends
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Cards;

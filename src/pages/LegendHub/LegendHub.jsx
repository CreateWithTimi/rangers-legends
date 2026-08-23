import { Link } from 'react-router-dom';
import christianChukwu from '../../data/legends/christian-chukwu.js';
import './LegendHub.css';

const archiveLinks = [
  { label: 'Overview', href: '#overview' },
  { label: 'Story', href: '#story' },
  { label: 'Film', href: '#film' },
  { label: 'Graphics', href: '#graphics' },
  { label: 'Apparel', href: '#apparel' },
  { label: 'Cards', href: '#cards' },
];

const routeLinks = {
  story: `/legends/${christianChukwu.slug}/story`,
  film: `/legends/${christianChukwu.slug}/film`,
  graphics: `/legends/${christianChukwu.slug}/graphics`,
  apparel: `/legends/${christianChukwu.slug}/apparel`,
  cards: `/legends/${christianChukwu.slug}/cards`,
};

const legendBiography = [
  'Christian Chukwu was a Rangers International F.C. player and captain. He captained Rangers to victory in the 1977 African Cup Winners’ Cup.',
  'He later captained Nigeria’s Green Eagles to the country’s first Africa Cup of Nations title in 1980.',
  'After his playing career, he moved into coaching and later coached Rangers, Kenya, and Nigeria. He led Nigeria to third place at the 2004 Africa Cup of Nations.',
];

function splitCollectionTitle(title) {
  const [, rest = title] = title.split(' - ');
  return rest.split(' / ');
}

function sectionTitle(first, second) {
  return (
    <>
      {first}
      <span>{second}</span>
    </>
  );
}

function LegendSectionHeader({ id, number, eyebrow, first, second, children }) {
  return (
    <div className="legend-section-header">
      <div className="legend-section-header__meta" aria-label={`Section ${number}`}>
        <span>{number}</span>
        <span>{eyebrow}</span>
      </div>
      <div>
        <h2 id={id}>{sectionTitle(first, second)}</h2>
        {children ? <p>{children}</p> : null}
      </div>
    </div>
  );
}

function ImageFrame({ className = '', src, alt, loading = 'lazy' }) {
  return (
    <figure className={`legend-image-frame ${className}`}>
      {src ? <img src={src} alt={alt} loading={loading} decoding="async" /> : null}
    </figure>
  );
}

function LegendHub() {
  const storyImages = christianChukwu.assets.hubStoryPreview;
  const graphics = christianChukwu.graphics.filter((graphic) => graphic.src);

  return (
    <div className="legend-hub">
      <section className="legend-hero legend-shell" aria-labelledby="legend-hero-title">
        <div className="legend-hero__copy">
          <p className="legend-kicker">Legend {christianChukwu.legendNumber}</p>
          <h1 id="legend-hero-title">
            Christian
            <span>Chukwu</span>
          </h1>
          <p className="legend-hero__nickname">"{christianChukwu.nickname}"</p>
          <p className="legend-hero__line">{christianChukwu.shortTitle}</p>
          <dl className="legend-hero__meta" aria-label="Legend metadata">
            <div>
              <dt>No.</dt>
              <dd>{christianChukwu.number}</dd>
            </div>
            <div>
              <dt>Collection</dt>
              <dd>{christianChukwu.collection}</dd>
            </div>
          </dl>
          <div className="legend-actions">
            <Link className="button-link button-link--primary" to={routeLinks.story}>
              Read the Story
            </Link>
            <a className="button-link" href="#overview">
              Explore the Archive
            </a>
          </div>
        </div>
        <ImageFrame
          className="legend-hero__image"
          src={christianChukwu.assets.hero.src}
          alt={christianChukwu.assets.hero.alt}
          loading="eager"
        />
      </section>

      <nav className="legend-archive-nav legend-shell" aria-label="Legend archive navigation">
        {archiveLinks.map((link) => (
          <a href={link.href} key={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <section className="legend-overview legend-shell legend-rule" id="overview" aria-labelledby="overview-title">
        <LegendSectionHeader id="overview-title" number="02" eyebrow="The Legend" first="The" second="Legend." />
        <div className="legend-overview__content">
          <div className="legend-overview__body">
            {legendBiography.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <ul className="legend-role-list" aria-label="Verified roles">
              {christianChukwu.roles.map((role) => (
                <li key={role}>{role}</li>
              ))}
            </ul>
          </div>
          <div className="legend-number-mark" aria-hidden="true">
            {christianChukwu.number}
          </div>
        </div>
      </section>

      <section className="legend-story legend-shell legend-rule" id="story" aria-labelledby="story-title">
        <LegendSectionHeader id="story-title" number="03" eyebrow="The Story" first="The" second="Story.">
          Eight pages. One legend.
        </LegendSectionHeader>
        <div className="legend-story__layout">
          <ImageFrame className="legend-story__lead" src={storyImages[1]?.src} alt={storyImages[1]?.alt} />
          <div className="legend-story__support">
            {storyImages
              .filter((_, index) => index !== 1)
              .map((beat) => (
                <article className="legend-mini-feature" key={beat.id}>
                  <ImageFrame src={beat.src} alt={beat.alt} />
                  <div>
                    <span>{beat.year}</span>
                    <h3>{beat.title}</h3>
                  </div>
                </article>
              ))}
            <Link className="button-link" to={routeLinks.story}>
              Read the Full Story
            </Link>
          </div>
        </div>
      </section>

      <section className="legend-film legend-shell legend-rule" id="film" aria-labelledby="film-heading">
        <div className="legend-film__copy">
          <LegendSectionHeader id="film-heading" number="04" eyebrow="The Film" first="The" second="Film." />
          <p className="legend-film__title">
            Chairman
            <span>A Rangers Legends Film</span>
          </p>
          <p className="legend-status">{christianChukwu.film.status}</p>
          <Link className="button-link" to={routeLinks.film}>
            Explore the Film
          </Link>
        </div>
        <div className="legend-film__frame" aria-hidden="true">
          <span>No. {christianChukwu.number}</span>
        </div>
      </section>

      <section className="legend-graphics legend-shell legend-rule" id="graphics" aria-labelledby="graphics-title">
        <LegendSectionHeader id="graphics-title" number="05" eyebrow="The Graphics" first="The" second="Graphics.">
          A compact visual archive built from supplied concept artwork.
        </LegendSectionHeader>
        <div className="legend-graphics__layout">
          <ImageFrame className="legend-graphics__lead" src={graphics[0]?.src} alt={graphics[0]?.alt} />
          <div className="legend-graphics__support">
            {graphics.slice(1, 3).map((graphic) => (
              <ImageFrame src={graphic.src} alt={graphic.alt} key={graphic.id} />
            ))}
          </div>
        </div>
        <Link className="button-link" to={routeLinks.graphics}>
          Explore Graphics
        </Link>
      </section>

      <section className="legend-apparel legend-shell legend-rule" id="apparel" aria-labelledby="apparel-title">
        <LegendSectionHeader id="apparel-title" number="06" eyebrow="The Apparel" first="The" second="Apparel." />
        <div className="legend-apparel__grid">
          {christianChukwu.apparel.map((item, index) => {
            const [lineOne, lineTwo] = splitCollectionTitle(item.title);

            return (
              <article className={index === 0 ? 'legend-garment legend-garment--lead' : 'legend-garment'} key={item.id}>
                <ImageFrame src={item.image} alt={item.alt} />
                <div>
                  <span>{item.id.replace('tee-', 'TEE ')}</span>
                  <h3>{lineOne}</h3>
                  <p>{lineTwo}</p>
                </div>
              </article>
            );
          })}
        </div>
        <Link className="button-link" to={routeLinks.apparel}>
          Explore Apparel
        </Link>
      </section>

      <section className="legend-cards legend-shell legend-rule" id="cards" aria-labelledby="cards-title">
        <LegendSectionHeader id="cards-title" number="07" eyebrow="The Cards" first="The" second="Cards.">
          Five cards. Five chapters. One extraordinary life.
        </LegendSectionHeader>
        <div className="legend-card-set" aria-label="Collection 001 card fronts">
          {christianChukwu.cards.map((card, index) => (
            <article className="legend-card-preview" key={card.id} style={{ '--card-index': index }}>
              {card.front ? <img src={card.front} alt={card.alt} loading="lazy" decoding="async" /> : null}
              <div>
                <span>{card.id.toUpperCase()}</span>
                <h3>{card.title.replace(`${card.id.toUpperCase()} - `, '')}</h3>
              </div>
            </article>
          ))}
        </div>
        <Link className="button-link" to={routeLinks.cards}>
          Explore the Cards
        </Link>
      </section>

      <section className="legend-legacy legend-shell legend-rule" aria-labelledby="legacy-title">
        <p className="legend-kicker">The Living Archive</p>
        <h2 id="legacy-title">
          The story
          <span>lives on.</span>
        </h2>
        <p>
          Christian Chukwu is Legend {christianChukwu.legendNumber} in a growing Rangers Legends archive.
          Future archive content will be added only when approved.
        </p>
      </section>

      <section className="legend-next legend-shell legend-rule" aria-labelledby="next-title">
        <div>
          <p className="legend-kicker">Next Legend</p>
          <h2 id="next-title">The archive continues.</h2>
        </div>
        <article className="legend-next__card">
          <span>Legend 002</span>
          <strong>Coming Soon</strong>
        </article>
        <Link className="button-link" to="/legends">
          Back to All Legends
        </Link>
      </section>
    </div>
  );
}

export default LegendHub;

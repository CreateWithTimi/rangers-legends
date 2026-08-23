import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import christianChukwu from '../../data/legends/christian-chukwu.js';
import './Apparel.css';

const collectionRoute = `/legends/${christianChukwu.slug}/cards`;

function ApparelLook({ item, reverse = false, loading = 'lazy' }) {
  return (
    <section className={reverse ? 'apparel-look apparel-look--reverse apparel-shell apparel-rule' : 'apparel-look apparel-shell apparel-rule'} aria-labelledby={`${item.id}-title`}>
      <div className="apparel-look__media">
        <img src={item.image} alt={item.alt} loading={loading} decoding="async" />
      </div>
      <div className="apparel-look__copy">
        <p className="apparel-look__number">{item.number}</p>
        <p className="apparel-look__name">{item.name}</p>
        <h2 className="apparel-look__title" id={`${item.id}-title`}>
          {item.headline}
        </h2>
        <div className="apparel-look__subject" aria-label={`${item.name} subject`}>
          {item.subject.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </div>
        <span className="apparel-look__line" aria-hidden="true" />
      </div>
    </section>
  );
}

function Apparel() {
  const [tee01, tee02, tee03] = christianChukwu.apparel;

  useEffect(() => {
    document.title = `Apparel | ${christianChukwu.name} | Rangers Legends`;
  }, []);

  return (
    <div className="apparel-page">
      <section className="apparel-hero apparel-shell" aria-labelledby="apparel-hero-title">
        <div>
          <p className="apparel-kicker">Legend {christianChukwu.legendNumber}</p>
          <h1 id="apparel-hero-title">Apparel</h1>
        </div>
        <div className="apparel-hero__copy">
          <p className="apparel-hero__statement">Wear the history.</p>
          <p>Three pieces inspired by the man, the moment, and the glory of the Chairman story.</p>
          <div className="apparel-meta" aria-label="Collection metadata">
            <span>Collection 001</span>
            <span>{christianChukwu.name}</span>
          </div>
        </div>
      </section>

      <ApparelLook item={tee01} loading="eager" />
      <ApparelLook item={tee02} reverse />
      <ApparelLook item={tee03} />

      <section className="apparel-collection apparel-shell apparel-rule" aria-labelledby="apparel-collection-title">
        <div>
          <p className="apparel-kicker">Collection 001</p>
          <h2 className="apparel-section-title" id="apparel-collection-title">
            Three stories. One collection.
          </h2>
        </div>
        <div className="apparel-collection__grid">
          {christianChukwu.apparel.map((item) => (
            <article className="apparel-collection__item" key={item.id}>
              <div className="apparel-collection__image">
                <img src={item.image} alt={item.alt} loading="lazy" decoding="async" />
              </div>
              <div>
                <span>{item.number}</span>
                <h3>{item.label}</h3>
                <p>{item.name}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="apparel-statement apparel-shell apparel-rule" aria-labelledby="archive-apparel-title">
        <div>
          <p className="apparel-kicker">From Archive to Apparel</p>
          <h2 className="apparel-section-title" id="archive-apparel-title">
            From archive to apparel.
          </h2>
        </div>
        <div>
          <p>
            Rangers Legends turns stories from the archive into objects that can move through everyday culture.
          </p>
          <p>
            From comic panels and graphics to garments and collectibles, each piece carries part of the story forward.
          </p>
        </div>
      </section>

      <section className="apparel-next apparel-shell apparel-rule" aria-labelledby="apparel-next-title">
        <div>
          <p className="apparel-kicker">Next Experience</p>
          <h2 className="apparel-section-title" id="apparel-next-title">
            The story doesn't stop at the shirt.
          </h2>
        </div>
        <div className="apparel-next__copy">
          <p>Collect the moments that shaped the Chairman story.</p>
          <Link className="button-link" to={collectionRoute}>
            Explore the Cards
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Apparel;

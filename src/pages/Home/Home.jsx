import { Link } from 'react-router-dom';
import christianChukwu from '../../data/legends/christian-chukwu.js';
import HomeSectionHeader from '../../components/ui/HomeSectionHeader.jsx';
import MediaPlaceholder from '../../components/ui/MediaPlaceholder.jsx';
import './Home.css';

const storyBeats = christianChukwu.assets.storyPreview;
const apparelItems = christianChukwu.apparel.map((item) => {
  const [tee, rest] = item.title.split(' - ');
  const [lineOne, lineTwo] = rest.split(' / ');

  return {
    ...item,
    tee,
    lineOne,
    lineTwo,
  };
});
const featuredApparel = apparelItems[0];

const futureLegends = [
  {
    number: christianChukwu.legendNumber,
    name: christianChukwu.name,
    nickname: christianChukwu.nickname,
    href: `/legends/${christianChukwu.slug}`,
  },
  { number: '002', name: 'Coming Soon' },
  { number: '003', name: 'Coming Soon' },
];

function Home() {
  return (
    <div className="home-page">
      <section className="home-hero section-shell" aria-labelledby="home-hero-title">
        <div className="home-hero__copy">
          <span className="home-section-number" aria-hidden="true">
            01
          </span>
          <p className="home-kicker">The stories behind the shirt</p>
          <h1 id="home-hero-title">Rangers Legends</h1>
          <p className="home-hero__tagline">The stories behind the shirt.</p>
          <p className="home-hero__summary">
            An evolving archive celebrating the players, moments and stories that shaped Rangers
            International F.C.
          </p>
          <div className="home-actions" aria-label="Primary home actions">
            <Link className="button-link button-link--primary" to="/legends">
              Explore the Legends
            </Link>
            <Link className="button-link" to="/legends/christian-chukwu">
              Read Legend 001
            </Link>
          </div>
        </div>
        <div className="home-hero__visual">
          <MediaPlaceholder
            label="Concept hero artwork"
            variant="hero"
            src={christianChukwu.assets.hero.src}
            alt={christianChukwu.assets.hero.alt}
            loading="eager"
          />
        </div>
      </section>

      <section className="home-featured section-shell section-rule" aria-labelledby="featured-title">
        <div className="home-featured__meta">
          <span>02</span>
          <span>Featured Legend</span>
        </div>
        <div className="home-featured__image">
          <MediaPlaceholder
            label="Concept portrait artwork"
            variant="portrait"
            src={christianChukwu.assets.featured.src}
            alt={christianChukwu.assets.featured.alt}
            objectPosition="center 24%"
          />
        </div>
        <div className="home-featured__content">
          <div>
            <p className="home-label">Legend {christianChukwu.legendNumber}</p>
            <h2 id="featured-title">{christianChukwu.name}</h2>
            <p className="home-featured__nickname">"{christianChukwu.nickname}"</p>
            <p className="home-featured__line">{christianChukwu.shortTitle}</p>
          </div>
          <ol className="home-timeline" aria-label="Legend 001 timeline teaser">
            <li>Rangers</li>
            <li>Africa 1977</li>
            <li>Nigeria 1980</li>
            <li>Coach</li>
            <li>Legacy</li>
          </ol>
          <Link className="button-link" to="/legends/christian-chukwu">
            Enter the Story
          </Link>
        </div>
      </section>

      <section className="story-preview section-shell section-rule" aria-labelledby="story-title">
        <HomeSectionHeader number="03" eyebrow="The Story" title="History, drawn again.">
          Eight pages. One legend. A story of defeat, leadership, redemption and legacy.
        </HomeSectionHeader>
        <div className="story-preview__grid">
          {storyBeats.map((beat) => (
            <article className="story-beat" key={`${beat.year}-${beat.title}`}>
              <MediaPlaceholder
                label="Concept story artwork"
                variant="paper"
                src={beat.src}
                alt={beat.alt}
                objectPosition="center 28%"
              >
                <span>{beat.year}</span>
                <strong>{beat.title}</strong>
              </MediaPlaceholder>
            </article>
          ))}
        </div>
        <Link className="button-link" to="/legends/christian-chukwu/story">
          Read the Comic
        </Link>
      </section>

      <section className="film-preview section-shell section-rule" aria-labelledby="film-title">
        <div className="film-preview__copy">
          <HomeSectionHeader number="04" eyebrow="Watch the Legend" title="Watch the legend." />
          <p className="film-preview__title" id="film-title">
            Chairman
            <span>A Rangers Legends Film</span>
          </p>
          <p className="home-status">{christianChukwu.film.status}</p>
          <Link className="button-link" to="/legends/christian-chukwu/film">
            Explore the Film
          </Link>
        </div>
        {christianChukwu.assets.film ? (
          <MediaPlaceholder
            label="Approved film image"
            variant="cinema"
            src={christianChukwu.assets.film.src}
            alt={christianChukwu.assets.film.alt}
            objectPosition="center"
          >
            <b>No. {christianChukwu.number}</b>
          </MediaPlaceholder>
        ) : (
          <MediaPlaceholder label="Approved film image placeholder" variant="cinema">
            <b>No. {christianChukwu.number}</b>
          </MediaPlaceholder>
        )}
      </section>

      <section className="apparel-preview section-shell section-rule" aria-labelledby="apparel-title">
        <HomeSectionHeader number="05" eyebrow="Wear the History" title="Wear the history." />
        <div className="apparel-preview__layout">
          <MediaPlaceholder
            label="TEE 01 concept shirt mockup"
            variant="apparel-feature"
            src={featuredApparel.image}
            alt={featuredApparel.alt}
            objectPosition="center"
          />
          <div className="apparel-preview__items">
            {apparelItems.map((item) => (
              <article
                className={item.id === 'tee-01' ? 'apparel-item apparel-item--active' : 'apparel-item'}
                key={item.id}
              >
                {item.id !== 'tee-01' && item.image ? (
                  <img src={item.image} alt={item.alt} loading="lazy" decoding="async" />
                ) : null}
                <div>
                  <p>{item.tee}</p>
                  <h3>{item.lineOne}</h3>
                  <span>{item.lineTwo}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
        <Link className="button-link" to="/legends/christian-chukwu/apparel">
          Explore Collection
        </Link>
      </section>

      <section className="cards-preview section-shell section-rule" aria-labelledby="cards-title">
        <HomeSectionHeader number="06" eyebrow="Collect the Legacy" title="Collect the legacy.">
          Five cards. Five chapters. One extraordinary life.
        </HomeSectionHeader>
        <div className="cards-preview__deck" aria-label="Collection 001 card previews">
          {christianChukwu.cards.map((card, index) => (
            <article className="collector-card" key={card.id} style={{ '--card-index': index }}>
              {card.front ? (
                <img src={card.front} alt={card.alt} loading="lazy" decoding="async" />
              ) : null}
              <div className="collector-card__label">
                <span>{card.id.toUpperCase()}</span>
                <h3>{card.title.replace(`${card.id.toUpperCase()} - `, '')}</h3>
              </div>
            </article>
          ))}
        </div>
        <Link className="button-link" to="/legends/christian-chukwu/cards">
          View the Cards
        </Link>
      </section>

      <section className="mission-preview section-shell section-rule" aria-labelledby="mission-title">
        <HomeSectionHeader number="07" eyebrow="Living Archive" title="History shouldn't disappear.">
          Rangers Legends preserves the players, moments and memories that shaped the Pride of the
          East through comics, film, design and collectibles.
        </HomeSectionHeader>
      </section>

      <section className="future-legends section-shell section-rule" aria-labelledby="future-title">
        <HomeSectionHeader number="08" eyebrow="Future Legends" title="The archive continues." />
        <div className="future-legends__grid">
          {futureLegends.map((legend) =>
            legend.href ? (
              <Link className="legend-tile legend-tile--active" to={legend.href} key={legend.number}>
                <span>Legend {legend.number}</span>
                <strong>{legend.name}</strong>
                <em>{legend.nickname}</em>
              </Link>
            ) : (
              <article className="legend-tile" key={legend.number}>
                <span>Legend {legend.number}</span>
                <strong>{legend.name}</strong>
              </article>
            ),
          )}
        </div>
      </section>

      <section className="collection-hero section-shell section-rule" aria-labelledby="collection-title">
        <div className="collection-hero__copy">
          <p className="home-label">{christianChukwu.collection}</p>
          <h2 id="collection-title">
            Read it.
            <span>Watch it.</span>
            <span>Wear it.</span>
            <span>Collect it.</span>
          </h2>
          <p>{christianChukwu.name} - "{christianChukwu.nickname}"</p>
          <Link className="button-link button-link--primary" to="/legends/christian-chukwu">
            Explore Collection 001
          </Link>
        </div>
        <MediaPlaceholder
          label="Concept collection hero artwork"
          variant="collection"
          src={christianChukwu.assets.collection.hero.src}
          alt={christianChukwu.assets.collection.hero.alt}
          objectPosition="center"
        >
          <strong>Collection 001</strong>
        </MediaPlaceholder>
      </section>
    </div>
  );
}

export default Home;

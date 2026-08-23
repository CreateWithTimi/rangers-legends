import { Link } from 'react-router-dom';
import christianChukwu from '../../data/legends/christian-chukwu.js';
import './Film.css';

function FilmBeat({ beat, index }) {
  return (
    <article className="film-beat">
      <figure aria-hidden="true">
        <img src={beat.image} alt="" loading="lazy" decoding="async" />
      </figure>
      <div>
        <span>{beat.marker}</span>
        <h3>{beat.title}</h3>
      </div>
      <p>{String(index + 1).padStart(2, '0')}</p>
    </article>
  );
}

function Film() {
  const film = christianChukwu.film;

  return (
    <div className="film-page">
      <section className="film-hero" aria-labelledby="film-hero-title">
        <div className="film-hero__media" aria-hidden="true">
          <img src={film.keyArt.src} alt="" loading="eager" decoding="async" />
        </div>
        <div className="film-hero__copy">
          <p className="film-kicker">{film.eyebrow}</p>
          <h1 id="film-hero-title">{film.title}</h1>
          <p className="film-hero__subtitle">{film.subtitle}</p>
          <p className="film-status">{film.status}</p>
        </div>
      </section>

      <section className="film-synopsis film-shell film-rule" aria-labelledby="film-synopsis-title">
        <div>
          <p className="film-kicker">Film Status</p>
          <h2 id="film-synopsis-title">The film is still taking shape.</h2>
        </div>
        <div className="film-synopsis__body">
          <p>{film.synopsis}</p>
        </div>
      </section>

      <section className="film-journey film-shell film-rule" aria-labelledby="film-journey-title">
        <div className="film-section-heading">
          <p className="film-kicker">Journey of a Legend</p>
          <h2 id="film-journey-title">Five quiet beats before the screen lights up.</h2>
        </div>
        <div className="film-beats">
          {film.beats.map((beat, index) => (
            <FilmBeat beat={beat} index={index} key={`${beat.marker}-${beat.title}`} />
          ))}
        </div>
      </section>

      <section className="film-legacy film-shell film-rule" aria-labelledby="film-legacy-title">
        <figure className="film-legacy__portrait" aria-hidden="true">
          <img src={christianChukwu.assets.featured.src} alt="" loading="lazy" decoding="async" />
        </figure>
        <div>
          <p className="film-kicker">Legacy Statement</p>
          <h2 id="film-legacy-title">
            {film.legacyStatement.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
        </div>
        <p className="film-legacy__number" aria-hidden="true">
          {christianChukwu.number}
        </p>
      </section>

      <section className="film-comic-cta film-shell" aria-labelledby="film-comic-title">
        <div>
          <p className="film-kicker">Can&apos;t wait?</p>
          <h2 id="film-comic-title">Read the full comic story while you wait for the film.</h2>
        </div>
        <Link className="button-link button-link--primary" to={`/legends/${christianChukwu.slug}/story`}>
          Read the Comic Story
        </Link>
      </section>
    </div>
  );
}

export default Film;

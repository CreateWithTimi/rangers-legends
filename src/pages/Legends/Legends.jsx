import { Link } from 'react-router-dom';
import { legends } from '../../data/legends/index.js';
import christianChukwu from '../../data/legends/christian-chukwu.js';
import './Legends.css';

const futureLegends = [
  { number: '002', label: 'Coming Soon' },
  { number: '003', label: 'Coming Soon' },
];

function Legends() {
  const activeLegend = legends[0] ?? christianChukwu;

  return (
    <div className="legends-page">
      <section className="legends-hero legends-shell" aria-labelledby="legends-title">
        <div>
          <p className="legends-kicker">The Living Archive</p>
          <h1 id="legends-title">
            The living
            <span>archive.</span>
          </h1>
        </div>
        <div className="legends-hero__copy">
          <p>
            The players. The moments. The stories that shaped Rangers.
          </p>
          <p>
            Rangers Legends is a growing concept archive. V1 begins with Legend 001 and expands only when
            future legends and assets are approved.
          </p>
        </div>
      </section>

      <section className="legends-feature legends-shell legends-rule" aria-labelledby="legend-001-title">
        <div className="legends-feature__media">
          <img
            src={christianChukwu.assets.featured.src}
            alt={christianChukwu.assets.featured.alt}
            loading="eager"
            decoding="async"
          />
        </div>
        <div className="legends-feature__copy">
          <p className="legends-kicker">Legend {activeLegend.legendNumber}</p>
          <h2 id="legend-001-title">
            Christian
            <span>Chukwu</span>
          </h2>
          <p className="legends-feature__nickname">"{activeLegend.nickname}"</p>
          <p className="legends-feature__line">{activeLegend.shortTitle}</p>
          <dl className="legends-feature__meta" aria-label="Legend 001 archive metadata">
            <div>
              <dt>No.</dt>
              <dd>{activeLegend.number}</dd>
            </div>
            <div>
              <dt>Collection</dt>
              <dd>{activeLegend.collection}</dd>
            </div>
          </dl>
          <Link className="button-link button-link--primary" to={`/legends/${activeLegend.slug}`}>
            Explore Legend 001
          </Link>
        </div>
      </section>

      <section className="legends-future legends-shell legends-rule" aria-labelledby="future-legends-title">
        <div>
          <p className="legends-kicker">Future Legends</p>
          <h2 id="future-legends-title">The archive continues.</h2>
        </div>
        <div className="legends-future__grid">
          {futureLegends.map((legend) => (
            <article className="legends-future__card" key={legend.number}>
              <span>{legend.number}</span>
              <strong>{legend.label}</strong>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Legends;

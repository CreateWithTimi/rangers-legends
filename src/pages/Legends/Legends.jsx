import { Link } from 'react-router-dom';
import { legends } from '../../data/legends/index.js';

function Legends() {
  return (
    <div className="page page-narrow">
      <p className="eyebrow">Legends Archive</p>
      <h1>Rangers Legends Directory</h1>
      <p className="lede">A growing archive structured for current and future Rangers legends.</p>

      <div className="simple-list">
        {legends.map((legend) => (
          <article className="simple-list__item" key={legend.slug}>
            <p className="eyebrow">Legend {legend.legendNumber}</p>
            <h2>{legend.name}</h2>
            <p>"{legend.nickname}"</p>
            <Link className="text-link" to={`/legends/${legend.slug}`}>
              Open archive
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Legends;

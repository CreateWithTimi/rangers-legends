import { Link } from 'react-router-dom';
import { site } from '../../data/site.js';

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__brand">
        <p className="site-footer__mark">Rangers Legends</p>
        <p>{site.tagline}</p>
      </div>
      <nav className="site-footer__nav" aria-label="Footer navigation">
        <Link to="/legends">Legends</Link>
        <Link to="/legends/christian-chukwu/story">Stories</Link>
        <Link to="/legends/christian-chukwu/film">Films</Link>
        <Link to="/legends/christian-chukwu/graphics">Graphics</Link>
        <Link to="/legends/christian-chukwu/apparel">Apparel</Link>
        <Link to="/legends/christian-chukwu/cards">Cards</Link>
      </nav>
      <div className="site-footer__legal">
        <p>Concept storytelling archive.</p>
        <p>No official endorsement, licensing, partnership, or merchandise availability is implied.</p>
      </div>
    </footer>
  );
}

export default SiteFooter;

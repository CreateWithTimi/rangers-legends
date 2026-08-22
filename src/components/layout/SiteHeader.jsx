import { NavLink } from 'react-router-dom';
import { site } from '../../data/site.js';

function SiteHeader() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <nav className="site-nav" aria-label="Primary navigation">
        <NavLink className="site-brand" to="/" aria-label="Rangers Legends home">
          <span>Rangers</span>
          <span>Legends</span>
        </NavLink>
        <div className="site-nav__links">
          {site.navigation.map((item) => (
            <NavLink
              className={({ isActive }) =>
                isActive ? 'site-nav__link site-nav__link--active' : 'site-nav__link'
              }
              key={item.href}
              to={item.href}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default SiteHeader;

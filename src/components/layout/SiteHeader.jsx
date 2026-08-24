import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { site } from '../../data/site.js';

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const closeButtonRef = useRef(null);
  const panelRef = useRef(null);
  const mobileNavId = 'mobile-primary-navigation';

  function closeMenu({ restoreFocus = false } = {}) {
    setMenuOpen(false);

    if (restoreFocus) {
      window.requestAnimationFrame(() => {
        menuButtonRef.current?.focus();
      });
    }
  }

  useEffect(() => {
    if (!menuOpen) {
      return undefined;
    }

    window.requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeMenu({ restoreFocus: true });
      }

      if (event.key !== 'Tab' || !panelRef.current) {
        return;
      }

      const focusableElements = panelRef.current.querySelectorAll('a[href], button:not([disabled])');
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (!firstElement || !lastElement) {
        return;
      }

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }

      if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 901px)');
    const handleChange = () => {
      if (mediaQuery.matches) {
        setMenuOpen(false);
      }
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

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
        <button
          className="site-menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls={mobileNavId}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
          ref={menuButtonRef}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </nav>
      {menuOpen ? (
        <div className="site-mobile-panel site-mobile-panel--open" id={mobileNavId} ref={panelRef}>
          <div className="site-mobile-panel__inner">
            <div className="site-mobile-panel__top">
              <p>Rangers Legends</p>
              <button type="button" onClick={() => closeMenu({ restoreFocus: true })} ref={closeButtonRef}>
                Close
              </button>
            </div>
            <div className="site-mobile-panel__links" aria-label="Mobile navigation">
              {site.navigation.map((item) => (
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'site-mobile-panel__link site-mobile-panel__link--active' : 'site-mobile-panel__link'
                  }
                  key={item.href}
                  to={item.href}
                  onClick={() => closeMenu()}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export default SiteHeader;

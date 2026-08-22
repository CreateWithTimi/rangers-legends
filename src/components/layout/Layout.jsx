import { Outlet } from 'react-router-dom';
import SiteFooter from './SiteFooter.jsx';
import SiteHeader from './SiteHeader.jsx';

function Layout() {
  return (
    <div className="app-shell">
      <SiteHeader />
      <main id="main-content">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}

export default Layout;

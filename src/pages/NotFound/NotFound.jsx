import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="page page-narrow">
      <p className="eyebrow">404</p>
      <h1>Page not found</h1>
      <p className="lede">This route is not part of the current Rangers Legends archive.</p>
      <Link className="button-link" to="/">
        Return Home
      </Link>
    </div>
  );
}

export default NotFound;

import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="container py-5 text-center">
      <h1 className="display-1 fw-bold" style={{ color: 'var(--accent)' }}>404</h1>
      <h2 className="mb-3">Page not found</h2>
      <p className="mb-4">The page you're looking for doesn't exist.</p>
      <Link to="/" className="btn btn-primary">
        Go home
      </Link>
    </div>
  );
}

export default NotFound;

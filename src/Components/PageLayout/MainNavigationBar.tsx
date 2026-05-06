import { NavLink } from 'react-router-dom';
import './MainNavigationBar.css';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Blog', to: '/blog' },
];

const MainNavigationBar = () => {
  return (
    <nav aria-label="Main navigation" className="container-fluid text-center bg-primary-footer p-1">
      <div className="row">
        {NAV_LINKS.map(({ label, to }) => (
          <div className="col p-1" key={to}>
            <NavLink
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                'btn btn-primary w-100 h-100 fs-3' + (isActive ? ' nav-active' : '')
              }
            >
              {label}
            </NavLink>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default MainNavigationBar;

import { Link, Outlet } from 'react-router-dom';
import NavLinks from './NavLinks.jsx';

const SiteLayout = () => {
  return (
    <div className="site-shell">
      <header className="site-header">
        <Link className="brand" to="/" aria-label="Ir al inicio">
          IA
        </Link>
        <NavLinks />
      </header>

      <main className="site-main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <span>© 2026 Iván Arriola</span>
        <a href="https://github.com/ivan1arriola" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </footer>
    </div>
  );
};

export default SiteLayout;

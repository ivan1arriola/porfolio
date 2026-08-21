import NavLink from './NavLink.jsx';

const NavLinks = () => {
  return (
    <nav className="nav-links" aria-label="Navegación principal">
      <NavLink to="/">Inicio</NavLink>
      <NavLink to="/about">Sobre mí</NavLink>
      <NavLink to="/portfolio">Proyectos</NavLink>
      <NavLink to="/contact">Contacto</NavLink>
    </nav>
  );
};

export default NavLinks;

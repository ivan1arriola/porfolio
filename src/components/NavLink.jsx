import { NavLink as RouterNavLink } from 'react-router-dom';

const NavLink = ({ to, children }) => {
  return (
    <RouterNavLink
      to={to}
      end={to === '/'}
      className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
    >
      {children}
    </RouterNavLink>
  );
};

export default NavLink;

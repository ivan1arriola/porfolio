import React from 'react';
import NavLink from './NavLink';
import './css/links.css';

const NavLinks = ({vertical = false}) => {
    const navClass = vertical ? "nav-links nav vertical " : "nav-links nav";
    return (
        <div className={navClass}>
            <NavLink to="/about" >Sobre Mi</NavLink>
            <NavLink to="/portfolio" >Portfolio</NavLink>
            <NavLink to="/contact" >Contacto</NavLink>
        </div>
    );
}

export default NavLinks;
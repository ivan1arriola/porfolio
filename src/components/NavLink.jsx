import {Link } from "react-router-dom";

const NavLink = ({ to, children, active }) => {
    const activeClass = active ? "nav-link active fw-bold" : "nav-link fw-bold";
    return (
        <Link to={to} className={activeClass}> {children} </Link>
    );
}

export default NavLink;

const NavLink = ({ to, children, active }) => {
    const activeClass = active ? "nav-link active" : " nav-link";
    return (
        <a href={to} className={activeClass}> {children} </a>
    );
}

export default NavLink;
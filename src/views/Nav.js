import './Nav.scss';
import { NavLink } from 'react-router-dom';
const Nav = () =>{
    return (
        <div className="topnav">
            <NavLink activeClassName="active1" to="/" exact>Home</NavLink>
            <NavLink activeClassName="active1" to="/timer">Timer Apps</NavLink>
            <NavLink activeClassName="active1" to="/listmembers">List Members</NavLink>
            <NavLink activeClassName="active1" to="/blog">Blog Apps</NavLink>
            <NavLink activeClassName="active1" to="/secret">Secret</NavLink>
            {/* <NavLink activeClassName="active1" to="/addnewblog">Add New Blog</NavLink> */}
        </div>
    );
}
export default Nav;
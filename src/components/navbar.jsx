import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    return (
        <nav>
            <ul className="navbar">
                <li>
                    <NavLink to="/portfolio" className="nav-link">Projects</NavLink>
                </li>
                <li>
                    <NavLink to="/" exact className="nav-link">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/contacts" className="nav-link">Contacts</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;



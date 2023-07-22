import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    return (
        <nav>
            <ul className="navbar">
                <li>
                    <Link to="/portfolio" className="nav-link">Projects</Link>
                </li>
                <li>
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li>
                    <Link to="/contacts" className="nav-link">Contacts</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;


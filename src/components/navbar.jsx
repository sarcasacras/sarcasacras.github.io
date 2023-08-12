import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    const [hoveredLink, setHoveredLink] = useState('');

    useEffect(() => {
        const stripe = document.querySelector('.nav-stripe');
        const activeLink = document.querySelector('.active').innerHTML;

        let newPosition;
        switch (hoveredLink) {
            case 'projects':
                newPosition = '83%';
                break;
            case 'home':
                newPosition = '50%';
                break;
            case 'contacts':
                newPosition = '17%';
                break;
            default:
                switch (activeLink) {
                    case 'Projects':
                        newPosition = '83%'
                        break;
                    case 'Home':
                        newPosition = '50%'
                        break;
                    case 'Contacts':
                        newPosition = '17%';
                        break;
                }
        }
        stripe.style.right = newPosition;
    }, [hoveredLink]);

    return (
        <div className='nav-wrapper'>
            <nav className='navbar'>
                <li onMouseEnter={() => setHoveredLink('projects')} onMouseLeave={() => setHoveredLink('')}>
                    <NavLink to="/portfolio" className="nav-link">Projects</NavLink>
                </li>
                <li onMouseEnter={() => setHoveredLink('home')} onMouseLeave={() => setHoveredLink('')}>
                    <NavLink to="/" exact className="nav-link">Home</NavLink>
                </li>
                <li onMouseEnter={() => setHoveredLink('contacts')} onMouseLeave={() => setHoveredLink('')}>
                    <NavLink to="/contacts" className="nav-link">Contacts</NavLink>
                </li>
                <img src="../src/assets/nav-stripe.png" alt="" className='nav-stripe' />
            </nav>
        </div>
    );
};

export default Navbar;


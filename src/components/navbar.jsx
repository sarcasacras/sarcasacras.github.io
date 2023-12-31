import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import hamburgerIcon from '../../public/hamburger.svg';


import stripe from '../../public/nav-stripe.png'


const Navbar = () => {
    const [hoveredLink, setHoveredLink] = useState('');
    
    useEffect(() => {
        const stripe = document.querySelector('.nav-stripe');
        const activeLink = document.querySelector('.active').innerHTML;

        let newPosition;
        switch (hoveredLink) {
            case 'projects':
                newPosition = '63.3%';
                break;
            case 'home':
                newPosition = '87.8%';
                break;
            case 'contacts':
                newPosition = '36.8%';
                break;
            case 'about':
                newPosition = '11.8%';
                break;
            default:
                switch (activeLink) {
                    case 'Projects':
                        newPosition = '63.3%'
                        break;
                    case 'Home':
                        newPosition = '87.8%'
                        break;
                    case 'Contacts':
                        newPosition = '36.8%';
                        break;
                    case 'About':
                        newPosition = '11.8%';
                        break;
                }
        }
        stripe.style.right = newPosition;
    }, [hoveredLink]);
    
    function handleHamClick() {
        const navbar = document.querySelector('.navbar');
        navbar.classList.toggle("nav-active");
    }
    
    return (
        <div className='nav-wrapper'>
            <nav className='navbar'>
                <li onMouseEnter={() => setHoveredLink('home')} onMouseLeave={() => setHoveredLink('')}>
                    <NavLink to="/" exact className="nav-link">Home</NavLink>
                </li>
                <li onMouseEnter={() => setHoveredLink('projects')} onMouseLeave={() => setHoveredLink('')}>
                    <NavLink to="/portfolio" className="nav-link">Projects</NavLink>
                </li>
                <li onMouseEnter={() => setHoveredLink('contacts')} onMouseLeave={() => setHoveredLink('')}>
                    <NavLink to="/contacts" className="nav-link">Contacts</NavLink>
                </li>
                <li onMouseEnter={() => setHoveredLink('about')} onMouseLeave={() => setHoveredLink('')}>
                    <NavLink to="/about" className="nav-link">About</NavLink>
                </li>
                <img src={hamburgerIcon} width="35px" height="35px" onClick = {handleHamClick} className="hamburger" alt="" />
                <img src={stripe} alt="" className='nav-stripe' />
            </nav>
        </div>
    );
    
};

export default Navbar;
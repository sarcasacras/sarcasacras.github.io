import React, { useState, useEffect } from 'react';
import DiamondLink from './DiamondLink';
import './Sidebar.css';

function Sidebar() {
    const [activeSection, setActiveSection] = useState('section1');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['section1', 'section2', 'section3', 'section4'];
            for (const section of sections) {
                const element = document.getElementById(section);
                const rect = element.getBoundingClientRect(); //получаем позицию элемента на экране + значения top, right, left, bottom
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    setActiveSection(section);
                    return;
                }
            }
            setActiveSection(null);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="sidebar">
            <DiamondLink to="#section1" active={activeSection === 'section1'}></DiamondLink>
            <DiamondLink to="#section2" active={activeSection === 'section2'}></DiamondLink>
            <DiamondLink to="#section3" active={activeSection === 'section3'}></DiamondLink>
            <DiamondLink to="#section4" active={activeSection === 'section4'}></DiamondLink>
        </div>
    );
}

export default Sidebar;

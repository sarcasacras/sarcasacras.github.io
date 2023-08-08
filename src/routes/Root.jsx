import React, { useEffect } from "react";
import Navbar from '../components/navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/footer'
import './home.css'
import AOS from "aos";
import "aos/dist/aos.css";
import TypeIt from "typeit-react";


export default function Root() {

    useEffect(() => {

        AOS.init();
        AOS.refresh();

    }, []);
    
    return (
        <main>
            <Navbar />
            <Sidebar />
            <div className='main-section first section' id='section1'>
                <img src="src/assets/Ellipse.png" alt="" />
                <TypeIt className="first-type">Hello, I am <span id="main-name">Andrei</span></TypeIt>
            </div>
            <div className='main-section second section' id='section2'>
                <img src="src/assets/Ellipse.png" alt="" />
                <TypeIt options={{waitUntilVisible: true}} className="second-type">
                    I am a passionate <span id="main-name">Full-Stack Developer</span>
                </TypeIt>
            </div>
            <div className='main-section third section' id='section3'>
                <h2>My skills breakdown</h2>
                <div className='skill-container'>
                    <div data-aos="zoom-in" data-aos-delay="100" className='skill-group'>
                        <h3>Front-End:</h3>
                        <ul className='skill-list'>
                            <li>• HTML 5</li>
                            <li>• CSS 3</li>
                            <li>• JavaScript</li>
                            <li>• React</li>
                            <li>• Figma</li>
                        </ul>
                    </div>
                    <div data-aos="zoom-in" data-aos-delay="200" className='skill-group'>
                        <h3>Back-End:</h3>
                        <ul className='skill-list'>
                            <li>• Node.js</li>
                            <li>• Express.js</li>
                            <li>• MongoDB</li>
                            <li>• Mongoose</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='main-section fourth section' id='section4'>
                <h2 data-aos="zoom-in">Check Out!</h2>
                <div className='button-container'>
                    <button data-aos="zoom-in-left" data-aos-delay="100" className="main-btn">My CV</button>
                    <button data-aos="zoom-in-right" data-aos-delay="100" className="main-btn">Portfolio</button>
                </div>
            </div>
            <Footer />
        </main>
    )
}
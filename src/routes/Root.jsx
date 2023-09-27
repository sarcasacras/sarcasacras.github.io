import React, { useEffect } from "react";
import Navbar from '../components/navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/footer'
import './home.css'
import AOS from "aos";
import "aos/dist/aos.css";
import TypeIt from "typeit-react";
import { Link } from "react-router-dom";
import CV from '../../public/CV.pdf';
import { ScrollRestoration } from "react-router-dom";

import { Player, Controls } from '@lottiefiles/react-lottie-player';


export default function Root() {

    useEffect(() => {

        AOS.init();
        AOS.refresh();

    }, []);
    
    return (
        <main>
            <ScrollRestoration />
            <Navbar />
            <Sidebar />
            <div className='main-section first section' id='section1'>
                <Player
                    className="player-1"
                    autoplay
                    loop
                    src="https://lottie.host/e5f99fc1-5544-4a6b-aeb6-ae1423e39cd4/ajRPV8HLMc.json"
                >
                </Player>
                <TypeIt options={{speed: 50}} className="first-type">Hello, I am <span id="main-name">Andrei</span></TypeIt>
            </div>
            <div className='main-section second section' id='section2'>
                <Player
                    className="player-1"
                    autoplay
                    loop
                    src="https://lottie.host/046b3be9-ab2a-49df-883e-c8755dd415e8/YFax095q5Z.json"
                >
                </Player>
                <TypeIt options={{waitUntilVisible: true, speed: 50}} className="second-type">
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
                            <li>• React.js</li>
                        </ul>
                    </div>
                    <div data-aos="zoom-in" data-aos-delay="200" className='skill-group'>
                        <h3>Back-End:</h3>
                        <ul className='skill-list'>
                            <li>• Node.js</li>
                            <li>• Express.js</li>
                            <li>• MongoDB</li>
                            <li>• Mongoose</li>
                            <li>• RESTful API</li>
                        </ul>
                    </div>
                    <div data-aos="zoom-in" data-aos-delay="200" className='skill-group'>
                        <h3>Other:</h3>
                        <ul className='skill-list'>
                            <li>• Git version control system</li>
                            <li>• Photoshop</li>
                            <li>• Figma</li>
                            <li>• After Effects</li>
                            <li>• Basic UI/UX design concepts</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='main-section fourth section' id='section4'>
                <h2 data-aos="zoom-in">Check Out!</h2>
                <div className='button-container'>
                    <a data-aos="zoom-in-left" data-aos-delay="100" className="main-btn" href={CV}>My CV</a>
                    <Link data-aos="zoom-in-left" data-aos-delay="100" className="main-btn" to="/portfolio">Portfolio</Link>
                </div>
            </div>
            <Footer />
        </main>
    )
}
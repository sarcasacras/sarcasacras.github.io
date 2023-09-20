import { useEffect } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import './portfolio.css';
import AOS from "aos";
import "aos/dist/aos.css";

import gsetupThumb from '../../public/g-setup.png';
import d2Thumb from '../../public/d2.png';
import artroomThumb from '../../public/artroom-th.png';
import davidsanThumb from '../../public/davidsan-th.png';
import htmlIcon from '../../public/html.png';
import cssIcon from '../../public/css.png';
import jsIcon from '../../public/JavaScript.png';
import nodejsIcon from '../../public/NodeJs.png';
import { ScrollRestoration } from "react-router-dom";

export default function Portfolio() {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <main>
            <ScrollRestoration />
            <Navbar />
            <div className='project-container'>

                <div data-aos="zoom-in-left" className="project left">
                    <img src={artroomThumb} alt="" className='project-thumb' />
                    <div className='project-flex'>
                        <div className='project-info'>
                            <h3>artroom-design.com</h3>
                            <p>The website, built for a design firm - "Artroom"</p>
                        </div>
                        <div className="tech-stack">
                            <p>Tech-Stack:</p>
                            <img src={htmlIcon} alt="" />
                            <img src={cssIcon} alt="" />
                            <img src={jsIcon} alt="" />
                            <img src={nodejsIcon} alt="" />
                        </div>
                        <a href="https://artroom-design.com/"><button className='open-btn'>Open</button></a>
                    </div>
                </div>

                <div data-aos="zoom-in-right" className="project right">
                    <img src={davidsanThumb} alt="" className='project-thumb' />
                    <div className='project-flex'>
                        <div className='project-info'>
                            <h3>david-san.art</h3>
                            <p>The website, built for an artist - Davidovich Sergey</p>
                        </div>
                        <div className="tech-stack">
                            <p>Tech-Stack:</p>
                            <img src={htmlIcon} alt="" />
                            <img src={cssIcon} alt="" />
                            <img src={jsIcon} alt="" />
                            <img src={nodejsIcon} alt="" />
                        </div>
                        <a href="https://david-san.art/"><button className='open-btn'>Open</button></a>
                    </div>
                </div>

                <div data-aos="zoom-in-left" className="project left">
                    <img src={d2Thumb} alt="" className='project-thumb' />
                    <div className='project-flex'>
                        <div className='project-info'>
                            <h3>D2 Development</h3>
                            <p>Portfolio website of a fictional studio - D2</p>
                        </div>
                        <div className="tech-stack">
                            <p>Tech-Stack:</p>
                            <img src={htmlIcon} alt="" />
                            <img src={cssIcon} alt="" />
                            <img src={jsIcon} alt="" />
                            <img src={nodejsIcon} alt="" />
                        </div>
                        <a href="https://d2.up.railway.app/"><button className='open-btn'>Open</button></a>
                    </div>
                </div>
                <div data-aos="zoom-in-right" className="project right">
                    <img src={gsetupThumb} alt="" className='project-thumb' />
                    <div className='project-flex'>
                        <div className='project-info'>
                            <h3>G-Setup</h3>
                            <p>Portfolio website of a fictional e-commerce brand - G-Setup. Lacks a backend</p>
                        </div>
                        <div className="tech-stack">
                            <p>Tech-Stack:</p>
                            <img src={htmlIcon} alt="" />
                            <img src={cssIcon} alt="" />
                            <img src={jsIcon} alt="" />
                        </div>
                        <a href="https://sarcasacras.github.io/g-setup"><button className='open-btn'>Open</button></a>
                    </div>
                </div>

            </div>

            <Footer />
        </main>
    )
}

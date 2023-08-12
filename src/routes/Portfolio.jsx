import { useEffect } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import './portfolio.css';
import AOS from "aos";
import "aos/dist/aos.css";

import artroomThumb from '../../public/artroom-th.png';
import davidsanThumb from '../../public/davidsan-th.png';
import htmlIcon from '../../public/html.png';
import cssIcon from '../../public/css.png';
import jsIcon from '../../public/JavaScript.png';
import nodejsIcon from '../../public/NodeJs.png';

export default function Portfolio() {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <main>
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
                        <button className='open-btn'>Open</button>
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
                        <button className='open-btn'>Open</button>
                    </div>
                </div>

            </div>

            <Footer />
        </main>
    )
}

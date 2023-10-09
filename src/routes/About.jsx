import Navbar from '../components/navbar';
import Footer from '../components/footer';
import './about.css';


import { ScrollRestoration } from "react-router-dom";

export default function About() {
    return (
        <main>
            <ScrollRestoration />
            <Navbar />
            <h1>About me</h1>
            <div className='section-box'>
                <div className='section1'>
                    <h2>A little bit about me...</h2>
                    <p id='intro'>I am a passionate, 21 years old Full Stack Developer with more than 1 year of
                        experience in the field. During this period of time, I learned and practised HTML ,
                        CSS, JavaScript, React, MongoDB and ExpressJS to craft websites with stunning
                        design and complex functionality. I really enjoy communicating and learning
                        something new everyday.
                    </p>
                </div>
                <div className='section1'>
                    <h2>Full list of my skills</h2>
                    <p className='skill'>• HTML <span className='skill-level'>- Expert</span></p>
                    <p className='skill'>• CSS <span className='skill-level'>- Expert</span></p>
                    <p className='skill'>• JavaScript <span className='skill-level'>- Expert</span></p>
                    <p className='skill'>• React <span className='skill-level'>- Advanced</span></p>
                    <p className='skill'>• Node.js <span className='skill-level'>- Advanced</span></p>
                    <p className='skill'>• MongoDB <span className='skill-level'>- Advanced</span></p>
                    <p className='skill'>• Express.js <span className='skill-level'>- Expert</span></p>
                    <p className='skill'>• TypeScript <span className='skill-level'>- Basic</span></p>
                    <p className='skill'>• Photoshop, After Effects <span className='skill-level'>- Basic</span></p>
                    <p className='skill'>• Figma <span className='skill-level'>- Basic</span></p>
                </div>
            </div>
            
            <h2 id='w-exp-header'>My work experience</h2>

            <div className='w-exp'>
                <h3 className='w-header'>Artroom Design Studio - Full Stack Developer (Freelance)</h3>
                <p className='w-link'>https://artroom-design.com/</p>
                <p className='w-date'>2022-2023</p>
                <ul className='w-work'>
                    <li>Designed, developed and maintained a website according to client's needs, using HTML, CSS, JavaScript, ExpressJS</li>
                    <li>Created a custom admin panel with authorization and authentication systems for client to manage content</li>
                    <li>Implemented a database connection to store content in cloud using MongoDB</li>
                </ul>
            </div>

            <p className='conclusion'>Feel free to contact if you want to hire me or have any questions!</p>

            <Footer />
        </main>
    )
}
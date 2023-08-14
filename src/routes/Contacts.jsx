import Navbar from '../components/navbar';
import Footer from '../components/footer';
import './contacts.css';

import linkedinL from '../../public/linkedin-l.png';
import githubL from '../../public/github-l.png';
import mailL from '../../public/mail-l.png';
import facebookL from '../../public/facebook-l.png';
import { ScrollRestoration } from "react-router-dom";

export default function Contacts() {
    return (
        <main>
            <ScrollRestoration />
            <Navbar />
            <h1>My contact info</h1>
            <div className='contact-container'>
                <div className="contact-block">
                    <a href="https://www.linkedin.com/in/andrei-davidovich-963569277/">
                        <div className='contact'>
                            <img src={linkedinL} alt="" />
                            <p>Linkedin</p>
                        </div>
                    </a>
                    <a href="https://github.com/sarcasacras">
                        <div className='contact'>
                            <img src={githubL} alt="" />
                            <p>Github</p>
                        </div>
                    </a>
                </div>
                <div className="contact-block">
                    <a href="">
                        <div className='contact rs'>
                            <p>dewaleguitar@gmail.com</p>
                            <img src={mailL} className='mail-icon' alt="" />
                        </div>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61550098111202">
                        <div className='contact rs'>
                            <p>Facebook</p>
                            <img src={facebookL} alt="" />
                        </div>
                    </a>

                    <a href="">
                        <div className='contact mobile'>
                            <img src={mailL} className='mail-icon' alt="" />
                            <p>dewaleguitar@gmail.com</p>
                        </div>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61550098111202">
                        <div className='contact mobile'>
                            <img src={facebookL} alt="" />
                            <p>Facebook</p>
                        </div>
                    </a>
                </div>
            </div>
            <Footer />
        </main>
    )
}

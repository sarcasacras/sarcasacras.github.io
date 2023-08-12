import Navbar from '../components/navbar';
import Footer from '../components/footer';
import './contacts.css';

import linkedinL from '../../public/linkedin-l.png';
import githubL from '../../public/github-l.png';
import mailL from '../../public/mail-l.png';
import facebookL from '../../public/facebook-l.png';

export default function Contacts() {
    return (
        <main>
            <Navbar />
            <h1>My contact info</h1>
            <div className='contact-container'>
                <div className="contact-block">
                    <div className='contact'>
                        <img src={linkedinL} alt="" />
                        <p>Linkedin</p>
                    </div>
                    <div className='contact'>
                        <img src={githubL} alt="" />
                        <p>Github</p>
                    </div>
                </div>
                <div className="contact-block">
                    <div className='contact rs'>
                        <p>dewaleguitar@gmail.com</p>
                        <img src={mailL} className='mail-icon' alt="" />
                    </div>
                    <div className='contact rs'>
                        <p>Facebook</p>
                        <img src={facebookL} alt="" />
                    </div>

                    <div className='contact mobile'>
                        <img src={mailL} className='mail-icon' alt="" />
                        <p>dewaleguitar@gmail.com</p>
                    </div>
                    <div className='contact mobile'>
                        <img src={facebookL} alt="" />
                        <p>Facebook</p>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}

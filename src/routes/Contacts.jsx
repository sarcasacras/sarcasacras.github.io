import Navbar from '../components/navbar';
import Footer from '../components/footer';
import './contacts.css'


export default function Contacts() {
    return (
        <main>
            <Navbar />
                <h1>My contact info</h1>
                <div className='contact-container'>
                    <div className="contact-block">
                        <div className='contact'>
                            <img src="src/assets/linkedin-l.png" alt="" />
                            <p>Linkedin</p>
                        </div>
                        <div className='contact'>
                            <img src="src/assets/github-l.png" alt="" />
                            <p>Github</p>
                        </div>
                    </div>
                    <div className="contact-block">
                        <div className='contact rs'>
                            <p>dewaleguitar@gmail.com</p>
                            <img src="src/assets/mail-l.png" className='mail-icon' alt="" />
                        </div>
                        <div className='contact rs'>
                            <p>Facebook</p>
                            <img src="src/assets/facebook-l.png" alt="" />
                        </div>
                    </div>
                </div>
            <Footer />
        </main>
    )
}
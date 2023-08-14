import './footer.css'
import linkedin from '../../public/linkedin.png'
import github from '../../public/github.png'
import facebook from '../../public/facebook.png'
import mail from '../../public/mail.png'



export default function Footer() {
    return (
        <footer>
            <div className="ftr-container">
                <a className="media-icon" href="https://www.linkedin.com/in/andrei-davidovich-963569277/">
                    <img src={linkedin} alt="" />
                </a>
                <a className="media-icon" href="https://github.com/sarcasacras">
                    <img src={github} alt="" />
                </a>
                <a className="media-icon" href="your-link-to-facebook">
                    <img src={facebook} alt="" />
                </a>
            </div>
            <div className="ftr-container">
                <img src={mail} alt="" />
                <p>dewaleguitar@gmail.com</p>
            </div>
        </footer>
    )
}
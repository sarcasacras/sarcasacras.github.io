import './footer.css'
import linkedin from '../../public/linkedin.png'
import github from '../../public/github.png'
import facebook from '../../public/facebook.png'
import mail from '../../public/mail.png'



export default function Footer() {
    return (
        <footer>
            <div className="ftr-container">
                <img className="media-icon" src={linkedin} alt="" />
                <img className="media-icon" src={github} alt="" />
                <img className="media-icon" src={facebook} alt="" />
            </div>
            <div className="ftr-container">
                <img src={mail} alt="" />
                <p>dewaleguitar@gmail.com</p>
            </div>
        </footer>
    )
}
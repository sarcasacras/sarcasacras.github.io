import './footer.css'


export default function Footer() {
    return (
        <footer>
            <div className="ftr-container">
                <img className="media-icon" src="src/assets/linkedin.png" alt="" />
                <img className="media-icon" src="src/assets/github.png" alt="" />
                <img className="media-icon" src="src/assets/facebook.png" alt="" />
                <img className="media-icon" src="src/assets/instagram.png" alt="" />
            </div>
            <div className="ftr-container">
                <img src="src/assets/mail.png" alt="" />
                <p>dewaleguitar@gmail.com</p>
            </div>
        </footer>
    )
}
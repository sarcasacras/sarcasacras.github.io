import Navbar from '../components/navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/footer'
import './home.css'

export default function Root() {
    return (
        <main>
            <Navbar />
            <Sidebar />
            <div className='main-section first section' id='section1'>
                <img src="src/assets/Ellipse.png" alt="" />
                <p>Hello, i am <span id='main-name'>Andrei</span></p>
            </div>
            <div className='main-section second section' id='section2'>
                <img src="src/assets/Ellipse.png" alt="" />
                <p>I am a passionate <span id='main-name'>Full-Stack Developer</span></p>
            </div>
            <div className='main-section third section' id='section3'>
                <h2>My skills breakdown</h2>
                <div className='skill-container'>
                    <div className='skill-group'>
                        <h3>Front-End:</h3>
                        <ul className='skill-list'>
                            <li>• HTML 5</li>
                            <li>• CSS 3</li>
                            <li>• JavaScript</li>
                            <li>• React</li>
                            <li>• Figma</li>
                        </ul>
                    </div>
                    <div className='skill-group'>
                        <h3>Back-End:</h3>
                        <ul className='skill-list'>
                            <li>• Node.js</li>
                            <li>• Express.js</li>
                            <li>• MongoDB</li>
                            <li>• Mongoose</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='main-section fourth section' id='section4'>
                <h2>Check Out!</h2>
                <div className='button-container'>
                    <button className="main-btn">My CV</button>
                    <button className="main-btn">Portfolio</button>
                </div>
            </div>
            <Footer />
        </main>
    )
}
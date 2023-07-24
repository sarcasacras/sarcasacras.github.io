import Navbar from '../components/navbar';
import Sidebar from '../components/Sidebar';
import './home.css'

export default function Root() {
    return (
        <main>
            <Navbar />
            <Sidebar />
            <div className='main-section first section' id='section1'>
                <img src="src/assets/Ellipse.png" alt="" />
                <p>Hello, i am Andrei!</p>
            </div>
            <div className='main-section second section' id='section2'>
                <img src="src/assets/Ellipse.png" alt="" />
                <p>I am a passionate Full-Stack Developer</p>
            </div>
        </main>
    )
}
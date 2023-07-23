import Navbar from '../components/navbar';
import './home.css'

export default function Root() {
    return (
        <main>
            <Navbar />
            <div className='main-section1'>
                <img src="src/assets/Ellipse.png" alt="" />
                <p>Hello, my name is Andrei!</p>
            </div>
            <div className='main-section2'>
                <img src="src/assets/Ellipse.png" alt="" />
                <p>I am a passionate Full-Stack Developer</p>
            </div>
        </main>
    )
}
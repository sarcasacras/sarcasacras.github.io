import Navbar from '../components/navbar';
import Footer from '../components/footer'
import './portfolio.css'


export default function Portfolio() {
    return (
        <main>
            <Navbar />

            <div className='project-container'>

                <div className="project left">
                    <img src="src/assets/artroom-th.png" alt="" className='project-thumb' />
                    <div className='project-flex'>
                        <div className='project-info'>
                            <h3>artroom-design.com</h3>
                            <p>The website, built for a design firm - "Artroom"</p>
                        </div>
                        <div className="tech-stack">
                            <p>Tech-Stack:</p>
                            <img src="src/assets/html.png" alt="" />
                            <img src="src/assets/css.png" alt="" />
                            <img src="src/assets/JavaScript.png" alt="" />
                            <img src="src/assets/NodeJs.png" alt="" />
                        </div>
                        <button className='open-btn'>Open</button>
                    </div>
                </div>

                <div className="project right">
                    <img src="src/assets/davidsan-th.png" alt="" className='project-thumb' />
                    <div className='project-flex'>
                        <div className='project-info'>
                            <h3>david-san.art</h3>
                            <p>The website, built for an artist - Davidovich Sergey</p>
                        </div>
                        <div className="tech-stack">
                            <p>Tech-Stack:</p>
                            <img src="src/assets/html.png" alt="" />
                            <img src="src/assets/css.png" alt="" />
                            <img src="src/assets/JavaScript.png" alt="" />
                            <img src="src/assets/NodeJs.png" alt="" />
                        </div>
                        <button className='open-btn'>Open</button>
                    </div>
                </div>

            </div>

            <Footer />
        </main>
    )
}
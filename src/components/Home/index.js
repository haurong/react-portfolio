import { useState } from 'react'
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'

const Home = () => {
    const [ letterClass , setLetterClass ] = useState('text-animate');
    const nameArray = ['l', 'o','b','o','d','a','n'];
    const jobArray = ['d','e','s','i','g','n','e','r'];

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br />I'm
                <img src={LogoTitle} alt="developer" />
                hloe.
                <br />
                web developer
                </h1>
                <h2>Designer</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    );
}

export default Home;
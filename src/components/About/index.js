import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState  } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faReact ,faCss3, faJsSquare } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
import illustrator from '../../assets/images/illustrator.svg';
import Ps from '../../assets/images/ps.svg';


const About = () => {
    const [letterClass , setLetterClass] = useState('text-animate');

    setTimeout(() => {setLetterClass('text-animate-hover')}, 4000)

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A','b','o','u','t',' ','m','e']}
                        idx={15}
                    />
                </h1>
                <p>
                    我是一位設計師，目前正在學習前端開發。
                </p>
                <p>
                    我天生愛研究，並且一直致力於解決問題。
                </p>
                <p>
                    If I need to define myself in one sentence that would be a family
                    person, father of a beautiful daughter, a sports fanatic,
                    photography enthusiast, and tech-obsessed!!!
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className="face1">
                        <img src={illustrator} alt="developer" />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className="face6">
                        <img src={Ps} alt="developer" />
                    </div>
                </div>
            </div>

        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About;
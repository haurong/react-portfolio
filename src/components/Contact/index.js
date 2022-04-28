import { useRef, useState  } from 'react'
import Loader from 'react-loaders';
import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';


const Contact = () => {
    const [letterClass , setLetterClass] = useState('text-animate');
    const form = useRef();

    setTimeout(() => {setLetterClass('text-animate-hover')}, 4000);

    console.log(form);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_xaksiul',
                'template_pceym62',
                form.current,
                'EriC_i73bY6ow9FYI'
            )
            .then(
                () => {
                  alert('Message successfully sent!')
                  window.location.reload(false)
                },
                () => {
                  alert('Failed to send the message, please try again')
                }
              )
          }

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C','o','n','t','a','c','t',' ','m','e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in freelance opportunities - especially ambitious or
                        large projects. However, if you have other request or question,
                        don't hesitate to contact me using below form either.
                    </p>
                    <div className="contact-form">
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                <   input type="text" name="name" placeholder="name" required />
                                </li>
                                <li className="half">
                                    <input type="email" name="email" placeholder="email" required />
                                </li>
                                <li>
                                    <input placeholder="subject" type="text" name="subject" required />
                                </li>
                                <li>
                                    <textarea placeholder="message" name="message" required ></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Chloe,
                    <br />
                    Taiwan,
                    <br />
                    No. 536, Sec. 2, Zhonghua Rd., Bali Dist., New Taipei City<br />
                    <span>chloe012125@gmail.con</span>
                </div>
                <div className="map-wrap">
                    <MapContainer center={[25.14504716704135, 121.39893702422452]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[25.14504716704135, 121.39893702422452]}>
                            <Popup>Chloe lives here!</Popup>
                        </Marker>
                    </MapContainer>
        </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact;
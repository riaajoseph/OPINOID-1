// eslint-disable-next-line
import React, { useState, useRef, useEffect } from 'react';
import './styles/Home.css';
import aboutImage from './images/iq.png'; // Ensure the correct path to the image
import Footer from './Footer';
import chat_img  from './images/chat-icon.png'
const Home = () => {
    const [url, setUrl] = useState("");
    const aboutRef = useRef(null);
    const analyserRef = useRef(null);

    const handleInputChange = (event) => {
        setUrl(event.target.value);
    };

    const handleAnalyseClick = () => {
        console.log("Analyzing URL:", url);
    };

    useEffect(() => {
        if (window.location.hash === '#AboutUs') {
            aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if (window.location.hash === '#Analyser') {
            analyserRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return (
        <div className="page">
            <div id="home" className="home-container w-full">
                <div className="home-content">
                    <div className="heading">
                        <h2>Welcome to OPINOID</h2>
                        <p>Streamline Your Comments, Amplify Your Impact!</p>
                    </div>
                    <div className='home-img'>

                        <img src={chat_img} alt="chat_img" />
                    </div>
                </div>
            </div>
            <div ref={aboutRef} className="about-container" id="about-container">
                <div className="about-content">
                    <div className="about-image">
                        <img src={aboutImage} alt="About Us" /> {/* Ensure the correct path to the image */}
                    </div>
                    <div className="about-text">
                        <div className="about-heading">
                            <h2>About Us</h2>
                        </div>
                        <div className="about-paragraph">
                            <p>Welcome to Opinoid, your gateway to effortless sentiment analysis of Youtube comments! With our platform, you can easily extract valuable insights from Youtube comments, allowing you to make informed decisions and optimize your content strategy with ease. Say goodbye to manual analysis and hello to streamlined insights with Opinoid!</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div ref={analyserRef} className="analyser-container" id="analyser-container">
                <div className="form-container">
                    <div className="field">
                        <label className="label">Please enter your URL here:</label>
                        <input
                            type="text"
                            className="input"
                            value={url}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button className="button" onClick={handleAnalyseClick}>Analyse</button>
                </div>
            </div> */}
            {/* <Footer /> */}
        </div>
    );
};

export default Home;
// AboutUs.jsx
import React from 'react';
import './styles/AboutUs.css';
import aboutImage from './images/iq.png'; // Import the image here


const AboutUs = () => {
    return (
        <div>
        <div className="about-container" id="AboutUs"> 
            <div className="about-content">
                <div className="about-image">
                    <img src={aboutImage} alt="About Us" />
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
  </div>    
    );
};

export default AboutUs;

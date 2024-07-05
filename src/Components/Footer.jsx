// Footer.jsx
import React from 'react';
import './styles/Footer.css'; // Import CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
        
                <div className="footer-faq">
                    <h3>Frequently Asked Questions</h3>
                    <ul>
                        <li>What platforms does Opinoid support for comment analysis?</li>
                        <li>How does Opinoid categorize comments into sentiments?</li>
                        <li>Can Opinoid distinguish between different types of comments?</li>
                        <li>Is Opinoid's analysis customizable?</li>
                        {/* Add more FAQ items here if needed */}
                    </ul>
                </div>
            </div>
            <p className="footer-copyright">&copy; {new Date().getFullYear()} Opinoid. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;

// src/components/Footer/Footer.jsx

import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdDescription } from 'react-icons/md';
import './styles.scss'; // Your custom styles for Footer

const Footer = () => {
    const openLinkedInProfile = () => {
        window.open("https://www.linkedin.com/in/vineethkc/", "_blank");
    };

    const openGithubProfile = () => {
        window.open("https://github.com/vinupeeks/", "_blank");
    };

    const openResume = () => {
        window.open("path-to-your-cover-letter.pdf", "_blank"); // Replace with your cover letter URL or path
    };

    return (
        <footer className="footer">
            <div className="footer__links">
                <div className="footer__item" onClick={openLinkedInProfile}>
                    <FaLinkedin className="footer__icon" />
                    <span className="footer__button">LinkedIn</span>
                </div>
                <div className="footer__item" onClick={openGithubProfile}>
                    <FaGithub className="footer__icon" />
                    <span className="footer__button">GitHub</span>
                </div>
                <div className="footer__item" onClick={openResume}>
                    <MdDescription className="footer__icon" />
                    <span className="footer__button">Resume</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

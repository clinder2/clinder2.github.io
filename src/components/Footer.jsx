import React from "react";
import {useState, useEffect} from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Footer() {
    const [darkMode, setDarkMode] = useState(true);

    const toggleTheme = () => {
        setDarkMode(prev => !prev);
    };

    useEffect(() => {
        const root = document.documentElement;

        if (darkMode) {
            root.style.setProperty('--primary-text', 'white');
            root.style.setProperty('--background-color', 'black');
        } else {
            root.style.setProperty('--primary-text', 'black');
            root.style.setProperty('--background-color', 'white');
        }
    }, [darkMode]);
    return (
        <footer className="footer">
            <div className="footer-left">
                <a href="https://github.com/stephenl99" target="_blank" rel="noopener noreferrer">
                    <FaGithub/>
                </a>
                <a href="https://www.linkedin.com/in/christopher-linder-84987a2a9/" target="_blank"
                   rel="noopener noreferrer">
                    <FaLinkedin/>
                </a>
                <a href="https://leetcode.com/u/Clinder1/" target="_blank" rel="noopener noreferrer">
                    <SiLeetcode/>
                </a>
                <button className="theme-toggle-btn" onClick={toggleTheme}>
                    {darkMode ? '☀️ Light' : '🌙 Dark'}
                </button>
            </div>

            <div className="footer-center">
                © 2025 Christopher Linder
            </div>
        </footer>
    );
}

export default Footer;

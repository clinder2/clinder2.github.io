import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-left">
                <a href="https://github.com/clinder2" target="_blank" rel="noopener noreferrer">
                    <FaGithub/>
                </a>
                <a href="https://www.linkedin.com/in/christopher-linder-84987a2a9/" target="_blank"
                   rel="noopener noreferrer">
                    <FaLinkedin/>
                </a>
                <a href="https://leetcode.com/u/Clinder1/" target="_blank" rel="noopener noreferrer">
                    <SiLeetcode/>
                </a>
            </div>

            <div className="footer-center">
                © 2025 Christopher Linder
            </div>
        </footer>
    );
}

export default Footer;

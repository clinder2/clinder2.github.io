import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
function Contact() {
    return (
        <div id="contact" className={"section"}>
            <h1 align={"center"}>Contact</h1>
            <p className={"text-center"}>
                Please reach out via{" "}
                <a href="mailto:clinderjr@icloud.com" className="email-link">
                    clinderjr@icloud.com
                </a>
            </p>

            <div className="contact-buttons">
                <a
                    href="https://github.com/clinder2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-button"
                >
                    <FaGithub/> GitHub
                </a>

                <a
                    href="https://www.linkedin.com/in/christopher-linder-84987a2a9/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-button"
                >
                    <FaLinkedin/> LinkedIn
                </a>

                <a
                    href="https://leetcode.com/u/Clinder1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-button"
                >
                    <SiLeetcode/> LeetCode
                </a>
            </div>
        </div>
    )
}

export default Contact
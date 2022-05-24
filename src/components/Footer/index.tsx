import { Logo } from "../Logo";
import { Container } from "./styles";
import { FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";

export function Footer() {
    return (
        <Container>
            <section>
                <div>
                    <Logo />
                    <p>BMS Front End by Bruno Matos</p>
                    <span>
                        <a href="https://twitter.com/bms_dev" target="_blank"><FiTwitter /></a>
                        <a href="https://www.instagram.com/bruno_matos_silva1991/" target="_blank"><FiInstagram /></a>
                        <a href="https://www.linkedin.com/in/bmsfrontend/" target="_blank"><FiLinkedin /></a>
                    </span>
                </div>

                <div className="footerGroup">
                    <h2>Category</h2>
                    <ul>
                        <li>Css</li>
                        <li>Javascript</li>
                        <li>Tailwind</li>
                        <li>React Js</li>
                        <li>Vue Js</li>
                    </ul>
                </div>

                <div className="footerGroup">
                    <h2>About Me</h2>
                    <ul>
                        <li>About Me</li>
                        <li>Projects</li>
                    </ul>
                </div>

                <div className="footerGroup">
                    <h2>Get in Touch</h2>
                    <ul>
                        <li>11 9 5533-8877</li>
                        <li>bmsfrontend@gmail.com</li>
                    </ul>
                </div>

                <div className="footerGroup">
                    <h2>Follow Us</h2>
                    <ul>
                        <a href="https://twitter.com/bms_dev" target="_blank"><li>Twitter</li></a>
                        <a href="https://www.instagram.com/bruno_matos_silva1991/" target="_blank"><li>Instagram</li></a>
                        <a href="https://www.linkedin.com/in/bmsfrontend/" target="_blank"><li>Linkedin</li></a>
                    </ul>
                </div>

            </section>
        </Container>
    );
}
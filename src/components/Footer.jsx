import React from 'react';
import '../App.css';
import { GitHub, Instagram, LinkedIn } from '@mui/icons-material';
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="container">
                    <h3>Stay Connected</h3>
                    <p>"The greatest gift you can give someone is your time because when you give your time, you are giving a portion<br /> of your life that you can never get back."</p>
                    <div className="social-links">
                        <a href="mailto:hareesvar10@gmail.com"><EmailIcon /></a>
                        <a href="https://github.com/Hareesvar7" className="google-plus" target='blank'><GitHub /> </a>
                        <a href="https://www.linkedin.com/in/hareesvar7/" className="linkedin" target='blank'><LinkedIn /> </a>
                    </div>
                    <div className="credits">
                        <p>Designed by Hariharan</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;

// LandingPage.js
import React from 'react';
import styles from './landing.module.css'; // Import the CSS module
import Logo from './logo';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div>
            <div className={styles.header}>
                <nav>
                    <div className="logo-container">
                        <Logo />
                    </div>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#faq">FAQ</a></li>
                        <li><Link to="/aboutus">Contact</Link></li>
                        <li>
                            <Link to="/login" className={styles.loginBtn}>Log In</Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className={styles.mainContent}>
                <h1>READY TO JOIN <br />RHYTHM WAVE?</h1>
                <Link to="/signup" className={styles.joinNowBtn}>Join Now</Link>
            </div>
        </div>
    );
};

export default LandingPage;

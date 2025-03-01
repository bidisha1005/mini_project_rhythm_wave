import React from "react";
import './sidebar1.css';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/homepage" className="sidebar-link">
            <img src="../home.png" alt="Home Icon" className="icon" />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/musicvideo" className="sidebar-link">
            <img
              src="../clapperboard.png"
              alt="Video Icon"
              className="icon"
            />
            <span>Music Video</span>
          </Link>
        </li>
        <li>
          <Link to="/library" className="sidebar-link">
            <img src="../library.png" alt="Library Icon" className="icon" />
            <span>Your Library</span>
          </Link>
        </li>
        <li>
          <Link to="/listeninghistory" className="sidebar-link">
            <img
              src="../history.png"
              alt="History Icon"
              className="icon"
            />
            <span>Listening History</span>
          </Link>
        </li>
        <li>
          <Link to="/recomm" className="sidebar-link">
            <img
              src="../question-sign.png"
              alt="Question Icon"
              className="icon"
            />
            <span>SOTD</span>
          </Link>
        </li>
      </ul>
      <div className="sidebar-footer">
        <p>© 2024 Rhythm Wave</p>
        <p>
          <Link to="/aboutus" className="footer-link">About Us</Link> |
          <a href="/contact" className="footer-link"> Contact</a>
        </p>
      </div>
    </div>
  );
}

export default Sidebar;

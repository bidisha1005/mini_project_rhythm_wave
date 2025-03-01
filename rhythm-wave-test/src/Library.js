import React, { useState } from 'react';
import Logo from './logo';
import Sidebar from './sidebar';
import SearchBar from './SearchBar';
import './library.css'; // Keep global styles
import styles from './library.module.css' // Import CSS Module
import { Link } from 'react-router-dom';

const Library = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className={styles.container}>
      <Logo />
      <Sidebar />

      <div className={styles.mainContent}>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <h1>Your Playlists</h1>

        <div className={styles.charts}>
        <Link to="/mplaylist" className="card-link">
            <div className={styles.card}>
              <div className={styles.cardContent}>
                <img
                  src="../download9.png"
                  className="card-image" // Global style
                  alt="Playlist Cover"
                />
              </div>
              <div className={styles.cardTitle}>Create New Playlist</div>
              <p className="card-description">Click here to make a new playlist.</p>
            </div>
          </Link>
          <Link to="/playlist" className="card-link">
            <div className={styles.card}>
              <div className={styles.cardContent}>
                <img
                  src="../download.jpeg"
                  className="card-image" // Global style
                  alt="Create New Playlist"
                />
              </div>
              <div className={styles.cardTitle}>My Playlist 1</div>
              <p className="card-description">chill beats</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Library;

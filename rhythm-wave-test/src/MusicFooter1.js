import React, { useState, useRef, useEffect } from 'react';
import styles from './musicFooter.module.css';  // Import the CSS module

const MusicFooter = ({ currentSong, isPlaying, togglePlayPause, playPrevious, playNext }) => {
  const [volume, setVolume] = useState(1); // Volume state: 1 is full volume
  const audioRef = useRef(null);

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  useEffect(() => {
    // Initialize volume when the component mounts
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  return (
    <div className={styles.musicPlayer}>
      <div className={styles.trackInfo}>
        <img
          id="current-album-art"
          src={currentSong.coverSrc}
          alt="Album Art"
          className={styles.albumArt}
        />
        <div className={styles.trackDetails}>
          <h3 id="current-song-title" className={styles.songTitle}>
            {currentSong.title}
          </h3>
          <p id="current-artist-name" className={styles.artistName}>
            {currentSong.artist}
          </p>
        </div>
      </div>
      <div className={styles.playerControls}>
        <button onClick={playPrevious} className={styles.controlButton}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14 19L7 12L14 5V19Z" fill="white" />
          </svg>
        </button>
        <button onClick={togglePlayPause} className={styles.controlButton}>
          {isPlaying ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 6H12V18H6V6ZM12 6H18V18H12V6Z" fill="white" />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 5V19L19 12L8 5Z" fill="white" />
            </svg>
          )}
        </button>
        <button onClick={playNext} className={styles.controlButton}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 5L17 12L10 19V5Z" fill="white" />
          </svg>
        </button>
      </div>
      <div className={styles.volumeControl}>
        <input
          ref={audioRef}
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className={styles.volumeSlider}
        />
      </div>
    </div>
  );
};

export default MusicFooter;

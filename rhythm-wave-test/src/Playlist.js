import React, { useState, useRef } from 'react';
import Sidebar from './sidebar';
import Logo from './logo';
import MusicFooter from './MusicFooter';
import styles from './playlist.module.css';  // Import the CSS module

const Playlist = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const playlist = [
    { title: "Do I Wanna Know?", artist: "Arctic Monkeys", album: "AM", duration: "4:32", src: "../s1.mp3", albumArt: "../s1.png" },
    { title: "Into It", artist: "Chase Atlantic", album: "Chase Atlantic", duration: "3:40", src: "../s3.mp3", albumArt: "../s3.jpeg" },
    { title: "Traitor", artist: "Olivia Rodrigo", album: "SOUR", duration: "3:45", src: "../s5.mp3", albumArt: "../s5.jpg" },
    { title: "Heat Waves", artist: "Glass Animals", album: "Dreamland", duration: "4:00", src: "../s6.mp3", albumArt: "../s6.jpeg" },
    { title: "Treat You Better", artist: "Shawn Mendes", album: "Illuminate", duration: "3:08", src: "../s2.mp3", albumArt: "../s2.jpg" },
    { title: "Die For You", artist: "The Weeknd", album: "Starboy", duration: "4:20", src: "../s4.mp3", albumArt: "../s4.jpeg" },
    { title: "Summertime Sadness", artist: "Lana Del Rey", album: "Born To Die", duration: "4:25", src: "../s9.mp3", albumArt: "../s9.jpeg" },
    { title: "Heather", artist: "Conan Gray", album: "Kid Krow", duration: "3:15", src: "../s7.mp3", albumArt: "../s7.jpeg" }
  ];

  const loadSong = (index) => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }

    setCurrentSongIndex(index);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.src = playlist[index].src;
        audioRef.current.load();
        audioRef.current.play();
        setIsPlaying(true);
      }
    }, 100);
  };

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const playNext = () => {
    const nextIndex = (currentSongIndex + 1) % playlist.length;
    loadSong(nextIndex);
  };

  const playPrevious = () => {
    const prevIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
    loadSong(prevIndex);
  };

  return (
    <div className={styles.container}>
      <Logo />
      <Sidebar />
      <div className={styles.mainContent}>
        <div className={styles.playlistHeader}>
          <div className={styles.playlistCover}>
            <img src="../download7.jpeg" alt="Playlist Cover" />
          </div>
          <div className={styles.playlistInfo}>
            <h2>My Playlist 1</h2>
            <p>• 138 songs</p>
            <p>chill beats</p>
          </div>
        </div>
        <table className={styles.songList}>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Album</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {playlist.map((song, index) => (
              <tr
                key={index}
                onClick={() => loadSong(index)}
                className={currentSongIndex === index ? styles.active : ''}
              >
                <td>{index + 1}</td>
                <td>
                  <img src={song.albumArt} alt="Album Art" />
                  {song.title}
                  <br />
                  <span>{song.artist}</span>
                </td>
                <td>{song.album}</td>
                <td>{song.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <audio ref={audioRef} src={playlist[currentSongIndex].src} />
      </div>
      <MusicFooter
        currentSong={playlist[currentSongIndex]}
        isPlaying={isPlaying}
        togglePlayPause={togglePlayPause}
        playPrevious={playPrevious}
        playNext={playNext}
        audioRef={audioRef}
      />
    </div>
  );
};

export default Playlist;

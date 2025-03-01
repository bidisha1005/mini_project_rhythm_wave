import React, { useState, useRef } from 'react';
import Sidebar from './sidebar';
import Logo from './logo';
import MusicFooter from './MusicFooter1';
import styles from './listeninghistory.module.css'; // Import the CSS module

const ListeningHistory = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const audioRef = useRef(null);

  const playlist = [
    {
      id: 1,
      title: 'Do I Wanna Know?',
      artist: 'Arctic Monkeys',
      audioSrc: '../s1.mp3',
      coverSrc: '../s1.png',
    },
    {
      id: 2,
      title: 'Treat You Better',
      artist: 'Shawn Mendes',
      audioSrc: '../s2.mp3',
      coverSrc: '../s2.jpg',
    },
    {
      id: 3,
      title: 'Into It',
      artist: 'Chase Atlantic',
      audioSrc: '../s3.mp3',
      coverSrc: '../s3.jpeg',
    },
    {
      id: 4,
      title: 'Die For You',
      artist: 'The Weeknd',
      audioSrc: '../s4.mp3',
      coverSrc: '../s4.jpeg',
    },
    {
      id: 5,
      title: 'Traitor',
      artist: 'Olivia Rodrigo',
      audioSrc: '../s5.mp3',
      coverSrc: '../s5.jpg',
    },
    {
      id: 6,
      title: 'Heat Waves',
      artist: 'Glass Animals',
      audioSrc: '../s6.mp3',
      coverSrc: '../s6.jpeg',
    },
    {
      id: 7,
      title: 'Heather',
      artist: 'Conan Gray',
      audioSrc: '../s7.mp3',
      coverSrc: '../s7.jpeg',
    },
    {
      id: 8,
      title: 'Wildest Dreams',
      artist: 'Taylor Swift',
      audioSrc: '../s8.mp3',
      coverSrc: '../s8.jpeg',
    },
    {
      id: 9,
      title: 'Summertime Sadness',
      artist: 'Lana Del Rey',
      audioSrc: '../s9.mp3',
      coverSrc: '../s9.jpeg',
    },
  ];

  const playSong = (songIndex) => {
    if (audioRef.current) {
      audioRef.current.src = playlist[songIndex].audioSrc;
      audioRef.current.play();
      setIsPlaying(true);
      setCurrentSongIndex(songIndex);
    }
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

  const playPrevious = () => {
    const previousIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
    playSong(previousIndex);
  };

  const playNext = () => {
    const nextIndex = (currentSongIndex + 1) % playlist.length;
    playSong(nextIndex);
  };

  return (
    <div className={styles.container}>
      <Logo />
      <Sidebar />

      <div className={styles.mainContent}>
        <h3 className={styles.recentlyPlayed}>Recently Played</h3>

        <div className={styles.musicList}>
          {playlist.map((song, index) => (
            <div
              key={song.id}
              className={styles.musicItem}
              onClick={() => playSong(index)}
            >
              <img src={song.coverSrc} alt="Song Cover" />
              <div className={styles.musicInfo}>
                <h3>{song.title}</h3>
                <p>{song.artist}</p>
              </div>
              <i
                className={`fas fa-play ${styles.playBtn} ${
                  isPlaying && currentSongIndex === index ? styles.playing : ''
                }`}
              ></i>
            </div>
          ))}
        </div>
      </div>

      <MusicFooter
        currentSong={playlist[currentSongIndex]}
        isPlaying={isPlaying}
        togglePlayPause={togglePlayPause}
        playPrevious={playPrevious}
        playNext={playNext}
      />
      <audio ref={audioRef} />
    </div>
  );
};

export default ListeningHistory;

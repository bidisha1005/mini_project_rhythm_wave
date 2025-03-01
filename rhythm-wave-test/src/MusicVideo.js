import React, { useState } from 'react';
import Logo from './logo';
import Sidebar from './sidebar';
import SearchBar from './SearchBar'; // Import the SearchBar component
import styles from './musicvideo.module.css'; // Import CSS module

const MusicVideo = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [videos] = useState([
    { title: "APT", artist: "Rose & Bruno Mars", src: "../song1.mp4" },
    { title: "I Ain't Worried", artist: "One Republic", src: "../song2.mp4" },
    { title: "Happy", artist: "Pharrell Williams", src: "../song3.mp4" },
    { title: "Never Gonna Give You Up", artist: "Rick Astley", src: "../song4.mp4" },
  ]);

  // Filter videos based on the search query
  const filteredVideos = videos.filter(video => 
    video.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    video.artist.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <Logo />
      <Sidebar />
      <div className={styles['main-content']}>
        <SearchBar 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery} 
        />
        
        <div className={styles['video-grid']} id="video-grid">
          {filteredVideos.map((video, index) => (
            <div key={index} className={styles['video-box']} data-title={video.title} data-artist={video.artist}>
              <video src={video.src} controls></video>
              <p>{video.title}</p>
              <p>{video.artist}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MusicVideo;

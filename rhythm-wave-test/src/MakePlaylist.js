import React, { useState } from 'react';
import styles from './mplaylist.module.css';  // Import CSS module
import Sidebar from './sidebar';
import Logo from './logo';

const MakePlaylist = () => {
  const [playlist, setPlaylist] = useState([]); // State to manage the playlist
  const [songTitle, setSongTitle] = useState(''); // State for the song title input
  const [songArtist, setSongArtist] = useState(''); // State for the artist input

  const handleAddSong = (e) => {
    e.preventDefault(); // Prevent form submission

    // Add the new song to the playlist
    setPlaylist([...playlist, { title: songTitle, artist: songArtist }]);

    // Clear the input fields
    setSongTitle('');
    setSongArtist('');
  };

  return (
    <div className={styles.body}>
      <Logo />
      <div className={styles.container}>
        <Sidebar />
        <div className={styles.mainContent}>
          <h1>Create Your Playlist</h1>
          <form onSubmit={handleAddSong} className={styles.form}>
            <input
              type="text"
              placeholder="Song Title"
              value={songTitle}
              onChange={(e) => setSongTitle(e.target.value)}
              required
              className={styles.formInput}
            />
            <input
              type="text"
              placeholder="Artist"
              value={songArtist}
              onChange={(e) => setSongArtist(e.target.value)}
              required
              className={styles.formInput}
            />
            <button type="submit" className={styles.formButton}>Add Song</button>
          </form>
          <h2>Your Playlist</h2>
          <table className={styles.songList}>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Artist</th>
              </tr>
            </thead>
            <tbody>
              {playlist.map((song, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{song.title}</td>
                  <td>{song.artist}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MakePlaylist;

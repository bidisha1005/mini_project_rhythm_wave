// SongList.js
import React from 'react';

const SongList = ({ playlist, loadSong }) => {
  return (
    <table className="song-list">
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
          <tr key={index} onClick={() => loadSong(index)}>
            <td>{index + 1}</td>
            <td>
              <img src={song.albumArt} alt="Song" />
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
  );
};

export default SongList;

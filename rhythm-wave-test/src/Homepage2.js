import React, { useState } from 'react';
import Sidebar from './sidebar1';
import SearchBar from './SearchBarH';
import Logo from './logo';
import './homepage2.module.css';

function Homepage() {
  const [searchQuery, setSearchQuery] = useState('');

  // Define your data arrays for charts, albums, and artists
  const charts = [
    { id: 1, src: '../download.jpeg', title: 'Chart 1', description: 'Your daily update of the most played tracks right now - Global.' },
    { id: 2, src: '../download2.jpg', title: 'Chart 2', description: 'Your daily update of the most played tracks right now - India.' },
    { id: 3, src: '../download3.jpg', title: 'Chart 3', description: 'Your daily update of the most viral tracks right now - Global.' },
    { id: 4, src: '../download4.jpg', title: 'Chart 4', description: 'Rhythm Wave presents the top songs you loved this year.' },
    { id: 5, src: '../download5.jpeg', title: 'Chart 5', description: 'Taylor Swift, Kanye West, Lana Del Rey and more.' },
    { id: 6, src: '../download6.jpeg', title: 'Chart 6', description: 'Harry Styles, Niall Horan, Chase Atlantic and more.' },
  ];

  const albums = [
    { id: 1, src: '../album1.jpeg', title: 'Fine Line', description: <><span>Harry Styles</span><br /><span>• 12 songs</span></> },
    { id: 2, src: '../album2.jpeg', title: 'Young Forever', description: <><span>BTS</span><br /><span>• 23 songs</span></> },
    { id: 3, src: '../album3.jpeg', title: 'Views', description: <><span>Drake</span><br /><span>• 20 songs</span></> },
    { id: 4, src: '../album4.jpeg', title: 'Sour', description: <><span>Olivia Rodrigo</span><br /><span>• 11 songs</span></> },
    { id: 5, src: '../album5.jpeg', title: 'Midnights', description: <><span>Taylor Swift</span><br /><span>• 13 songs</span></> },
    { id: 6, src: '../album6.jpeg', title: 'Currents', description: <><span>Tame Impala</span><br /><span>• 13 songs</span></> },
  ];

  const artists = [
    { id: 1, src: '../a1.jpeg', name: 'Bruno Mars' },
    { id: 2, src: '../a3.jpeg', name: 'Sabrina Carpenter' },
    { id: 3, src: '../a2.jpeg', name: 'Coldplay' },
    { id: 4, src: '../a4.jpeg', name: 'Metro Boomin' },
    { id: 5, src: '../a5.jpeg', name: 'Lana Del Rey' },
    { id: 6, src: '../a6.jpeg', name: 'Billie Eilish' },
  ];

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // Filter the content based on search query
  const filteredCharts = charts.filter(chart =>
    chart.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    chart.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredAlbums = albums.filter(album =>
    album.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    album.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredArtists = artists.filter(artist =>
    artist.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleProfileClick = () => {
    alert('Navigating to User Profile...');
  };

  return (
    <div className="homepage">
      <Logo />
      <div className="container">
        <Sidebar />
        <div className="main-content">
          <SearchBar onSearch={handleSearch} />

          <h1>Featured Charts</h1>
          <div className="charts">
            {filteredCharts.map(chart => (
              <a href="playlist.html" key={chart.id} className="card-link">
                <div className="card">
                  <div className="card-content">
                    <img src={chart.src} alt={chart.title} className="card-image" />
                  </div>
                  <div className="card-title">{chart.title}</div>
                  <p className="card-description">{chart.description}</p>
                </div>
              </a>
            ))}
          </div>

          <h1>Popular Albums</h1>
          <div className="albums">
            {filteredAlbums.map(album => (
              <a href="playlist.html" key={album.id} className="card-link">
                <div className="card">
                  <div className="card-content">
                    <img src={album.src} alt={album.title} className="card-image" />
                  </div>
                  <div className="card-title">{album.title}</div>
                  <p className="card-description">{album.description}</p>
                </div>
              </a>
            ))}
          </div>

          <h1>Popular Artists</h1>
          <div className="artists">
            {filteredArtists.map(artist => (
              <div className="artist-card" key={artist.id}>
                <img src={artist.src} alt={artist.name} className="artist-image" />
                <span className="artist-name">{artist.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Profile Icon at Top Right */}
      <div className="profile-container">
        <div onClick={handleProfileClick}>
          <img src="../profile.jpg" alt="Profile" className="profile-icon" />
        </div>
      </div>
    </div>
  );
}

export default Homepage;

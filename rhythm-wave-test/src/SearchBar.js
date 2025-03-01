import React from 'react';
import './searchbar.css';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        className="search-input"
        id="search-input"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery on change
      />
      <img
        src="../magnifying-glass copy.png"
        alt="Search Icon"
        className="search-icon"
        title="Search"
      />
    </div>
  );
};

export default SearchBar;

import React, { useState } from 'react';
import './searchbar.css';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query); // Trigger search in Homepage component
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress} // Trigger search when Enter is pressed
        className="search-input"
      />
      <img
        src="../magnifying-glass copy.png"
        alt="Search Icon"
        className="search-icon"
        title="Search"
        onClick={handleSearch} // Trigger search when icon is clicked
      />
    </div>
  );
}

export default SearchBar;

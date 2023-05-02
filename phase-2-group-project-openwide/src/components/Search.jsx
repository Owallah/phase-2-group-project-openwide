import React, { useState } from 'react';

const Search = ({ playlist, setFilteredPlaylist }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSearchCategory(event.target.value);
  };

  const handleSearchClick = () => {
    const filteredPlaylist = playlist.filter(
      (playlist) =>
        playlist.category.toLowerCase().includes(searchCategory.toLowerCase())
    );
    setFilteredPlaylist(filteredPlaylist);
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleInputChange} placeholder="Tafuta nyimbo" />
      <select value={searchCategory} onChange={handleCategoryChange}>
        <option value="">Filter</option>
        <option value="id">id</option>
        <option value="name">Name</option>
        <option value="uNm">Artist</option>
        <option value="Text">Text</option>
      </select>
      <button onClick={handleSearchClick}>Search</button>
    </div>
  );
};

export default Search;
import { useState } from 'react';

const SearchButton = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    handleSearch(searchTerm);
  };
//wueh
  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleInputChange} />
      <button onClick={handleSearchClick}>Search</button>
    </div>
  );
};

export default SearchButton;
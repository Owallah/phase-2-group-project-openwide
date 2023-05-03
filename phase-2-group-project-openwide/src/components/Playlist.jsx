import { useState, useEffect } from 'react';
import Search from './Search';
import SongItem from './SongItem';

const Playlist = ({ playList }) => {
  const [filteredPlaylist, setFilteredPlaylist] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleSearch = (searchTerm) => {
    const filteredList = playList.filter((song) =>
      song.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPlaylist(filteredList);
  };

  const handleReset = () => {
    setFilteredPlaylist(playList);
  };

  useEffect(() => {
    setFilteredPlaylist(playList);
    setIsLoading(false);
  }, [playList]);

  return (
    <>
      <div className="playlist-search">
        <Search handleSearch={handleSearch} />
        <button onClick={handleReset}>Reset</button>
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : filteredPlaylist.length > 0 ? (
        <div className="playlists">
          {filteredPlaylist.map((song) => (
            <SongItem key={song.id} song={song} />
          ))}
        </div>
      ) : (
        <p>No matching playlists found.</p>
      )}
    </>
  );
};

export default Playlist;

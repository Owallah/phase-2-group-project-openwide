import { useState } from 'react';
import Search from './Search';
import SongItem from './SongItem';

const Playlist = ({ playList, setPlaylist }) => {
  const [filteredPlaylist, setFilteredPlaylist] = useState(playList);

  const handleSearch = (searchTerm) => {
    const filteredList = playList.filter((song) =>
      song.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPlaylist(filteredList);
  };

  const handleReset = () => {
    setFilteredPlaylist(playList);
  };

  return (
    <>
      <div className="playlist-search">
        <Search handleSearch={handleSearch} />
        <button onClick={handleReset}>Reset</button>
      </div>
      {filteredPlaylist.length > 0 ? (
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

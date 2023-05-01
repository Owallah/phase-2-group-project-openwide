import React from 'react'
import React, { useState } from 'react';
import Search from './Search';
import SongItem from './SongItem';


const Playlist = ({ playList, setPlayList }) => {
  const [filteredPlaylist, setFilteredPlaylist] = useState(playList);
  
  return (
    <>
      <Search playlist={playList} setFilteredPlaylist={setFilteredPlaylist} />
      <div className="playlists">
        {filteredPlaylist.map((song) => (
          <SongItem key={song.id} song={song} />
        ))}
      </div>
    </>
  );
};


export default Playlist;

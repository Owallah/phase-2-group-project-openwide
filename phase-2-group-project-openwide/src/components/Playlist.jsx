import React from 'react'
import Search from './Search'
import SongItem from './SongItem'
import Search from './Search'

const Playlist = ({playList, setPlayList}) => {
  return (
    <>
    <Search playList={playList} setPlayList={setPlayList} />
    <div className="playlists">
        <SongItem />
    </div>
    </>
  )
}

export default Playlist;
import React from 'react'

function SongItem({ song }) {
  return (
    <div>
    
          <h2>{song.name}</h2>
          <p>Artist: {song.artist}</p>
          <p>Album: {song.album}</p>
          <p>Genre: {song.genre}</p>
          <audio controls>
            <source src={song.url} type="audio/mp3" />
          </audio>
          {song.thumbnail && (
        <img src={song.thumbnail.url} alt={song.name} />
          )}

    </div>
  )
}

export default SongItem

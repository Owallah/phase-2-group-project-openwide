import React from 'react'

function Playlist({ playList }) {
  return (
    <div>
      <h1>Playlist</h1>
      <ul>
        {playList.map((song, index) => (
          <li key={index}>
            <h2>{song.name}</h2>
            <p>Artist: {song.artist}</p>
            <p>Album: {song.album}</p>
            <p>Genre: {song.genre}</p>
            <audio controls>
              <source src={song.url} type="audio/mp3" />
            </audio>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Playlist

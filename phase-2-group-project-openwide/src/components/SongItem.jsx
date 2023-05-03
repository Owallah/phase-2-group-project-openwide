import React, { useState } from 'react'

function SongItem({ song }) {
  const [isLiked, setIsLiked] = useState(false);
  console.log(song);
  const str = song.eId;
  const id = str.split("/").pop();
  
  const nameString = song.name;
  const firstPart = nameString.split("-")[0].trim();

  //handle like 
    const handleClick = () => {
      setIsLiked(!isLiked);
    };

    const iconClass = `fa fa-heart${isLiked ? '' : '-o'}`;

    //handle share
    const handleShare = (e) => {
      e.preventDefault();
  
      if (navigator.share) {
        navigator.share({
        title: `Checkout this ${song.name} song by ${firstPart}`,
        url: `https://www.youtube.com/watch?v=${id}`,
      });
      } else {
        navigator.clipboard.writeText(`https://www.youtube.com/watch?v=${id}`)
        .then(() => {
          alert('URL copied to clipboard!');
        })
        .catch((err) => {
          alert('Error copying URL to clipboard: ' + err);
        });
    }
      
    };
    
  return (
    <div className='song-item'>
          {song.img && (
        <img src={song.img} alt={song.name} />
          )}
          <div className="song-details">
            <h4 className="artist">{firstPart}</h4>
          <h5 className='song-name'>{song.name}</h5>
          <div className="song-button-section">
            <a href="#"><i class="fa fa-plus" aria-hidden="true"></i></a>
            <a href="#" onClick={handleClick}><i class={iconClass} aria-hidden="true"></i></a>
            <a href={`https://www.youtube.com/watch?v=${id}`} target='_blank'><i class="fa fa-youtube-play" aria-hidden="true"></i></a>
            <a href="#" onClick={handleShare}><i class="fa fa-share-alt" aria-hidden="true"></i></a>
          </div>
          </div>

    </div>
  )
}

export default SongItem

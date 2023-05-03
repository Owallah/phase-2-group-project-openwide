import React, {useEffect} from 'react';

useEffect(() => {
  fetch('url')
    .then(response => response.json())
    .then(data => setPlaylist(data.results));
}, []);

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000
};

    <Slider {...settings}>
              {playlist.map(playlist => (
                <div key={playlist.id} className="slider-item">
                  <img src={playlist.background_image} alt={playlist.name} />
                  <h3>{playlist.name}</h3>
                </div>
              ))}
  </Slider>

export default Slider;


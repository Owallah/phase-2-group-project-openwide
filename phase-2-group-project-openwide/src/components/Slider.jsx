import React, {useState} from 'react';

const Slider = () => {
    const images = [
        "https://www.youtube.com/watch?v=Wc9m5TrV0TU",
        "https://www.youtube.com/watch?v=iXmqYW-dSAk",
        "https://i.ytimg.com/vi/m4JTJPC6C6A/default.jpg",
        "https://i.ytimg.com/vi/nik91HjRchI/default.jpg",
        "https://i.ytimg.com/vi/PTVbju240Zc/default.jpg",
        "https://i.ytimg.com/vi/YYOyT_mwgsc/default.jpg",
        "https://i.ytimg.com/vi/H9UIdlXhrBQ/default.jpg",
        "https://i.ytimg.com/vi/M2fzZRXeplw/default.jpg",
        "https://i.ytimg.com/vi/nwuL5D-UCoE/default.jpg",
        "https://i.ytimg.com/vi/WhQHf1GJhRk/default.jpg",
        "https://i.ytimg.com/vi/73g9VTJZJhA/default.jpg",
        "https://i.ytimg.com/vi/GrDpPw6LfKM/default.jpg",
        "https://i.ytimg.com/vi/q1e9hQXXOuc/default.jpg",
        "https://i.ytimg.com/vi/pdT9ulYf7qU/default.jpg",
        "https://i.ytimg.com/vi/DccmKKnizFY/default.jpg",
        "https://i.ytimg.com/vi/EDK9KOfknTw/default.jpg",
        "https://i.ytimg.com/vi/Z5NoQg8LdDk/default.jpg",
        "https://i.ytimg.com/vi/DVG1_x7ph9k/default.jpg",
        "https://i.ytimg.com/vi/UALDtSFiUos/default.jpg",
        "https://i.ytimg.com/vi/oJ4rTHHZyv0/default.jpg",
        "https://i.ytimg.com/vi/2SX8mpLvEC4/default.jpg",
        "https://i.ytimg.com/vi/noJ2H19Qh8A/default.jpg",
        "https://i.ytimg.com/vi/YVJ0ZKYu-GI/default.jpg",
        "https://i.ytimg.com/vi/5P07yWoBaVo/default.jpg",
        "https://i.ytimg.com/vi/Yh6YnsfAsOQ/default.jpg",
        "https://i.ytimg.com/vi/QLLzECi0BK4/default.jpg",
        "https://i.ytimg.com/vi/rR1daZboH5Y/default.jpg",
        "https://i.ytimg.com/vi/RPsFtpdUa9E/default.jpg",
        "https://i.ytimg.com/vi/baai5F0bv3s/default.jpg",
        "https://i.ytimg.com/vi/oLV1-cY2hLU/default.jpg",
        "https://i.ytimg.com/vi/EMG5vBzXQlU/default.jpg",
        "https://i.ytimg.com/vi/jMwQcl7uIRc/default.jpg",
        "https://i.ytimg.com/vi/QWHwny-RB0Q/default.jpg",
        "https://i.ytimg.com/vi/wzadPklQwuQ/default.jpg",
        "https://i.ytimg.com/vi/PMPYxr6fOs0/default.jpg",
        "https://i.ytimg.com/vi/sdaOtnuw-Ew/default.jpg",
        "https://i.ytimg.com/vi/VpCCiSLquRA/default.jpg",
        "https://i.ytimg.com/vi/XsGl-0pzEEc/default.jpg",
        "https://i.ytimg.com/vi/zWd__w5UWVc/default.jpg",
    ]
    const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
  };

  return (
    <div className="slider-container">
      <div className="slider">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${currentIndex === index ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>
      <div className="buttons">
        <button onClick={prevSlide}>Prev</button>
        <button onClick={nextSlide}>Next</button>
      </div>
    </div>
  );
};

export default Slider;


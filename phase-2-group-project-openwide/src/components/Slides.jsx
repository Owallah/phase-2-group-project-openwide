import React, { useState, useEffect } from "react";
import "./Slider.css";

const images = [
    "https://i.ytimg.com/vi/Wc9m5TrV0TU/default.jpg",
    "https://i.ytimg.com/vi/iXmqYW-dSAk/default.jpg",
    "https://i.ytimg.com/vi/m4JTJPC6C6A/default.jpg",
    "https://i.ytimg.com/vi/2P-AkPYrJTg/default.jpg",
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
    "https://i.ytimg.com/vi/qTVUh7K5WeA/default.jpg",
    "https://i.ytimg.com/vi/EDK9KOfknTw/default.jpg",
    "https://i.ytimg.com/vi/Z5NoQg8LdDk/default.jpg",
    "https://i.ytimg.com/vi/DVG1_x7ph9k/default.jpg",
    "https://i.ytimg.com/vi/UALDtSFiUos/default.jpg",
    "https://i.ytimg.com/vi/oJ4rTHHZyv0/default.jpg",
    
];

const Slider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((currentImageIndex) =>
        (currentImageIndex + 1) % images.length
      );
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="slider-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slider-image ${
            index === currentImageIndex ? "active" : ""
          }`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}
    </div>
  );
};

export default Slider;

import React, {useState} from 'react';
import './Slider.css';

const Slider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex + images.length - 1) % images.length);
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


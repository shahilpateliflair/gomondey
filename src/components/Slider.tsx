import React, { useState, useEffect } from "react";
import Header from "./Header";
import "../css/slider.css";

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    
    "https://www.maribox.si/media/banners/fbd190a5-b52.jpg",
    "https://www.maribox.si/media/banners/154bd02c-5fa.png",
    "https://www.maribox.si/media/banners/b7a21cda-28a.jpg",
    "https://www.maribox.si/media/banners/39f227b0-5da.png",
    "https://www.maribox.si/media/banners/f03ac907-573.jpg",
    "https://www.maribox.si/media/banners/d5e4255f-ab0.jpg",
    "https://www.maribox.si/media/banners/bcde01d2-39e.png",
    "https://www.maribox.si/media/banners/73cf8d84-c5e.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === images.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000); 

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
    
      <div className="slider-container">
        <div className="slider-image" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {images.map((image, index) => (
            <img key={index} src={image} alt='image' />
          ))}
        </div>

      </div>
    </div>
  );
}

export default Slider;

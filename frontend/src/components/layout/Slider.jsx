import React, { useState, useEffect } from "react";
// import "./Slider.css";

function Slider() {
  const [images, setImages] = useState([
    "https://images.pexels.com/photos/12227661/pexels-photo-12227661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://www.vecteezy.com/vector-art/7984995-blood-droplet-in-glass-style-with-wording-of-blood-donor-day-on-abstract-layers-shape-and-paper-pattern-background-poster-s-campaign-of-world-blood-donor-day-in-vector-design",
    // "path/to/image3.jpg",
    // "path/to/image4.jpg",
    // "path/to/image5.jpg",
  ]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, images.length]);

  function showSlide() {
    return {
      transform: `translateX(-${currentSlide * 100}%)`,
      transition: "transform 0.5s ease-in-out",
      width: `${images.length * 100}%`,
      display: "flex",
    };
  }

  function nextSlide() {
    setCurrentSlide((currentSlide + 1) % images.length);
  }

  function prevSlide() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  return (
    <div className="slider-container">
      <div className="slider" style={showSlide()}>
        {images.map((image) => (
          <div key={image} className="slide">
            <img src={image} alt="" />
          </div>
        ))}
      </div>
      <div className="controls">
        <a className="prev" onClick={prevSlide}>
          Prev
        </a>
        <a className="next" onClick={nextSlide}>
          Next
        </a>
      </div>
    </div>
  );
}

export default Slider;

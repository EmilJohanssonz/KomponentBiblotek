import React, { useState, useEffect } from "react";

const images = [
  "bulbasaur.jpg",
  " charizard.jpg",
  " gengar.jpg",
  " pikachu.jpg",
  "squirtle.jpg",
];

const ImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatisk bildväxling
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Växlar bild var 3:e sekund

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-10">
      {/* Bilder */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index}`}
          className={`absolute top-0 left-0 w-full h-96 object-cover transition-opacity duration-700 
            ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
        />
      ))}

      {/* Navigeringsknappar */}
      <button
        onClick={() =>
          setCurrentIndex((currentIndex - 1 + images.length) % images.length)
        }
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-md"
      >
        ◀
      </button>
      <button
        onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-md"
      >
        ▶
      </button>
    </div>
  );
};

export default ImageSlider;

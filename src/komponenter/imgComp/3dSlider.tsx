import React, { useState } from "react";

const images = [
  { id: 1, src: "/pikachu.jpg", title: "Pikachu" },
  { id: 2, src: "/gengar.jpg", title: "Gengar" },
  { id: 3, src: "/squirtle.jpg", title: "Squirtle" },
  { id: 4, src: "/charizard.jpg", title: "Charizard" },
  { id: 5, src: "/bulbasaur.jpg", title: "Bulbasaur" },
];

const ImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden bg-gray-900">
      {/* Perspektiv för 3D-effekten */}
      <div className="relative h-[300px] w-[300px] perspective-1000">
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`absolute h-[250px] w-[150px] shadow-xl rounded-lg transition-transform duration-700`}
            style={{
              transform: `rotateY(${index * (360 / images.length)}deg) translateZ(400px)`,
              transformOrigin: "center center",
              background:
                currentIndex === index
                  ? "linear-gradient(to right, #ff7e5f, #feb47b)"
                  : "#ffffff",
            }}
          >
            <img
              src={image.src}
              alt={image.title}
              className={`h-full w-full object-cover rounded-lg ${
                currentIndex === index ? "opacity-0" : "opacity-100"
              } transition-opacity duration-700`}
            />
            {currentIndex === index && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800 text-white rounded-lg">
                <h2 className="text-lg font-bold">{image.title}</h2>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigeringsknappar */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 px-4 py-2 text-white rounded-md"
      >
        Prev
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 px-4 py-2 text-white rounded-md"
      >
        Next
      </button>
    </div>
  );
};

export default ImageSlider;

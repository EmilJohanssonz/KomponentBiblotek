import React, { useState } from "react";

const images = [
  { id: 1, src: "/pikachu.jpg", title: "Pikachu" },
  { id: 2, src: "/gengar.jpg", title: "Gengar" },
  { id: 3, src: "/squirtle.jpg", title: "Squirtle" },
  { id: 4, src: "/charizard.jpg", title: "Charizard" },
  { id: 5, src: "/bulbasaur.jpg", title: "Bulbasaur" },
];

const ImageSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative flex pl-52 h-[400px] w-full items-center overflow-hidden">
      {images.map((image, index) => (
        <div
          key={image.id}
          className={`relative h-full cursor-pointer overflow-hidden transition-all duration-700 ${
            activeIndex === index
              ? "w-1/2 shadow-xl" 
              : "w-1/12 hover:w-1/3"
          }`}
          onClick={() => setActiveIndex(index)}
        >
          <img
            src={image.src}
            alt={image.title}
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" 
          />
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;

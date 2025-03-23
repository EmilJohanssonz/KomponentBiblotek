import React from "react";

const Hero: React.FC = () => {
  return (
    <div
      className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url('/charizard.jpg')`,
      }}
    >
      {/* Mörk overlay */}
      <div className="absolute inset-0  bg-opacity-50"></div>

      {/* Text & knapp */}
      <div className="relative z-10 max-w-2xl">
        <h1 className="text-4xl font-bold mb-2">Welcome to Our Website</h1>
        <p className="text-lg text-gray-300 mb-4">
          Discover amazing content and great experiences.
        </p>
        <button className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;

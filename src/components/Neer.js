import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 

const Neer = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  const images = [
    "https://enactus-mnnit.netlify.app/img/enactus/neer/neer%20(2).jpg",
    "https://enactus-mnnit.netlify.app/img/enactus/neer/neer%20(5).jpg",
    "https://enactus-mnnit.netlify.app/img/enactus/neer/neer%20(6).jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []); // Run once on component mount
  const handleBackClick = () => {
    navigate(-1); 
  };

  return (
    <div className="container mx-auto px-8 py-12 mt-7">
      {/* Back Button */}
      <button
        onClick={handleBackClick}
        className="absolute  top-20 left-3 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        ← Back
      </button>
      <div className="flex flex-col mt-5 lg:flex-row gap-8">
        <div className="container mx-auto pl-12 lg:w-1/2">
          <h1 className="text-4xl font-bold mb-8 bebas">About Project Neer</h1>
          <div className="text-lg mb-8">
            <p>
              "Project Neer" is dedicated to reviving the traditional craftsmanship of pottery in Prayagraj, India. With a focus on uplifting the potter community and addressing environmental concerns, the project aims to create water purifiers using locally sourced mud pots.
            </p>
            <p>
              The main goal is to provide an alternative to plastic water purifiers while also creating additional income opportunities for potters. By utilizing ceramic candles for filtration, the project offers a sustainable and cost-effective solution for communities with limited access to clean water.
            </p>
            <p>
              Extensive market surveys, collaboration with potters, and testing of prototype filters have been conducted to ensure the effectiveness and feasibility of the project. Through "Project Neer," we strive to promote eco-friendly practices and empower local communities.
            </p>
          </div>
          <h2 className="text-2xl font-bold mb-4">Key Features:</h2>
          <ul className="list-disc ml-8">
            <li>Revives traditional pottery craftsmanship</li>
            <li>Reduces plastic usage</li>
            <li>Utilizes locally sourced materials</li>
            <li>Provides eco-friendly water filtration</li>
            <li>Creates additional income opportunities</li>
          </ul>
        </div>
        <div className="lg:w-1/2 relative h-[550px] flex items-center justify-center">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Neer Image ${index + 1}`}
              className={`absolute rounded-md h-[550px] w-full object-cover top-0 left-0  transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Neer;

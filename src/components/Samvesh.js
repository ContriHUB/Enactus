import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 


const Samvesh = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const navigate = useNavigate();

  const images = [
    "https://enactus-mnnit.netlify.app/img/enactus/samvesh/samvesh%20(1).jpg",
    "https://enactus-mnnit.netlify.app/img/enactus/samvesh/samvesh%20(2).jpg",
    "https://enactus-mnnit.netlify.app/img/enactus/samvesh/samvesh%20(3).jpg"
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
          <h1 className="text-4xl bebas font-bold mb-8">About Project Samvesh</h1>
          <div className="text-lg mb-8">
            <p>
              "Project Samvesh" aims to address the issue of menstrual hygiene and provide sustainable solutions for women in rural areas. Many women in rural India lack access to affordable and hygienic menstrual products, leading to health risks and social stigmatization.
            </p>
            <p>
              Through this project, we aim to produce and distribute eco-friendly menstrual hygiene products made from locally available materials. By involving local women in the production process, we not only provide them with income opportunities but also empower them with knowledge about menstrual health and hygiene.
            </p>
            <p>
              Additionally, the project includes awareness campaigns and educational workshops to break the taboo surrounding menstruation and promote healthy practices. By fostering a supportive environment, we strive to improve the overall well-being and dignity of women in rural communities.
            </p>
          </div>
          <h2 className="text-2xl font-bold mb-4">Key Objectives:</h2>
          <ul className="list-disc ml-8">
            <li>Production of eco-friendly menstrual products</li>
            <li>Empowerment of local women</li>
            <li>Education and awareness campaigns</li>
            <li>Promotion of menstrual health and hygiene</li>
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

export default Samvesh;


import React from "react";
import projectsData from "./data.json";

const ImprovedGallery = () => {
  const imagesPerPage = 7;

  const displayedImages = projectsData.projects.slice(0, imagesPerPage);

  return (
    <div className="w-screen overflow-hidden flex p-3 flex-col items-center bg-gray-100" id="gallery">
      <h1 className="text-4xl text-center md:text-7xl bebas mt-5 mb-5 text-gray-800">GALLERY</h1>
      <div className="relative overflow-hidden w-full h-[600px]">
        <div className="absolute w-full h-full">
          {displayedImages.map((project, index) => (
            <div
              key={index}
              className={`absolute transition-all duration-500 hover:z-100 rounded-lg ${
                index === 0
                  ? "w-[39rem] h-[22rem] border-4 border-gray-300 rotate-[-45deg] z-40 top-[-7rem] left-[-8rem]"
                  : index === 1
                  ? "w-[64rem] h-[30rem] border-4 border-gray-300 rotate-[-50deg] z-30 top-0 left-[-2rem]"
                  : index === 2
                  ? "w-[40rem] h-[30rem] border-4 border-gray-300 rotate-[35deg] z-50 bottom-[-17rem] left-[-15rem]"
                  : index === 3
                  ? "w-[55rem] h-[35rem] border-4 border-gray-300 rotate-[40deg] z-20 bottom-[-15rem] left-[17rem]"
                  : index === 4
                  ? "w-[66rem] h-[39rem] border-4 border-gray-300 rotate-[-55deg] z-10 bottom-[4.5rem] left-[30rem]"
                  : index === 5
                  ? "w-[55rem] h-[35rem] border-4 border-gray-300 rotate-[40deg] z-[5] -bottom-[15rem] left-[64rem]"
                  : "w-[55rem] h-[35rem] border-4 border-gray-300 rotate-[24deg] z-3 bottom-[6.9rem] left-[84rem]"
              }`}
            >
              <img
                src={project.image}
                alt={project.name}
                className={`w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-500 hover:scale-110 hover:shadow-2xl`}
              />
            </div>
          ))}
          <div className="mt-4 flex justify-center gap-4 w-full max-w-lg">
            <a
              href="https://enactus-mnnit.netlify.app/gallery"
              className="bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded text-xl hover:bg-gray-400 transition-all duration-300 hover:scale-[1.05] z-[100] absolute bottom-2 right-4 animate-pulse hover:animate-bounce"
            >
              See More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImprovedGallery;

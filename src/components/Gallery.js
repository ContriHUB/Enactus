import React, { useState } from "react";
import { motion } from "framer-motion";
import projectsData from "./data.json"; // Importing the data.json file

const Gallery = React.forwardRef((props, ref) => {
  const [currentPage, setCurrentPage] = useState(0);
  const imagesPerPage = 10;

  const totalPages = Math.ceil(projectsData.projects.length / imagesPerPage);

  const nextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  return (
    <div ref={ref} className="w-screen bg-gray-100 py-10" id="gallery">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <div className="flex items-center justify-center h-[150px]">
          <h1 className="text-7xl bebas mt-10 mb-10 text-gray-800">Gallery</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-10">
          {projectsData.projects
            .slice(
              currentPage * imagesPerPage,
              (currentPage + 1) * imagesPerPage
            )
            .map((project, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer relative shadow-lg hover:shadow-2xl rounded-lg overflow-hidden transition-shadow duration-500"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-72 object-cover transition-transform transform scale-100 group-hover:scale-110 duration-500 shadow-md"
                />

                <div className="absolute inset-0 justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black bg-opacity-50">
                  <h3 className="absolute bottom-6 left-[-300px] group-hover:translate-x-[320px] transition-all duration-500 text-neutral-300 font-semibold text-2xl">
                    {project.name}
                  </h3>
                </div>
              </motion.div>
            ))}
        </div>

        <div className="flex p-5 justify-center mt-8 space-x-8">
          {currentPage > 0 && (
            <motion.button
              onClick={prevPage}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-110 shadow-lg"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              Previous
            </motion.button>
          )}
          {currentPage < totalPages - 1 && (
            <motion.button
              onClick={nextPage}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-110 shadow-lg"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              Next
            </motion.button>
          )}
        </div>
      </motion.div>
    </div>
  );
});

export default Gallery;

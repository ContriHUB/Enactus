import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link from React Router

const Projects = React.forwardRef((props,ref) => {
  return (
    <div className="pb-7 w-screen relative  bg-slate-200" id="projects" ref={ref}>
      <div className="flex gap-2 flex-wrap flex-col items-center justify-center relative z-10">
        <div className="flex items-center justify-center h-[100px] ">
          <h1 className="text-7xl bebas mt-10 mb-10">Projects</h1>
        </div>
        <div className="flex gap-8 flex-wrap items-center justify-center">
          <Link to="/neer"> {/* Link to the Neer project page */}
            <button>
              <figure>
                <img
                  src={"https://enactus-mnnit.netlify.app/img/enactus/neer/neer%20(2).jpg"}
                  className="h-[400px]  w-[300px] object-cover"
                  alt="Mountains"
                />
                <figcaption>Project Neer</figcaption>
              </figure>
            </button>
          </Link>
          <Link to="/sahyog"> {/* Link to the Sahyog project page */}
            <button>
              <figure>
                <img
                  src={"https://enactus-mnnit.netlify.app/img/enactus/sahyog/sahyog%20(1).jpg"}
                  className="h-[400px]  w-[300px] object-cover"
                  alt="Mountains"
                />
                <figcaption>Project Sahyog</figcaption>
              </figure>
            </button>
          </Link>
          {/* Add similar Link components for other projects */}
          <Link to="/moonj"> {/* Link to the Moonj project page */}
            <button>
              <figure>
                <img
                  src={"https://enactus-mnnit.netlify.app/img/enactus/moonj/moonj%20(4).jpg"}
                  className="h-[400px] w-[300px] object-cover"
                  alt="Mountains"
                />
                <figcaption>Project Moonj</figcaption>
              </figure>
            </button>
          </Link>
          <Link to="/samvesh"> {/* Link to the Samvesh project page */}
            <button>
              <figure>
                <img
                  src={"https://enactus-mnnit.netlify.app/img/enactus/samvesh/samvesh%20(3).jpg"}
                  className="h-[400px]  w-[300px] object-cover"
                  alt="Mountains"
                />
                <figcaption>Project Samvesh</figcaption>
              </figure>
            </button>
          </Link>
        </div>
      </div>
    </div>

    
  );
});

export default Projects;

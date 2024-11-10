import React from "react";

const ProjectCard = ({
  title,
  description,
  image,
  link,
  technologies,
  position,
  animate,
}) => {
  return (
    <div
      className={
        "flex flex-col w-full max-h-[35vw] h-fit pointer-events-auto " +
        (position === "left" ? "items-start" : "items-end")
      }
    >
      <div className="flex flex-row bg-mx-6 rounded-xl w-[60vw] h-full aspect-square backdrop-filter bg-gray-600 backdrop-blur-md bg-opacity-10 overflow-hidden">
        <div className="image-container w-fit h-full h-full p-4">
          <div className="scrolling-image-container h-full aspect-square flex items-center">
            <img
              src={image}
              alt={title}
              className={
                (animate ? "scrolling-image" : "") + " object-cover rounded-lg"
              }
            />
          </div>
        </div>

        <div className="details-container flex flex-col flex-1 p-4 pl-0 items-start">
          <h1 className="text-4xl font-bold text-white">{title}</h1>
          <p className="text-xl text-left text-white mt-4 pr-4">
            {description}
          </p>
          <div className="flex flex-row flex-wrap flex-1 w-full h-fit my-2 gap-x-2 mt-4">
            {technologies.map((tech) => (
              <div
                key={tech}
                className="h-fit bg-gray-800 border py-2 px-4 border-none text-white rounded-full"
              >
                {tech}
              </div>
            ))}
          </div>

          <button
            onClick={() => {
              window.open(link, "_blank");
            }}
            className=" glow-button text-white bg-emerald-500 w-full px-auto h-16 cursor-none rounded-lg"
            style={{ backgroundColor: "#2D3748" }}
          >
            View Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

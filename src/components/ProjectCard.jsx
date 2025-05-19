import React from "react";

const ProjectCard = ({ title, description, image, link, githubLink }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col w-full max-w-md">
      {/* Optional image */}
      <img src={image} alt={title} className="w-full h-36 object-cover" />
      <div className="p-4 flex flex-col justify-between h-full">
        <div>
          <h3 className="text-lg font-semibold mb-1">{title}</h3>
          <p className="text-sm text-gray-700 mb-2">{description}</p>
        </div>
        <div className="mt-auto pt-2">
          {githubLink ? (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline text-sm"
            >
              View Project
            </a>
          ) : link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline text-sm"
            >
              View Project (Github unavailable)
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

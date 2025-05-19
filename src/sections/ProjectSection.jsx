import React from "react";
import ProjectCard from "/src/components/ProjectCard";
import aiImage from "/assets/project_images/assistive_keyboard.png";
import pedalsImage from "/assets/project_images/pedals.png";
import sproutfulImage from "/assets/project_images/sproutful.png";
import imageProcessorImage from "/assets/project_images/image-processor.png";
import billWizardImage from "/assets/project_images/bill-wizard.png";
import mazeGameImage from "/assets/project_images/maze-game.png";
import hospitalBotImage from "/assets/project_images/hospital-bot.png";

const ProjectsSection = () => {
  const projects = [
    {
      title: "AI Assistive Keyboard",
      description:
        "An assistive keyboard for patients with communication disabilities (include eye tracking capabilities), built with an NLP interface for common language interactions.",
      image: aiImage,
      githubLink: "https://github.com/sfu-cmpt340/2025_1_project_18",
    },
    {
      title: "Volunteer Management System",
      description: "A platform to manage volunteers for Our Community Bikes.",
      image: pedalsImage,
      link: "https://sfublueprint.org/projectspage",
    },
    {
      title: "Sproutful AI",
      description:
        "Depicts mental growth by watering a sprout to a full tree. Uses OpenAI API to generate breathing prompts. Hackathon winning Project!",
      image: sproutfulImage,
      githubLink: "https://github.com/qvd808/journey-hack",
    },
    {
      title: "AWS Serverless Image Processor",
      description:
        "This was originally a term project I had worked on in my first year. Now that I have more experience, I decided to revive it by incorporating React and AWS.",
      image: imageProcessorImage,
      githubLink: "https://github.com/ronneylogs/Serverless-Image-Processor",
    },
    {
      title: "Bill Wizard",
      description:
        "An iOS and Android app to helps users manage their receipts and split bills with their friends. Coded in Dart with the Flutter SDK, ExpressJS, and MongoDB.",
      image: billWizardImage,
      githubLink: "https://github.com/ronneylogs/Bill-Wizard",
    },
    {
      title: "Maze Game",
      description:
        "Maze escape game that follows the adventures of a Arcanist imprisoned for practicing forbidden magic. Coded in Java using Maven.",
      image: mazeGameImage,
      githubLink: "https://github.com/ronneylogs/Maze-Project",
    },
    {
      title: "Hospital Bot",
      description:
        "A texting chat bot that allows users to text their address to a bot. The bot then texts back the locations of the closest hospitals as well as their wait times. Coded in Python.",
      image: hospitalBotImage,
      githubLink:
        "https://github.com/ronneylogs/https://github.com/ronneylogs/HospitalBot",
    },
    // Add more projects as needed
  ];

  return (
    <section className="">
      <div className="max-w-7xl px-4 py-4  sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
              githubLink={project.githubLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

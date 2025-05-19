import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import "./index.css";
import { TypeAnimation } from "react-type-animation";
import ConfettiButton from "./components/ConfettiButton";
import NavBar from "./components/NavBar";
import BackToTopButton from "./components/BackToTopButton";
import BeyondCodeSection from "./sections/BeyondTheCodeSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectSection";
import { motion } from "framer-motion";
import pfp from "/assets/ronney.JPG";

function App() {
  return (
    <>
      <NavBar />
      <div className="md:p-20 min-h-screen bg-gray-100">
        <div>
          {/* Hero */}
          <section className="px-6 py-16 max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Hi, I’m Ronney.</h1>
            <h2 className="text-2xl text-indigo-600 font-semibold mb-6">
              {/* I’m a <span className="underline">web developer</span>. */}
              <span>
                {" "}
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially,
                    "I'm a software engineer",
                    2000, // wait 1s before replacing "Mice" with "Hamsters"
                    "I'm a web developer",
                    2000,
                    "I'm a full-stack developer",
                    2000,
                    "I build for social good",
                    2000,
                  ]}
                  wrapper="span"
                  speed={250}
                  style={{ fontSize: "2em", display: "inline-block" }}
                  repeat={Infinity}
                />
              </span>
            </h2>
            {/* <a
              href="#about"
              className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
            >
              About Me
            </a> */}
          </section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-80 h-80 mx-auto overflow-hidden rounded-full "
          >
            <img
              src={pfp}
              alt="Ronney Lok"
              className="w-full h-full object-cover"
            />
          </motion.div>
          {/* About */}
          <section id="about" className="px-6 py-16 max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">About</h3>
            <p className="mb-8 font-bold">
              I’m a software engineer who loves building and designing software
              for social good. I care deeply about using technology to solve
              meaningful problems, especially those that benefit communities and
              social good initiatives.
            </p>
            <p className="font-bold mb-10">
              Take a look at the social impact I created with my team at{" "}
              <a
                href="https://sfublueprint.org/"
                className="underline hover:text-blue-400 hover:font-bold hover:underline-offset-2"
              >
                SFU Blueprint
              </a>
            </p>
            <p>
              Now that's out of the way 😊 , I'm currently pursuing the 4th year
              of my Computer Science degree at Simon Fraser University. I have
              experience with technologies including Python, Javascript, React,
              Vue, Node.js, and C/C++. Building clean, accessible interfaces as
              well as scalable backend systems is my personal ambition and I'm
              happiest building things for people to{" "}
              <ConfettiButton
                className="text-indigo-600 underline hover:font-bold hover:underline-offset-2"
                label="🎉 Interact"
              />{" "}
              with.
            </p>
          </section>

          {/* Experiences */}
          <section id="experiences" className="px-6 py-8 max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">Experiences</h3>
            <ExperienceSection />
          </section>

          {/* Projects */}
          <section id="projects" className="px-6 py-16">
            <h3 className="text-3xl font-bold mb-10 flex justify-center mx-auto">
              Projects
            </h3>
            <div className="mx-auto flex justify-center">
              <ProjectsSection />
            </div>
          </section>

          {/* Care */}
          <section id="projects" className="px-6 py-16">
            <h3 className="text-3xl font-bold flex justify-center mx-auto">
              Beyond the code
            </h3>
            <div className="mx-auto flex justify-center">
              <BeyondCodeSection />
            </div>
          </section>
        </div>
      </div>
      <BackToTopButton />
    </>
  );
}

export default App;

import React, { useState } from "react";
import { projects } from "../constants";
import styles from "../style";

const Projects = () => {
  const [toggle, setToggle] = useState(0);

  return (
    <div className={`${styles.flexStart} ${styles.marginYxl} w-full gap-6m px-4`}>
      {projects.map((project, index) => (
        <div
          key={project.id}
          className={`${styles.flexStart} ${
            toggle === index ? "block" : " hidden"
          } flex-1`}
        >
          <a href={project.link} target="_blank" className="w-full">
            <img src={project.img} alt="image" />
          </a>
          <div
            className={`${styles.flexStart} flex-col gap-y-4 ${styles.paddingX}`}
          >
            <h1 className={`text-xl sm:text-2xl`}>{project.title}</h1>
            <p className={`text-sm sm:text-lg`}>{project.description}</p>
            <h2 className={`text-md sm:text-xl`}>{project.languages}</h2>
          </div>
        </div>
      ))}
      <div className={`hidden sm:block h-96 overflow-hidden overflow-y-scroll`}>
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`${styles.flexStart} flex-col w-full h-auto overflow-hidden `}
          >
            <div
              className={`w-52 h-30 ${
                index === project.length - 1 ? "mb-0" : "mb-1"
              }`}
              onClick={() => setToggle(index)}
            >
              <img
                src={project.img}
                alt="image"
                className={`w-[100%] h-auto`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

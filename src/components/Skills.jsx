import React from "react";
import { skills } from "../constants";
import styles from "../style";

const Skills = () => {
  return (
    <div className={`${styles.flexCenter} flex-col px-4 mx-2`}>
      <h1 className="text-center font-bold mb-3 sm:text-xl sm:mb-6">Skills</h1>

      <div className="text-center grid grid-cols-3 grid-flow-row w-full">
        {skills.map((skill, index) => (
          <div key={index} className="grid items-center justify-center">
            <img
              src={skill.img}
              alt={skill.id}
              className="w-[40px] h-[40px] m-auto"
            />
            <h6 className="text-sm row-start-3 row-end-3 h-11">
              {skill.title}
            </h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

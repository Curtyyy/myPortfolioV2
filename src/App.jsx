import React, { useState } from "react";
import "./index.css";
import {
  Hero,
  About,
  Skills,
  AnimationBg,
  AnimationBg2,
  NoiseBg,
  Projects,
} from "./components";
import { darkmode, lightmode } from "./assets";
import styles from "./style";

const App = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div
      className={`w-full overflow-hidden font-ubunto noise relative ${
        toggle ? "text-white" : ""
      } transition-all ease-in-out duration-300`}
    >
      <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 cursor-pointer mt-2 z-20`}>
        <img
          src={toggle ? lightmode : darkmode}
          onClick={() => setToggle((prev) => !prev)}
          alt="mode"
        />
      </div>

      {toggle ? <AnimationBg /> : <AnimationBg2 />}

      <div className={`${styles.flexCenter} ${styles.paddingXxl} relative`}>
        <div className={`${styles.flexCenter} ${styles.boxWidth} -my-4 z-10`}>
          <Hero />
        </div>
      </div>

      <div
        id="about"
        className={`${styles.flexCenter} ${styles.paddingXxl} relative`}
      >
        <div
          id="skills"
          className={`${styles.flexCenter} ${styles.boxWidth} z-10`}
        >
          <div
            className={`${styles.flexStart} ${styles.paddingXxl} ${styles.paddingY}`}
          >
            <div className={`w-full`}>
              <About />
            </div>
            <div className={`w-full`}>
              <Skills />
            </div>
          </div>
        </div>
      </div>

      <div
        id="projects"
        className={`${styles.flexCenter} ${styles.paddingXxl} relative`}
      >
        <div
          className={`${styles.flexCenter} ${styles.boxWidth} ${styles.paddingYxl} ${styles.paddingXxl} z-10`}
        >
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default App;

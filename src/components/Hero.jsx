import React, { useState } from "react";
import styles from "../style";
import { curtlogo } from "../assets";
import { navLinks, contacts } from "../constants";

const Hero = () => {

  return (
    <div
      className={`${styles.flexCenter} ${styles.marginY2xl} sm:flex-col w-full`}
    >
      <nav className={`${styles.flexCenterBetween} ${styles.paddingX} flex justify-between w-full`}>
        <img
          src={curtlogo}
          alt="my logo"
          width={40}
          className={`rounded-full`}
        />
        <div className={`${styles.flexCenter} flex gap-3`}>
          {contacts.map((contact, index) => (
            <div
              key={contact.id}
              className={`${styles.flexCenter} border-b border-y-blue-800 w-fit hover:border-white transition-all ease-in-out duration-300`}
            >
              <a href={contact.link} target="_blank" className="transition-all duration-300">
                <img src={contact.img} alt={contact.id} width={40} />
              </a>
            </div>
          ))}
        </div>
      </nav>

      <div
        className={`${styles.flexColCenter} text-center ${styles.paddingYxl} ${styles.marginY2xl}`}
      >
        <h1 className={`text-4xl`}>
          Hi, welcome I am{" "}
          <span className="font-extrabold">CURT RUSSEL BERDOS</span>
        </h1>
        <h3 className={`text-lg`}>
          I am a Junior full-stack developer
        </h3>

        <div className={`${styles.flexCenter} gap-4 ${styles.paddingY}`}>
          {navLinks.map((links, index) => (
            <div
              key={links.id}
              className={`hover:border-b border-y-blue-800 w-fit m-auto transition-all ease-in-out duration-300`}
            >
              <a href={`#${links.id}`}>↓{links.title}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;

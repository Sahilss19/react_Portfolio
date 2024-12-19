import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from '../../assets/me.jpg'

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Sahil_kulria" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Certificates</h5>
              <small>10+</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>5+ Completed Projects</small>
            </article>
          </div>
          <p>
          I am Sahil Kulria, an enthusiastic and dedicated Front-End Developer with hands-on experience in building responsive and interactive websites using HTML, CSS, React, and Tailwind/Bootstrap. Passionate about writing clean, efficient code, I am a quick learner and a hard worker, always striving to enhance user experience and stay updated with the latest technologies. Eager to contribute my skills and grow in a professional setting, I am confident in my ability to deliver high-quality web applications and exceed expectations.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;

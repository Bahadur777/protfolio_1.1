import React from "react";
import "./about.css";
import Image from "../../assets/me1.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { BiFolderOpen } from "react-icons/bi";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2 className="fgrt">About Me</h2>

      <div className="container">
        <div className="about_container">
          <div className="about_image">
            <div className="about-me-image">
              <img src={Image} alt="" className="about-i-img" />
            </div>
          </div>

          <div className="about-content">
            <div className="about-cards">
              <article className="about-card">
                <FaAward className="about-icons" />
                <h5>Experience</h5>
                <small>3+ years Working</small>
              </article>
              <article className="about-card">
                <FiUsers className="about-icons" />
                <h5>Experience</h5>
                <small>3+ years Working</small>
              </article>
              <article className="about-card">
                <BiFolderOpen className="about-icons" />
                <h5>Experience</h5>
                <small>3+ years Working</small>
              </article>
            </div>
            <div className="bottom-content">
              <p className="btm-pera">
                I am Bahadur, a talented front-end developer with a strong
                understanding of the latest web development technologies. I am
                proficient in HTML, CSS, JavaScript, React, Redux, C, and C++. I
                am also a quick learner and am always eager to take on new
                challenges. I have a Bachelor of Computer Science degree from
                Northern University Bangladesh. I have developed a web
                application for a local business using React and Redux. I have
                also worked on a team to design and implement a new user
                interface for a local business website.
              </p>

              <a href="#contact" className="btn btn-primary ght">
                {" "}
                Let's talk
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

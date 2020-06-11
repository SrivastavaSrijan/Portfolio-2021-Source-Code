import React from "react";
import Fade from "react-reveal/Fade";
const HeroFooter = () => {
  return (
    <div className="hero-foot">
      <Fade bottom delay={1500}>
        <nav className="tabs mb-5">
          <div className="container is-fluid">
            <ul>
              <li className="is-active mr-3">
                <a href="#hero-content">Welcome!</a>
              </li>
              <li className="is-inactive mr-3">
                <a href="#about">About Me</a>
              </li>
              <li className="is-inactive mr-3">
                <a className="has-text-white" href="#projects">
                  Project
                </a>
              </li>
              <li className="is-inactive mr-3">
                <a href="#skills">Skills</a>
              </li>
            </ul>
          </div>
        </nav>
      </Fade>
    </div>
  );
};
export default HeroFooter;

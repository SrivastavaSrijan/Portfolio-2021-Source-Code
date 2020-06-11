import React from "react";
import CardCarousel from "../Components/CardCarousel.js";
import Headings from "../Components/Headings.js";

const Projects = () => {
  return (
    <section className="section " id="projects">
      <Headings number="02." title="Work" emoji="🏋🏽" />

      <CardCarousel />
    </section>
  );
};

export default Projects;

import HeroBody from "../Components/HeroBody.js";
import HeroFooter from "../Components/HeroFooter.js";
import React from "react";

const Hero = () => {
  return (
    <section className="hero is-fullheight" id="hero-content">
      <HeroBody />
      <HeroFooter />
    </section>
  );
};
export default Hero;

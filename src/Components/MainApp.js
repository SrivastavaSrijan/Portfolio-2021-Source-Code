import React, { Component } from "react";
import "../Styles/MainApp.scss";
import "../Styles/MainStyles.scss";
import ParticlesBg from "particles-bg";
import Hero from "../Pages/Hero";
import AboutMe from "../Pages/AboutMe";
import Skills from "../Pages/Skills";
import Projects from "../Pages/Projects.js";
import Footer from "../Pages/Footer.js";
class MainApp extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="App">
        <div id="hero-background">
          <Hero />
          <ParticlesBg num={100} type="thick" bg={true} />
        </div>
        <div className="container is-fluid" id="content-main">
          {" "}
          <AboutMe />
          <Projects />
          <Skills />
        </div>
        <Footer />
      </div>
    );
  }
}

export default MainApp;

import React from "react";
import Typewriter from "../Components/Typewriter";
import Mewebp from "../Assets/Images/HeroMe.webp";
import Mejpg from "../Assets/Images/HeroMe.png";
import Image from "../Components/Image.js";
import Buttons from "../Components/Buttons.js";
import Fade from "react-reveal/Fade";
let greetings = [
  { greet: "Hi there!" },
  { greet: "Howdy!" },
  { greet: "Greetings!" },
  { greet: "Hey, what’s up?" },
  { greet: "Hey!" },
  { greet: "Hiiii." },
  { greet: "How's it going," },
  { greet: "Long time no see!" },
  { greet: "What’s new?" },
  { greet: "Yo, what's up?" },
  { greet: "Namaste." },
  { greet: "Vanakkam." },
  { greet: "Salaam." },
  { greet: "Sup?" },
];
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
const HeroBody = () => {
  return (
    <div className="hero-body container is-fluid">
      <div className="columns" style={{ width: "inherit" }}>
        <div className="column is-8">
          <Fade top delay={850}>
            <h4 className="subtitle is-size-5 mt-2  is-size-7-mobile has-text-white">
              {" "}
              <span className="animate-hand" role="img" aria-label="hand-wave">
                👋
              </span>{" "}
              {greetings[randomNumber(0, greetings.length)].greet} My name is{" "}
            </h4>
            <h1 className="title is-size-1 has-text-weight-bold is-size-2-mobile has-text-link">
              Srijan
            </h1>
          </Fade>
          <Fade bottom delay={1050}>
            <Typewriter />
            <div className="button-container mt-6">
              <Buttons />
            </div>
          </Fade>
        </div>
        <Fade right delay={700}>
          <div className="column image is-4 is-avatar-hero">
            <Image imgJpg={Mejpg} imgWebp={Mewebp} alt="Picture of Srijan" />
          </div>
        </Fade>
      </div>
    </div>
  );
};
export default HeroBody;

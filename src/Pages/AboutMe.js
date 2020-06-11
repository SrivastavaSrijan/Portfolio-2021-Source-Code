import React from "react";
import Fade from "react-reveal/Fade";

import MEwebp from "../Assets/Images/Me.webp";
import MEjpg from "../Assets/Images/Me.png";
import Headings from "../Components/Headings.js";
import Image from "../Components/Image.js";

const AboutMe = () => {
  return (
    <section className="section" id="motto" id="about">
      <Headings number="01." title="Me" emoji="👀" />
      <div className="card ">
        <div className="card-content is-paddingless ">
          <div className="is-muted-link px-6 pt-5 pb-3">
            <Fade top delay={100}>
              <h2 className="title is-size-3 is-size-4-mobile">
                Hello there. My name's Srijan.
                <span role="img" aria-label={"smile"}>
                  {" "}
                  😄
                </span>
                <br />
              </h2>

              <h3 className="subtitle is-family-secondary mb-4 is-size-4  is-size-5-mobile">
                I'm building new experiences.
              </h3>
            </Fade>
          </div>

          <div className="level">
            <div className="level-left px-6-py-6">
              <Fade left>
                <div className="image is-1by1 is-avatar ml-2 mr-4 my-4">
                  <Image
                    imgJpg={MEjpg}
                    imgWebp={MEwebp}
                    alt="Picture of Srijan"
                  />
                </div>
              </Fade>
            </div>
            <Fade right>
              <div
                className="level-content px-3 py-6"
                style={{ alignSelf: "middle", lineHeight: 1.5 }}
              >
                <p className="is-size-5 is-size-6-mobile">
                  I'm a <span className="bold-danger">2020</span> passout of the{" "}
                  <span className="is-highlight-link">
                    Vellore Institute of Technology{", "}
                  </span>
                  where I majored in <span className="bold-primary">E</span>
                  lectronics & <span className="bold-primary">C</span>
                  ommunication. I've been fortunate enough to have had exposure
                  to many different domains and I try and capitalize on my
                  experiences when I work.
                  <br /> When I'm procrastinating away, you'll probably find me{" "}
                  <span className="bold-success">writing</span> stuff for my
                  blog
                  {", "}
                  finding the perfect <span className="bold-light">
                    pasta
                  </span>{" "}
                  recipe, obsessing over some{" "}
                  <span className="bold-primary">music</span>, or having a
                  <span className="bold-danger"> coffee.</span>
                </p>
              </div>
            </Fade>
          </div>
        </div>
        <footer className={`card-footer-link`}>
          <p className="card-footer-item"></p>
        </footer>
      </div>
    </section>
  );
};
export default AboutMe;

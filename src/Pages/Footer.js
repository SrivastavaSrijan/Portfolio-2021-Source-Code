import React from "react";
import Fade from "react-reveal/Fade";
import Buttons from "../Components/Buttons.js";
import { Heart, ChevronsUp } from "react-feather";
const Footer = () => {
  return (
    <footer
      className="is-flex has-margin-top-1 is-vcentered is-hcentered footer is-bold"
      id="footer"
    >
      <div className="has-text-centered">
        <Fade top>
          <Buttons>
            <a href="#hero-content" title="Go up!">
              {" "}
              <ChevronsUp color="white" size={48} />
            </a>
          </Buttons>
        </Fade>

        <Fade bottom delay={700}>
          <p className="has-text-white is-family-secondary is-size-5 has-text-center mt-5">
            Made with <Heart size={16} /> by Srijan.
          </p>
        </Fade>
        <Fade bottom delay={700}>
          <p className="has-text-white is-family-secondary mt-3 is-size-7 has-text-center is-size-7-mobile ">
            "You say we're small and not worth the mention. I'm sure we're
            taller in another dimension. "
            <br />
            <span className=" has-text-white is-highlight-link">
              {" "}
              &mdash; Frank Ocean
            </span>
          </p>
        </Fade>
      </div>
    </footer>
  );
};
export default Footer;

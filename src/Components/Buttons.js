import React from "react";
import Resume from "../Assets/PDFs/Resume.pdf";

import { GitHub, Linkedin, AtSign, Download } from "react-feather";
const Buttons = ({ children }) => {
  return (
    <>
      <a
        className="is-highlight-link"
        href="https://github.com/SrivastavaSrijan"
        target="_blank"
        rel="noopener noreferrer"
        title="GitHub"
        aria-label="GitHub"
      >
        {" "}
        <GitHub color="white" size={25} />
      </a>
      <a
        className="is-highlight-link"
        href="https://www.linkedin.com/in/srijansrivastava35/"
        target="_blank"
        rel="noopener noreferrer"
        title="LinkedIn"
        aria-label="LinkedIn"
      >
        {" "}
        <Linkedin color="white" size={25} />
      </a>
      {children ? children : <div />}
      <a
        className="is-highlight-link"
        target="_blank"
        rel="noopener noreferrer"
        href="mailto:hmu@srijansrivastava.tech"
        title="Email"
        aria-label="Email"
      >
        {" "}
        <AtSign color="white" size={25} />
      </a>
      <a
        className="is-highlight-link"
        target="_blank"
        rel="noopener noreferrer"
        href={Resume}
        title="Resume"
        aria-label="Resume"
      >
        {" "}
        <Download color="white" size={25} />
      </a>
    </>
  );
};
export default Buttons;

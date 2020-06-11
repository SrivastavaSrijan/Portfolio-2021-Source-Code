import React from "react";
const Headings = ({ number, title, emoji }) => {
  return (
    <h1 className="title is-size-2 is-size-3-mobile">
      {" "}
      <span className="number-about is-family-mono">{number}</span>
      <span className="is-italic hr-match ">{title}</span>
      <span role="img" aria-label={title}>
        {emoji}
      </span>{" "}
    </h1>
  );
};
export default Headings;

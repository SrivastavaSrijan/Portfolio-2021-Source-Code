import React from "react";

import loadingImage from "../Assets/SVG/Spinner.svg";
import errorImage from "../Assets/SVG/Spinner.svg";
import Img from "react-cool-img";
const Image = ({ imgJpg, imgWebp, alt }) => {
  return (
    <picture>
      <source
        style={{ objectFit: "contain" }}
        placeholder={loadingImage}
        error={errorImage}
        type="image/webp"
        srcset={imgWebp}
        type={alt}
        alt="A picture of me"
      />
      <source
        style={{ objectFit: "contain" }}
        placeholder={loadingImage}
        type="image/webp"
        error={errorImage}
        srcset={imgJpg}
        alt={alt}
        debounce={1000}
      />
      <Img
        style={{ objectFit: "contain" }}
        placeholder={loadingImage}
        error={errorImage}
        src={imgJpg}
        alt={alt}
        debounce={1000}
      />
    </picture>
  );
};
export default Image;

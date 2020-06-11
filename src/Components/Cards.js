import React from "react";
import Fade from "react-reveal/Fade";

import { Star, Zap, Eye, GitPullRequest } from "react-feather";
import Image from "../Components/Image.js";

const Card = ({ color, title, subtitle, imgSrc, content, links }) => {
  return (
    <div className="card custom-width mr-3">
      <div className="card-image">
        <Fade>
          <figure className="image is-4by3">
            <Image imgJpg={imgSrc[0]} imgWebp={imgSrc[1]} alt={title} />
          </figure>
        </Fade>
      </div>

      <div className={`notification is-muted-${color}`}>
        <Fade delay={200}>
          <table className="table  is-fullwidth">
            <tbody>
              <tr className="media-content">
                <th>
                  <Star size={29} />
                </th>
                <td>
                  <h4 className="title is-size-4">{title}</h4>
                  <h5 className="subtitle is-size-6 ">{subtitle}</h5>
                </td>
              </tr>
            </tbody>
          </table>
        </Fade>
      </div>
      <Fade delay={400}>
        <table className="table">
          <tbody>
            {content.map((item) => {
              return (
                <tr key={Math.random()} className="px-4 py-2">
                  <th className="py-2 ">
                    {" "}
                    <Zap size={16} />
                  </th>
                  <td className=" is-family-secondary content">{item}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Fade>
      {links ? (
        <Fade bottom delay={500}>
          <footer className={`card-footer-${color}`}>
            {links.map((item, index) => {
              return (
                <p className="card-footer-item">
                  <a
                    className={`is-highlight-${color}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={item}
                    title={index === 0 ? "View on GitHub" : "Check it out!"}
                    style={{ color: "black" }}
                  >
                    {" "}
                    {index === 0 ? (
                      <GitPullRequest color="black" size={32} />
                    ) : (
                      <Eye color="black" size={32} />
                    )}
                  </a>
                </p>
              );
            })}
          </footer>
        </Fade>
      ) : (
        <div />
      )}
    </div>
  );
};
export default Card;

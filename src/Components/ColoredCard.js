import React from "react";
import Fade from "react-reveal/Fade";
// is - light;
// is - primary;
// is - link;
// is - info;
// is - success;
// is - warning;
// is - danger;
const ColoredCard = ({
  title,
  subtitle,
  bgColor,
  skills,
  children,
  otherSkills,
}) => {
  return (
    <div className="card column is-4 mr-2 mt-3 is-paddingless">
      <div
        className={`card-content notification is-muted-${bgColor} px-6 pt-5 pb-3`}
      >
        <Fade top delay={100}>
          <h2 className="title is-size-3 is-size-4-mobile">
            {children}
            {title}
          </h2>
          {/* <h3 className="subtitle is-family-secondary mb-4 is-size-4">
            {subtitle}
          </h3> */}
        </Fade>
      </div>
      <div className="card-content px-4 py-2">
        <Fade top delay={200}>
          {skills.map(({ Name, Level, Color }) => {
            return (
              <div className="level is-mobile px-3 py-2">
                <h4 className={`level-left tag is-size-6 is-${Color}`}>
                  {Name}
                </h4>
                <progress
                  className={`progress is-small level-right is-vcentered is-${Color}`}
                  value={Level}
                  max="100"
                ></progress>
              </div>
            );
          })}
        </Fade>
      </div>
      <Fade bottom delay={350}>
        <footer
          className={`tag-footer card-footer-${bgColor} py-3 px-2`}
          style={{}}
        >
          <div class="columns is-mobile is-hcentered is-vcentered is-paddingless is-gapless my-3">
            {otherSkills.map(({ Name, Color }) => {
              return (
                <div className="column">
                  <p className={`tag is-size-7 mr-1 is-${Color}`}>{Name}</p>
                </div>
              );
            })}
          </div>
        </footer>
      </Fade>
    </div>
  );
};
export default ColoredCard;

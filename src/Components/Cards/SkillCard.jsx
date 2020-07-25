import React from 'react';
import Fade from 'react-reveal/Fade';
// is - light;
// is - primary;
// is - link;
// is - info;
// is - success;
// is - warning;
// is - danger;
import { MoreHorizontal } from 'react-feather';
export const SkillCard = ({
  title,
  subtitle,
  bgColor,
  skills,
  icon,
  otherSkills,
}) => {
  return (
    <div className='card column is-4 mr-2 mt-3 is-paddingless'>
      <div
        className={`card-content notification is-muted-${bgColor} px-6 pt-5 pb-3`}
      >
        <Fade delay={100} duration={400}>
          <h2 className='title is-size-3 is-size-4-mobile'>
            {icon}
            {title}
          </h2>
          {/* <h3 className="subtitle is-family-secondary mb-4 is-size-4">
            {subtitle}
          </h3> */}
        </Fade>
      </div>
      <div className='card-content px-4 py-2'>
        <Fade delay={200} duration={400}>
          {skills.map(({ Name, Level, Color }) => {
            return (
              <div key={Math.random()} className='level is-mobile px-3 py-2'>
                <p
                  className={`level-left is-family-secondary tag is-size-6  is-size-7-mobile is-${Color}`}
                >
                  {Name}
                </p>
                <progress
                  className={`progress is-small level-right is-vcentered is-${Color}`}
                  value={Level}
                  max='100'
                ></progress>
              </div>
            );
          })}
        </Fade>
      </div>
      <Fade delay={350} duration={400}>
        <footer
          className={`tag-footer card-footer-${bgColor} py-3 px-2`}
          style={{}}
        >
          {' '}
          <p className='is-family-secondary px-4 is-size-7 has-text-left is-size-7-mobile '>
            <MoreHorizontal />
          </p>
          <div className='columns is-mobile is-hcentered is-vcentered is-paddingless my-3 mx-1'>
            {otherSkills.map(({ Name, Color }) => {
              return (
                <p
                  key={Math.random()}
                  className={`is-family-secondary column tag is-size-7 is-size-7-mobile  mr-1 is-${Color}`}
                >
                  {Name}
                </p>
              );
            })}
          </div>
        </footer>
      </Fade>
    </div>
  );
};

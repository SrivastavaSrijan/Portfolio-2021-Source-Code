import React from 'react';
import Fade from 'react-reveal/Fade';
export const HeroFooter = () => {
  return (
    <div className='hero-foot'>
      <Fade bottom delay={1500}>
        <nav className='tabs mb-5'>
          <div className='container is-fluid'>
            <ul>
              <li className='is-inactive mr-2 is-size-6 is-size-7-mobile '>
                <a href='#about'>About Me</a>
              </li>
              <li className='is-inactive is-size-6 mr-2 is-size-7-mobile'>
                <a href='#projects'>Projects</a>
              </li>
              <li className='is-inactive mr-2 is-size-6 is-size-7-mobile '>
                <a href='#skills'>Skills</a>
              </li>
              <li className='is-inactive mr-2 is-size-6 is-size-7-mobile '>
                <a href='#experience'>Experience</a>
              </li>
            </ul>
          </div>
        </nav>
      </Fade>
    </div>
  );
};

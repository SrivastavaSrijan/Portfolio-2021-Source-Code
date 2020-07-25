import React from 'react';
import { AboutMeFooter } from '../Containers/AboutMeFooter.jsx';
import MEwebp from '../Assets/Images/Me.webp';
import MEjpg from '../Assets/Images/Me.png';
import { Headings } from '../Components/Headings/Headings';
import { Image } from '../Components/Image/Image';
import Fade from 'react-reveal/Fade';
import { AboutMeData } from '../Data/AboutMeData';

export const AboutMe = () => {
  return (
    <section className='section' id='about'>
      <Headings number='01.' title='Me' emoji='👀' />
      <div className='container'>
        <div className='card'>
          <div className='card-content is-paddingless '>
            <div className='is-muted-link px-6 pt-5 pb-3'>
              <Fade delay={500} duration={400}>
                <h2 className='title is-size-3 is-size-4-mobile'>
                  Hello there. My name's Srijan.
                  <span role='img' aria-label={'smile'}>
                    {' '}
                    😄
                  </span>
                  <br />
                </h2>

                <h3 className='subtitle is-family-secondary mb-4 is-size-4  is-size-5-mobile'>
                  I'm building new experiences.
                </h3>
              </Fade>
            </div>

            <div className='level'>
              <div className='level-left '>
                <Fade left delay={700} duration={400}>
                  <div className='image is-1by1 is-avatar ml-2 mr-4 my-4 '>
                    <Image
                      imgJpg={MEjpg}
                      imgWebp={MEwebp}
                      alt='Picture of Srijan'
                    />
                  </div>
                </Fade>
              </div>
              <Fade delay={300} duration={400}>
                <div
                  className='level-content px-6 py-3 '
                  style={{ alignSelf: 'middle', lineHeight: 1.5 }}
                >
                  <AboutMeData />
                </div>
              </Fade>
            </div>
          </div>
          <AboutMeFooter />
        </div>
      </div>
    </section>
  );
};

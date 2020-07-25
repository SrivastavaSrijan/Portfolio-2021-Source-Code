import React from 'react';
import Fade from 'react-reveal/Fade';
import { Buttons } from '../Components/Buttons/Buttons';
import { Heart, ChevronsUp } from 'react-feather';
export const Footer = () => {
  return (
    <footer
      className='is-flex has-margin-top-1 is-vcentered is-hcentered footer is-bold'
      id='footer'
    >
      <div className='has-text-centered'>
        <Fade top duration={400}>
          <a href='#intro' title='Go up!' className='mx-3'>
            {' '}
            <ChevronsUp color='white' size={48} />
          </a>
          <div
            className='button-container mt-6'
            style={{ justifyContent: 'center' }}
          >
            <Buttons />
          </div>
        </Fade>

        <Fade bottom delay={700} duration={400}></Fade>
        <Fade bottom delay={700} duration={400}>
          <p className='has-text-white is-family-secondary mt-3 is-size-7 has-text-center is-size-7-mobile '>
            "You say we're small and not worth the mention. I'm sure we're
            taller in another dimension. "
            <br />
            <span className=' has-text-white is-highlight-link'>
              {' '}
              &mdash; Frank Ocean
            </span>
          </p>
          <p className='has-text-white is-family-secondary is-size-7 is-size-7-mobile has-text-center mt-5'>
            Made with <Heart size={16} /> by Srijan.
          </p>
        </Fade>
      </div>
    </footer>
  );
};

import React from 'react';
import { Typewriter } from '../Typewriter/Typewriter';
import Mewebp from '../../Assets/Images/HeroMe.webp';
import Mejpg from '../../Assets/Images/HeroMe.png';
import AltImage from '../Image/AltImage.jsx';
import { Buttons } from '../Buttons/Buttons';
import Fade from 'react-reveal/Fade';
let greetings = [
  { greet: 'Hi there!' },
  { greet: 'Howdy!' },
  { greet: 'Greetings!' },
  { greet: 'Hey, what’s up?' },
  { greet: 'Hey!' },
  { greet: 'Hiiii.' },
  { greet: "How's it going," },
  { greet: 'Long time no see!' },
  { greet: 'What’s new?' },
  { greet: "Yo, what's up?" },
  { greet: 'Namaste.' },
  { greet: 'Vanakkam.' },
  { greet: 'Salaam.' },
  { greet: 'Sup?' },
];
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
export const HeroBody = () => {
  return (
    <div className='hero-body container is-fluid'>
      <div className='columns' style={{ width: 'inherit' }}>
        <div className='column is-8'>
          <Fade delay={500} duration={400}>
            <h4 className='subtitle has-text-weight-light is-size-5 mt-2  is-size-7-mobile has-text-white'>
              {' '}
              <span className='animate-hand' role='img' aria-label='hand-wave'>
                👋
              </span>{' '}
              {greetings[randomNumber(0, greetings.length)].greet} My name is{' '}
            </h4>
          </Fade>
          <Fade delay={850} duration={400}>
            <h1 className='title is-size-1 has-text-weight-bold is-size-2-mobile has-text-link'>
              Srijan
            </h1>
            <Typewriter />
          </Fade>
          <Fade left delay={1500} duration={400}>
            <div
              className='button-container mt-6'
              style={{ justifyContent: 'flex-start' }}
            >
              <Buttons />
            </div>
          </Fade>
        </div>
        <Fade right delay={700} duration={400}>
          <div className='column image is-4 mt-5 my-2 is-avatar-hero'>
            <AltImage imgJpg={Mejpg} imgWebp={Mewebp} alt='Picture of Srijan' />
          </div>
        </Fade>
      </div>
    </div>
  );
};

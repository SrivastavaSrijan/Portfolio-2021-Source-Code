import React from 'react';
import TextLoop from 'react-text-loop';
import Fade from 'react-reveal/Fade';
import { heroTextData } from '../../Data/heroTextData';
export const Typewriter = () => {
  return (
    <div>
      <Fade bottom delay={750} duration={400}>
        <h3 className='subtitle has-text-weight-light  is-size-4  is-size-5-mobile  has-text-white'>
          and I'm{' '}
          <TextLoop adjustingSpeed={100} delay={1700} noWrap={true}>
            {heroTextData.map(({ item, emoji }) => {
              return (
                <span
                  key={Math.random()}
                  className=' has-text-weight-bold is-size-4  is-size-6-mobile has-text-white'
                >
                  {item}
                  <span role='img' aria-label={item}>
                    {' '}
                    {emoji}
                  </span>
                </span>
              );
            })}
          </TextLoop>
        </h3>
      </Fade>
    </div>
  );
};

import { HeroBody } from '../Components/Hero/HeroBody';
import { HeroFooter } from '../Components/Hero/HeroFooter';
import React from 'react';

export const Hero = () => {
  return (
    <section className='hero is-fullheight' id='hero-content'>
      <HeroBody />
      <HeroFooter />
    </section>
  );
};

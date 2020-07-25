import React, { useEffect } from 'react';
import '../Styles/MainStyles.scss';
import ParticlesBg from 'particles-bg';
import { Hero } from './Hero';
import { AboutMe } from './AboutMe';
import { Skills } from './Skills';
import { Projects } from './Projects';
import { Footer } from './Footer';
import { Experience } from './Experience';
export const MainApp = ({ hideLoader }) => {
  useEffect(hideLoader, []);
  return (
    <div className='App'>
      <div id='intro'>
        <Hero />
        <ParticlesBg num='200' type='thick' bg={true} />
      </div>
      <div id='content-main'>
        {' '}
        <AboutMe />
        <Projects />
        <Skills />
        <Experience />
      </div>
      <Footer />
    </div>
  );
};

import React from 'react';
import CardCarousel from '../Containers/CardCarousel.jsx';
import Headings from '../Components/Headings/Headings.jsx';

export const Projects = () => {
  return (
    <section className='section ' id='projects'>
      <Headings number='02.' title='Projects' emoji='🏋🏽' />
      <div className='container mt-3'>
        <CardCarousel />
      </div>
    </section>
  );
};

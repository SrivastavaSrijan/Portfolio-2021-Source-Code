import React from 'react';
import Headings from '../Components/Headings/Headings.jsx';
import { Timeline } from '../Containers/Timeline.jsx';

export const Experience = () => {
  return (
    <section className='section ' id='experience'>
      <Headings number='04.' title='Experience' emoji='🏋🏽' />

      <Timeline />
    </section>
  );
};

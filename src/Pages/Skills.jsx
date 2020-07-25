import React from 'react';

import Headings from '../Components/Headings/Headings.jsx';
import { Columns } from '../Containers/Columns.jsx';
export const Skills = () => {
  return (
    <section className='section' id='skills'>
      <Headings number='03.' title='Skills' emoji='🥞' />
      <div className='container is-fluid'>
        <Columns />
      </div>
    </section>
  );
};

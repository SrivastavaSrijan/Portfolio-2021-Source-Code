import React from 'react';

import { GitHub, Linkedin, AtSign, Download } from 'react-feather';
export const Buttons = () => {
  return (
    <>
      <a
        className='is-highlight-link  mr-4'
        href='https://github.com/SrivastavaSrijan'
        target='_blank'
        rel='noopener noreferrer'
        title='GitHub'
        aria-label='GitHub'
      >
        {' '}
        <GitHub color='white' size={25} />
      </a>
      <a
        className='is-highlight-link  mr-4'
        href='https://www.linkedin.com/in/srijansrivastava35/'
        target='_blank'
        rel='noopener noreferrer'
        title='LinkedIn'
        aria-label='LinkedIn'
      >
        {' '}
        <Linkedin color='white' size={25} />
      </a>
      <a
        className='is-highlight-link  mr-4'
        target='_blank'
        rel='noopener noreferrer'
        href='mailto:hmu@srijansrivastava.tech'
        title='Email'
        aria-label='Email'
      >
        {' '}
        <AtSign color='white' size={25} />
      </a>
      <a
        className='is-highlight-link mr-4'
        target='_blank'
        rel='noopener noreferrer'
        href='https://drive.google.com/file/d/1Q0U0RGDlsrozjY52u86x8oYi0FIs7MMa/view'
        title='Resume'
        aria-label='Resume'
      >
        {' '}
        <Download color='white' size={25} />
      </a>
    </>
  );
};
export default Buttons;

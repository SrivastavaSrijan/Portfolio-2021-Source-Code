import React from 'react';
export const Headings = ({ number, title, emoji }) => {
  return (
    <h1 className='title is-size-2 is-size-3-mobile'>
      {' '}
      <span className='number-about is-family-mono'>{number}</span>
      <span className='is-italic hr-match '>{title}</span>
      <span
        role='img'
        aria-label={title}
        className='is-size-3 ml-3 is-size-4-mobile is-vcentered'
      >
        {emoji}
      </span>{' '}
    </h1>
  );
};
export default Headings;

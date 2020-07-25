import React from 'react';
import Fade from 'react-reveal/Fade';
import { CountUp } from '../Components/CountUp/CountUp';
import { Activity } from 'react-feather';
import { countUpData } from '../Data/countUpData.js';

export const AboutMeFooter = () => {
  return (
    <footer
      className={`tag-footer card-footer-link px-1 py-4`}
      style={{ overflowY: 'hidden' }}
    >
      {' '}
      <div className=' is-mobile is-family-secondary  is-size-7 has-text-left is-size-7-mobile '>
        {' '}
        <p className='tag is-size-7 has-no-bg'>
          <a
            className='is-highlight-info  ml-2'
            href='https://sourcerer.io/srivastavasrijan'
            target='_blank'
            rel='noopener noreferrer'
            title='Some Stats..'
            aria-label='Some Stats..'
          >
            {' '}
            <Activity size={20} color={'#192824'} />
          </a>
        </p>
      </div>
      <Fade delay={850}>
        {countUpData.map(
          ({ name, emoji, count, startFrom, durationOf, color }) => (
            <CountUp
              name={name}
              emoji={emoji}
              count={count}
              startFrom={startFrom}
              durationOf={durationOf}
              color={color}
            />
          )
        )}
      </Fade>
    </footer>
  );
};

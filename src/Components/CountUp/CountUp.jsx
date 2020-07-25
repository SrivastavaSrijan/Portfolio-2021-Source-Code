import React from 'react';
import { useCountUp } from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

export const CountUp = ({
  name,
  emoji,
  count,
  startFrom,
  durationOf,
  color,
}) => {
  const { countUp, update } = useCountUp({
    start: startFrom,
    end: count,
    startOnMount: false,
    duration: durationOf,
    separator: ',',
    useEasing: true,
  });

  return (
    <div className='is-hcentered is-vcentered my-1 mr-1 px-1 py-1 '>
      <VisibilitySensor>
        {({ isVisible }) => (
          <p className={`tag is-size-6 is-${color} is-size-7-mobile`}>
            {isVisible ? update(count) : ''}
            {countUp}{' '}
            <span role='img' aria-label={name} className='ml-2'>
              {name} {emoji}
            </span>
          </p>
        )}
      </VisibilitySensor>
    </div>
  );
};

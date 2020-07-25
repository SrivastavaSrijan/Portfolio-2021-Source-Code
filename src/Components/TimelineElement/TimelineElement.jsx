import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Zap } from 'react-feather';
export const TimelineElement = ({
  title,
  subtitle,
  description,
  date,
  color,
  icon,
}) => {
  return (
    <VerticalTimelineElement
      className='is-paddingless'
      date={date}
      iconStyle={{ background: '#fff', color: '#000' }}
      contentStyle={{
        background: '#fff',
        color: '#fff',
        padding: 'none !important',
      }}
      textClassName='has-text-black is-family-secondary'
      icon={icon}
    >
      <div className={`notification is-muted-${color}`}>
        <table className='table is-fullwidth'>
          <tbody>
            <tr className='media-content'>
              <td>
                <h3 className='vertical-timeline-element-title title is-size-4 is-size-5-mobile'>
                  {title}
                </h3>
                <h4 className='vertical-timeline-element-subtitle subtitle is-size-5 is-size-6-mobile '>
                  {subtitle}
                </h4>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='content'>
        <table className='table'>
          <tbody>
            {description.map((item) => {
              return (
                <tr key={Math.random()} className='px-1 py-1'>
                  <th className='px-1'>
                    {' '}
                    <Zap size={23} />
                  </th>
                  <td className='is-size-7-mobile is-family-secondary content'>
                    {item}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </VerticalTimelineElement>
  );
};

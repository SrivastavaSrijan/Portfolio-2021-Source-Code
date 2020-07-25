import React from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experienceData } from '../Data/experienceData';
import { TimelineElement } from '../Components/TimelineElement/TimelineElement';
export const Timeline = () => {
  return (
    <VerticalTimeline>
      {experienceData.map(
        ({ title, subtitle, description, date, color, icon }) => (
          <TimelineElement
            title={title}
            subtitle={subtitle}
            description={description}
            color={color}
            icon={icon}
            date={date}
          />
        )
      )}
    </VerticalTimeline>
  );
};

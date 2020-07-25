import React from 'react';

import { SkillCard } from '../Components/Cards/SkillCard';
import { skillData } from '../Data/skillData.js';

export const Columns = () => (
  <div className='columns is-hcentered mt-3'>
    {skillData.map(
      ({ title, subtitle, skills, bgColor, otherSkills, icon }) => (
        <SkillCard
          title={title}
          subtitle={subtitle}
          bgColor={bgColor}
          skills={skills}
          otherSkills={otherSkills}
          icon={icon}
        />
      )
    )}
  </div>
);

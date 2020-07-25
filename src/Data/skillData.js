import React from 'react';
import { Code, Cpu, Users } from 'react-feather';
export const skillData = [
  {
    title: 'Software',
    subtitle: '🥞 Technology Stack',
    bgColor: 'light',
    skills: [
      { Name: 'React', Level: 95, Color: 'light' },
      { Name: 'Java', Level: 85, Color: 'danger' },
      { Name: 'JavaScript', Level: 75, Color: 'primary' },
      { Name: 'Express', Level: 65, Color: 'success' },
      { Name: 'Python', Level: 65, Color: 'warning' },
    ],
    otherSkills: [
      { Name: 'HTML/CSS', Color: 'black' },
      { Name: 'Android Dev', Color: 'black' },
      { Name: 'JavaFX', Color: 'black' },
      { Name: 'Data Analytics', Color: 'black' },
    ],

    icon: <Code size={25} className='mr-2' />,
  },
  {
    title: 'Electronics',
    subtitle: '⚙️ Tools & Theory',
    bgColor: 'primary',
    skills: [
      { Name: 'COMSOL', Level: 95, Color: 'light' },
      { Name: 'μControllers', Level: 85, Color: 'danger' },
      { Name: 'MATLAB', Level: 75, Color: 'primary' },
      { Name: 'Communications', Level: 75, Color: 'success' },
      { Name: 'Virtuoso', Level: 65, Color: 'warning' },
    ],
    otherSkills: [
      { Name: 'VLSI', Color: 'black' },
      { Name: 'Embedded Systems', Color: 'black' },
      { Name: 'DSP', Color: 'black' },
      { Name: 'Arduino', Color: 'black' },
    ],
    icon: <Cpu size={25} className='mr-2' />,
  },
  {
    title: 'Misc. Skills',
    subtitle: '🤠 Other Stuff',
    bgColor: 'danger',
    skills: [
      { Name: 'Technical Doc.', Level: 100, Color: 'light' },
      { Name: 'Project Direction', Level: 95, Color: 'danger' },
      { Name: 'Team Mgt.', Level: 85, Color: 'primary' },
      { Name: 'Digital Marketing', Level: 75, Color: 'success ' },
      { Name: 'Public Speaking', Level: 65, Color: 'warning' },
    ],
    otherSkills: [
      { Name: 'Problem Solving', Color: 'black' },
      { Name: 'Fund Raising', Color: 'black' },
      { Name: 'Design', Color: 'black' },
    ],
    icon: <Users size={25} className='mr-2' />,
  },
];

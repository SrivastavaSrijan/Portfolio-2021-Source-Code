const coffeeCalculator = () => {
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const now = new Date();
  const then = new Date('2016-07-10');
  const diffDays = 1.5 * Math.round(Math.abs((now - then) / oneDay));
  return diffDays;
};
const projectCalculator = () => {
  const ETP = 15;
  const ETLP = 7;
  const numberOfProjects = ETP + ETLP;
  return numberOfProjects;
};
const enggCalculator = () => {
  //Assuming 1 credit is 1 hour of work per week (Academic Rule)
  const weeksInSem = ((12 - 3.5) / 2) * 4;
  const workingDays = weeksInSem * 5;
  const workingWeek = Math.floor(workingDays / 7);
  const avgCredits = 180 / 8;
  const creditHours = avgCredits * workingWeek;
  return creditHours * 8;
};
export const countUpData = [
  {
    name: 'Lines',
    emoji: '⌨️',
    count: 60463,
    startFrom: 59600,
    durationOf: 20,
    color: 'primary',
  },
  {
    name: 'Cups of Kaapi',
    emoji: '☕',
    count: coffeeCalculator(),
    startFrom: 2000,
    durationOf: 20,
    color: 'warning',
  },

  {
    name: 'Hours of Lectures',
    emoji: '🙇',
    count: enggCalculator(),
    startFrom: 2000,
    durationOf: 20,
    color: 'info',
  },
  {
    name: 'Hours of Social Work',
    emoji: '😇',
    count: 120,
    startFrom: 100,
    durationOf: 20,
    color: 'light',
  },
  {
    name: 'Group Projects',
    emoji: '🤝',
    count: projectCalculator(),
    startFrom: 15,
    durationOf: 20,
    color: 'success',
  },
  {
    name: 'Personal Projects',
    emoji: '👷',
    count: 14,
    startFrom: 6,
    durationOf: 20,
    color: 'danger',
  },
];

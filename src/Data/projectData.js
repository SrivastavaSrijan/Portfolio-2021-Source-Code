import PCjpg from '../Assets/Images/PC.jpg';
import PCwebp from '../Assets/Images/PC.webp';
import CPjpg from '../Assets/Images/CP.jpg';
import CPwebp from '../Assets/Images/CP.webp';
import EMjpg from '../Assets/Images/EM.jpg';
import EMwebp from '../Assets/Images/EM.webp';
import DLwebp from '../Assets/Images/DL.webp';
import DLjpg from '../Assets/Images/DL.jpg';
import PFwebp from '../Assets/Images/PF.webp';
import PFjpg from '../Assets/Images/PF.jpg';
import MNMLjpg from '../Assets/Images/MNML.jpg';
import MNMLwebp from '../Assets/Images/MNML.webp';

export const projectData = [
  {
    index: 0,
    color: 'warning',
    title: 'Highly Sensitive D Type LSPR Fiber Sensor',
    subtitle: 'Research Paper',
    imgSrc: [CPjpg, CPwebp],
    content: [
      'Developed a biomedical sensor based on Surface Plasmon Resonance using COMSOL Multiphysics.',
      'Carried out a literature survey for our thesis.',
      'Evaluated the performance of plasmonic coatings through simulations.',
      'Optimized performance paramters by using nano-columns coated with graphene.',
      'Greatly improved sensitivity versus conventional structures.',
      // "Prepared and published a paper with the aforementioned title."
    ],
  },
  {
    index: 1,
    color: 'success',
    title: 'Employee Management',
    subtitle: 'Multi-platform Application',
    imgSrc: [EMjpg, EMwebp],
    content: [
      'Created two applications - one using the Android SDK and one using JavaFX.',
      'Used queries to store placeholder values to a relational database.',
      'Followed AndroidX best-practices whilst coding.',
      'Added functionalities to search, edit and delete employees.',
    ],
    links: [
      'https://github.com/SrivastavaSrijan/Employee-Management-Android-Port',
      'https://drive.google.com/file/d/1m-S7Ow2FUCIpIxzGnItm4lIOQvnris4I/view',
    ],
  },
  {
    index: 2,
    color: 'light',
    title: 'Pomodoro Clock',
    subtitle: 'PERN stack PWA',
    imgSrc: [PCjpg, PCwebp],
    content: [
      'Deployed a unique time management app to increase productivity and prevent burnout.',
      'Created a database to store user data and passwords in an encrypted format.',
      'Added functionality to sync data after authorization through JWT.',
      'Used API calls to show wallpapers and quotes as app counts down.',
    ],
    links: [
      'https://github.com/SrivastavaSrijan/Pomodoro-Clock-Source-Code',
      'https://srijansrivastava.tech/PomodoroClockHello/',
    ],
  },
  {
    index: 4,
    color: 'danger',
    title: '911 Calls',
    subtitle: 'Data Analytics Project',
    imgSrc: [DLjpg, DLwebp],
    content: [
      'Engineered relevant data points through Numpy.',
      'Cleaned and examined data points through Pandas to identify errors.',
      'Generated interactive visualizations using Plotly to analyze the trends of 911 calls for the last year.',
    ],
    links: [
      'https://github.com/SrivastavaSrijan/Data-Analytics-Viz-Projects/blob/master/911-Calls-Project/01-911%20Calls%20Data%20Capstone%20Project.ipynb',
    ],
  },
  {
    index: 5,
    color: 'primary',
    title: 'Personal Portfolio',
    subtitle: 'This website!',
    imgSrc: [PFjpg, PFwebp],
    content: [
      'Created a React portfolio website using Hooks like useEffect and useState.',
      'Used Bulma for responsive and consistent styling through Sass.',
      'Used WebTools like WebFonts and WebP to achieve optimum performance.',
    ],
    links: ['https://github.com/SrivastavaSrijan/Portfolio-Source-Code'],
  },
  {
    index: 6,
    color: 'info',
    title: 'MNML Store',
    subtitle: 'E-Commerce FERN stack application',
    imgSrc: [MNMLjpg, MNMLwebp],
    content: [
      'Curated an e-commerce store using latest React-Redux design patterns.',
      'Libraries used - Redux, Redux-Saga for asynchronous requests, RxJS for observables.',
      'Used the powerful Firebase BaaS that securely update user details through tightly scripted rules, synchronizes user data across devices and allows OAuth via Google.',
      'Tested the app using Jest, carried out performance optimization using Lighthouse, and used React Hooks, Context and Effects as well as ES6 syntax while writing code.',
      'Used an Express backend to process payments through Stripe.',
    ],
    links: [
      'https://github.com/SrivastavaSrijan/MNMLStore',
      'https://mnml.srijansrivastava.tech/',
    ],
  },
];

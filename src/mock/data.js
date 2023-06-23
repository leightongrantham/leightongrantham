import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Leighton Grantham | Welcome', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'LEIGHTON GRANTHAM',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'B2C5AE14-E040-4AE2-9B81-B2E51805C638.JPG',
  paragraphOne: '',
  paragraphTwo: 'Manchester based developer with experience across the full stack. Currently focusing on ReactJs & Contentful - with other knowledge in Angular, AWS, Terraform and more.' +
      '',
  paragraphThree: 'Currently available for commission work.',
  resume: '/src/images/Leighton_Grantham_-_Front_End_Software_Developer (2).pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'svr.png',
    title: 'Sweet Vibrations Radio',
    info: 'Website for Manchester based radio.',
    url: 'https://sweetvibrationsradio.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'slb.png',
    title: 'Saló Boat Service',
    info: 'Website for Italian based boat company.',
    url: 'https://saloboatservice.com',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'hello@leightongrantham.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/leightongrantham',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/leightongrantham/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/leightongrantham',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};

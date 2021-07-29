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
  name: 'Leighton Grantham',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'B2C5AE14-E040-4AE2-9B81-B2E51805C638.JPG',
  paragraphOne: 'Hello!',
  paragraphTwo: 'I am currently a Manchester based developer working across the full stack, ' +
      'working extensively on a SaaS platform as part of my companies journey. My knowledge varies from Angular & Typescript, Node, Redux and Sass to AWS, Terraform and Jenkins.',
  paragraphThree: 'In my own time I like to work on React sites, experimenting with its ecosystem...I am currently enjoying working with GatsbyJS with Netlify in particular.',
  resume: '/src/images/Leighton_Grantham_-_Front_End_Software_Developer (2).pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'svr.png',
    title: 'Sweet Vibrations Radio',
    info: '',
    info2: '',
    url: 'https://sweetvibrationsradio.com',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'leightongrantham@outlook.com',
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

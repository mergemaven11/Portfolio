/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from 'react-easy-emoji';

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: 'Tobias Scott',
  title: "Hi all, I'm Tobias",
  subTitle: emoji(
    'A passionate Full Stack Software Developer 🚀 who loves building things that live on the internet and is eager to study the building blocks of the world, and enjoy rearranging them to build something even better.'
  ),
  resumeLink:
    'https://docs.google.com/document/d/1MbFTGMyZm-akvGDLsKinSs1UcdnwFb6ewnmsmx2FRQQ/edit?usp=sharing',
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: 'https://github.com/Tobias2023',
  linkedin: 'https://www.linkedin.com/in/tobias-scott-he-him-b3572751/',
  gmail: 'tobiascodes12@gmail.com',
  twitter: 'https://twitter.com/TobiasCodes12',
  // gitlab: 'https://gitlab.com',
  // facebook: 'https://www.facebook.com',
  // medium: 'https://medium.com/,
  // stackoverflow: 'https://stackoverflow.com/',
  // Instagram and Twitter are also supported in the links!
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: 'What I do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  skills: [
    emoji(
      '⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications'
    ),
    emoji('⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks'),
    emoji(
      '⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean'
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: 'html-5',
      fontAwesomeClassname: 'fab fa-html5',
    },
    {
      skillName: 'css3',
      fontAwesomeClassname: 'fab fa-css3-alt',
    },
    {
      skillName: 'sass',
      fontAwesomeClassname: 'fab fa-sass',
    },
    {
      skillName: 'JavaScript',
      fontAwesomeClassname: 'fab fa-js',
    },
    {
      skillName: 'reactjs',
      fontAwesomeClassname: 'fab fa-react',
    },
    {
      skillName: 'nodejs',
      fontAwesomeClassname: 'fab fa-node',
    },
    {
      skillName: 'swift',
      fontAwesomeClassname: 'fab fa-swift',
    },
    {
      skillName: 'npm',
      fontAwesomeClassname: 'fab fa-npm',
    },
    {
      skillName: 'sql-database',
      fontAwesomeClassname: 'fas fa-database',
    },
    {
      skillName: 'aws',
      fontAwesomeClassname: 'fab fa-aws',
    },
    {
      skillName: 'firebase',
      fontAwesomeClassname: 'fas fa-fire',
    },
    {
      skillName: 'python',
      fontAwesomeClassname: 'fab fa-python',
    },
    {
      skillName: 'docker',
      fontAwesomeClassname: 'fab fa-docker',
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: 'Southern New Hampshire University',
      logo: require('./assets/images/SNHU_logo.png'),
      subHeader: 'Associates of Science in Information Technology',
      duration: 'September 2016 - April 2018',
      desc: 'Some of my coursework included:',
      descBullets: [
        'Computer Networks',
        'Web technologies (Front End | Backend)',
        'Object oriented design',
        'Mathematics (statistics)',
      ],
    },
    {
      schoolName: 'Southern New Hampshire University',
      logo: require('./assets/images/SNHU_logo.png'),
      subHeader: 'Bachelor of Science in Computer Science',
      duration: 'Feb 2021 (Current)',
      desc: 'Some of my coursework includes:',
      descBullets: [
        'Data Structures and Algorithms',
        'Computer Architecture',
        'Database Systems',
        'Analysis of Algorithms',
        'UNIX Programming',
      ],
    }
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: 'Frontend/Design', //Insert stack or technology you have experience in
      progressPercentage: '90%', //Insert relative proficiency in percentage
    },
    {
      Stack: 'Backend',
      progressPercentage: '80%',
    },
    {
      Stack: 'System Administration',
      progressPercentage: '70%',
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: 'Software Engineer',
      company: 'BreakFreeNomad',
      companylogo: require('./assets/images/bfnLogo.jpg'),
      date: 'Oct 2018 – Nov 2020',
      desc:
        'An independently run blog that provides tips to work at home or anywhere right from your favorite devices.',
      descBullets: [
        'Developed/Maintained; Development | Staging | Production code.',
        'Used tools and services such as TinyMCE for WYSIWYG editing, PythonAnywhere for easy deployment, and Django-allauth for authentication',
      ],
    },
    {
      role: 'Social Media Evaluator',
      company: 'Appen',
      companylogo: require('./assets/images/appenLogo.png'),
      date: 'Feb 2019 – Present',
      desc:
        'Appen provides or improves data used for the development of machine learning and artificial intelligence products.',
      descBullets: [
        'Improve the quality of information shared online.',
        'Research and evaluate posts for Social Media for accuracy',
      ],
    },
    {
      role: 'Front-End Developer',
      company: 'Implemented.Today',
      companylogo: require('./assets/images/imptodLogo.png'),
      date: 'Feb 2020 – Jun 2020',
      desc:
        'Implemented Today helps organizations to select and implement business systems. We focus on Customer Relationship Management (CRM), Business Intelligence (BI), and Project Management (PM). We also help our client to set and properly manage Office 365 and Azure.',
        descBullets: [
          'Develop CRM systems with React and Angular.',
          'Use Firebase for the backend.',
          'Use Google Cloud platforms.'
        ],
      },
    {
      role: 'Technical Support Specialist',
      company: 'Transworld Systems Inc. (TSI)',
      companylogo: require('./assets/images/tsiLogo.png'),
      date: 'Mar 2015 – Dec 2019',
      desc:
        'TSI is a market-leading provider of accounts receivable management and student loan servicing solutions.',
        descBullets: [
          'Identify software and hardware solutions.',
          'Assist with password resets and new employee credentials.',
          'Diagnose and repair issues.'
        ],
      },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: 'Tobias2023', // Change to your github username to view your profile in Contact Section.
  showGithubProfile: 'true', // Set true or false to show Contact profile using Github, defaults to true
  display: false, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: 'Big Projects',
  subtitle: 'SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH',
  projects: [
    {
      image: require('./assets/images/saayaHealthLogo.webp'),
      link: 'http://saayahealth.com/',
    },
    {
      image: require('./assets/images/nextuLogo.webp'),
      link: 'http://nextu.se/',
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji('Achievements And Certifications 🏆 '),
  subtitle:
    'Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !',

  achievementsCards: [
    {
      title: 'Google Code-In Finalist',
      subtitle:
        'First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.',
      image: require('./assets/images/codeInLogo.webp'),
      footerLink: [
        {
          name: 'Certification',
          url:
            'https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing',
        },
        {
          name: 'Award Letter',
          url:
            'https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing',
        },
        {
          name: 'Google Code-in Blog',
          url:
            'https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html',
        },
      ],
    },
    {
      title: 'Google Assistant Action',
      subtitle:
        'Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.',
      image: require('./assets/images/googleAssistantLogo.webp'),
      footerLink: [
        {
          name: 'View Google Assistant Action',
          url:
            'https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en',
        },
      ],
    },

    {
      title: 'PWA Web App Developer',
      subtitle: 'Completed Certifcation from SMIT for PWA Web App Development',
      image: require('./assets/images/pwaLogo.webp'),
      footerLink: [
        { name: 'Certification', url: '' },
        {
          name: 'Final Project',
          url: 'https://pakistan-olx-1.firebaseapp.com/',
        },
      ],
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: 'Blogs',
  subtitle:
    'With Love for Developing cool stuff, I love to write and teach others what I have learnt.',

  blogs: [
    {
      url:
        'Url To Blog Post',
      title: 'Win a Google Assistant Tshirt and $200 in Google Cloud Credits',
      description:
        'Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?',
    },
    {
      url: 'Url To Blog Post',
      title: 'Why REACT is The Best?',
      description:
        'React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.',
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: 'TALKS',
  subtitle: emoji(
    'I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅'
  ),

  talks: [
    {
      title: 'Build Actions For Google Assistant',
      subtitle: 'Codelab at GDG DevFest Karachi 2019',
      slides_url: 'https://bit.ly/saadpasta-slides',
      event_url: 'https://www.facebook.com/events/2339906106275053/',
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji('Podcast 🎙️'),
  subtitle: 'I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY',

  // Please Provide with Your Podcast embeded Link
  podcast: [
    'https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo',
  ],
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji('Contact Me ☎️'),
  subtitle:
    'Discuss a project or just want to say hi? My Inbox is open for all.',
  number: '+1-614-398-2077',
  emailAddress: 'tobiascodes12@gmail.com',
};

// Twitter Section

const twitterDetails = {
  userName: 'tobiascodes12', //Replace "twitter" with your twitter username without @
  display: true, // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};

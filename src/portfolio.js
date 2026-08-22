/* Change this file to get your personal Portfolio */

// Summary And Greeting Section
import emoji from "react-easy-emoji";

const illustration = {
  animated: true,
};

const greeting = {
  username: "Tobias Scott",
  title: "Hi, I'm Tobias",
  subTitle: emoji(
    "Platform-focused engineer building reliable systems, developer tooling, and products across containers, cloud, APIs, and AI-enabled workflows. 🚀"
  ),
  resumeLink:
    "https://docs.google.com/document/d/1MbFTGMyZm-akvGDLsKinSs1UcdnwFb6ewnmsmx2FRQQ/edit?usp=sharing",
  displayGreeting: true,
};

const socialMediaLinks = {
  github: "https://github.com/mergemaven11",
  linkedin: "https://www.linkedin.com/in/tobias-scott-he-him-b3572751/",
  gmail: "tobiascodes12@gmail.com",
  twitter: "https://twitter.com/TobiasCodes12",
  gitlab: "https://gitlab.com/users/Tobiascodes12/activity",
  display: true,
};

const skillsSection = {
  title: "What I do",
  subTitle: "PLATFORM ENGINEERING • CONTAINERS • CLOUD • BACKEND/APIS • RELIABILITY",
  skills: [
    emoji("⚡ Troubleshoot Docker, Linux, networking, registries, Compose, and cloud-connected production systems"),
    emoji("⚡ Build backend APIs, internal tooling, automation, and AI-governance workflows with Python and modern web stacks"),
    emoji("⚡ Design containerized development environments and CI/CD workflows with Docker, Kubernetes, Helm, and GitHub Actions"),
    emoji("⚡ Investigate incidents using logs, metrics, reproducible test cases, root-cause analysis, and clear remediation paths"),
    emoji("⚡ Build full-stack products with React, FastAPI, MongoDB, PostgreSQL, authentication, testing, and privacy controls"),
  ],
  softwareSkills: [
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "TypeScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "React", fontAwesomeClassname: "fab fa-react" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "Linux", fontAwesomeClassname: "fab fa-linux" },
    { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "GitHub", fontAwesomeClassname: "fab fa-github" },
    { skillName: "Databases", fontAwesomeClassname: "fas fa-database" },
    { skillName: "APIs", fontAwesomeClassname: "fas fa-code" },
  ],
  display: true,
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Southern New Hampshire University",
      logo: require("./assets/images/SNHU_logo.png"),
      subHeader: "Bachelor of Science in Computer Science — In Progress",
      duration: "In Progress",
      desc: "Computer science studies focused on software engineering, algorithms, systems, and databases.",
      descBullets: ["Data Structures and Algorithms", "Computer Architecture", "Database Systems", "UNIX Programming"],
    },
    {
      schoolName: "Southern New Hampshire University",
      logo: require("./assets/images/SNHU_logo.png"),
      subHeader: "Associate of Science in Information Technology",
      duration: "2019",
      desc: "Information technology foundation spanning networking, web technologies, programming, and systems.",
      descBullets: ["Computer Networks", "Web Technologies", "Object-Oriented Design", "Statistics"],
    },
  ],
};

const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Platform Engineering & Containers", progressPercentage: "90%" },
    { Stack: "Backend APIs & Automation", progressPercentage: "85%" },
    { Stack: "Cloud, CI/CD & Reliability", progressPercentage: "85%" },
  ],
  displayCodersrank: false,
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Docker Support Engineer",
      company: "ServiceRocket",
      companylogo: require("./assets/images/servicerocket.svg"),
      date: "2025 – Present",
      desc: "Platform-focused support engineering across Docker, Linux, container runtimes, networking, registries, Compose, and cloud-connected environments.",
      descBullets: [
        "Troubleshoot complex container-platform issues, reproduce failures, and drive root-cause analysis across Linux and cloud-connected systems.",
        "Partner with engineering on escalations by collecting logs and system evidence, isolating platform behavior, validating defects, and documenting remediation paths.",
        "Design and build internal AI-governance tooling and support automation to standardize recurring workflows and improve knowledge reuse.",
      ],
    },
    {
      role: "Senior Support Specialist",
      company: "Robin Powered",
      companylogo: require("./assets/images/robin-powered.svg"),
      date: "Jun 2024 – Jul 2025",
      desc: "Enterprise technical support across software, hardware, infrastructure, SaaS, cloud, and on-prem environments.",
      descBullets: [
        "Diagnosed and resolved complex customer issues with a focus on service restoration and clear incident ownership.",
        "Collaborated with engineering on critical escalations using reproducible findings, diagnostic evidence, and customer context to accelerate resolution.",
      ],
    },
    {
      role: "Software Engineer",
      company: "Flywheel.io",
      companylogo: require("./assets/images/flywheel.png"),
      date: "Jul 2022 – Feb 2024",
      desc: "Software engineering for biomedical research data, diagnostics, and large-scale medical imaging workflows.",
      descBullets: [
        "Developed and maintained software supporting data management, research workflows, medical imaging ingestion, and core API/CLI capabilities.",
        "Improved reliability through automated testing and technical-debt reduction while contributing to data de-identification workflows.",
      ],
    },
    {
      role: "Technical Support Engineer",
      company: "Zingtree",
      companylogo: require("./assets/images/zingtree.jpg"),
      date: "Aug 2021 – Aug 2022",
      desc: "Enterprise SaaS technical support, integrations, custom development, and sales-engineering enablement.",
      descBullets: [
        "Supported integrations with Salesforce, Zendesk, Zapier, and other SaaS platforms; wrote custom JavaScript and reproducible mock environments.",
        "Developed Zingtree Chrome Extension V6, maintained technical documentation, and delivered demos supporting Fortune 1000 opportunities.",
      ],
    },
  ],
};

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "mergemaven11",
  showGithubProfile: "false",
  display: false,
};

const bigProjects = {
  title: "Featured Projects",
  subtitle: "PRODUCTS AND PLATFORMS I'M BUILDING",
  projects: [
    {
      image: require("./assets/images/bragstack-project.svg"),
      projectName: "BragStack",
      projectDesc: "A SaaS-style career proof tracker for capturing accomplishments, evidence, measurable impact, skills, and shareable career material. Built with FastAPI, MongoDB, React/Vite, Docker, and Docker Compose.",
      footerLink: [{ name: "View on GitHub", url: "https://github.com/mergemaven11/bragstack" }],
    },
    {
      image: require("./assets/images/clinly-project.svg"),
      projectName: "Clinly",
      projectDesc: "A secure relationship portal combining encrypted messaging, journaling, progress tracking, tenant isolation, audit events, and professional/participant workflows. Built with React, FastAPI, MongoDB, and Docker.",
      footerLink: [{ name: "View on GitHub", url: "https://github.com/mergemaven11/clinly-backbone" }],
    },
    {
      image: require("./assets/images/flashquest-project.svg"),
      projectName: "FlashQuest",
      projectDesc: "A game-like spaced-repetition study platform with private decks, email verification, XP, mastery progression, concept cards, and break/fix labs. Built with React, FastAPI, PostgreSQL, Alembic, and Docker.",
      footerLink: [
        { name: "Live App", url: "https://flaskquest.netlify.app/" },
        { name: "View on GitHub", url: "https://github.com/mergemaven11/FlashQuest" },
      ],
    },
  ],
  display: true,
};

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆"),
  subtitle: "Selected certifications and engineering achievements.",
  achievementsCards: [],
  display: false,
};

const blogSection = {
  title: "Blogs",
  subtitle: "Engineering notes and things I've learned while building and troubleshooting systems.",
  blogs: [],
  display: false,
};

const talkSection = {
  title: "Talks",
  subtitle: "Technical talks and knowledge sharing.",
  talks: [],
  display: false,
};

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Conversations about technology and engineering.",
  podcast: [],
  display: false,
};

const contactInfo = {
  title: emoji("Let's Connect ☎️"),
  subtitle: "Want to talk platform engineering, containers, APIs, developer tooling, or a project? My inbox is open.",
  emailAddress: "tobiascodes12@gmail.com",
};

const twitterDetails = {
  userName: "tobiascodes12",
  display: false,
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
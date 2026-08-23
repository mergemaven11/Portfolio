/* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji";

const illustration = { animated: true };

const greeting = {
  username: "Tobias Scott",
  title: "Platform & Software Engineer",
  subTitle: emoji("I build and troubleshoot reliable systems across Docker, Linux, cloud infrastructure, backend APIs, automation, and full-stack products. 🚀"),
  resumeLink: "https://docs.google.com/document/d/1MbFTGMyZm-akvGDLsKinSs1UcdnwFb6ewnmsmx2FRQQ/edit?usp=sharing",
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
  title: "What I Do",
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
    { schoolName: "Southern New Hampshire University", logo: require("./assets/images/SNHU_logo.png"), subHeader: "Bachelor of Science in Computer Science — In Progress", duration: "In Progress", desc: "Currently pursuing a Bachelor of Science in Computer Science, strengthening foundations in software engineering, algorithms, systems, and databases while applying those concepts in professional engineering work and independent products.", descBullets: ["Data Structures and Algorithms", "Computer Architecture", "Database Systems", "UNIX Programming"] },
    { schoolName: "Southern New Hampshire University", logo: require("./assets/images/SNHU_logo.png"), subHeader: "Associate of Science in Information Technology", duration: "2019", desc: "Information technology foundation spanning networking, web technologies, programming, and systems.", descBullets: ["Computer Networks", "Web Technologies", "Object-Oriented Design", "Statistics"] },
  ],
};

const techStack = { viewSkillBars: true, experience: [
  { Stack: "Platform Engineering & Containers", progressPercentage: "90%" },
  { Stack: "Backend APIs & Automation", progressPercentage: "85%" },
  { Stack: "Cloud, CI/CD & Reliability", progressPercentage: "85%" },
], displayCodersrank: false };

const workExperiences = { display: true, experience: [
  { role: "Docker Support Engineer", company: "ServiceRocket", companylogo: require("./assets/images/servicerocket.svg"), date: "2025 – Present", desc: "Platform-focused support engineering across Docker, Linux, container runtimes, networking, registries, Compose, and cloud-connected environments.", descBullets: ["Troubleshoot complex container-platform issues, reproduce failures, and drive root-cause analysis across Linux and cloud-connected systems.", "Partner with engineering on escalations by collecting logs and system evidence, isolating platform behavior, validating defects, and documenting remediation paths.", "Design and build internal AI-governance tooling and support automation to standardize recurring workflows and improve knowledge reuse."] },
  { role: "Senior Support Specialist", company: "Robin Powered", companylogo: require("./assets/images/robin-powered.svg"), date: "Jun 2024 – Jul 2025", desc: "Enterprise technical support across software, hardware, infrastructure, SaaS, cloud, and on-prem environments.", descBullets: ["Diagnosed and resolved complex customer issues with a focus on service restoration and clear incident ownership.", "Collaborated with engineering on critical escalations using reproducible findings, diagnostic evidence, and customer context to accelerate resolution."] },
  { role: "Software Engineer", company: "Flywheel.io", companylogo: require("./assets/images/flywheel.png"), date: "Jul 2022 – Feb 2024", desc: "Software engineering for biomedical research data, diagnostics, and large-scale medical imaging workflows.", descBullets: ["Developed and maintained software supporting data management, research workflows, medical imaging ingestion, and core API/CLI capabilities.", "Improved reliability through automated testing and technical-debt reduction while contributing to data de-identification workflows."] },
  { role: "Technical Support Engineer", company: "Zingtree", companylogo: require("./assets/images/zingtree.jpg"), date: "Aug 2021 – Aug 2022", desc: "Enterprise SaaS technical support, integrations, custom development, and sales-engineering enablement.", descBullets: ["Supported integrations with Salesforce, Zendesk, Zapier, and other SaaS platforms; wrote custom JavaScript and reproducible mock environments.", "Developed Zingtree Chrome Extension V6, maintained technical documentation, and delivered demos supporting Fortune 1000 opportunities."] },
] };

const openSource = { githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN, githubUserName: "mergemaven11", showGithubProfile: "false", display: false };

const bigProjects = {
  title: "Featured Projects",
  subtitle: "SELECTED PRODUCTS THAT SHOW HOW I DESIGN, BUILD, TEST, AND OPERATE SOFTWARE",
  projects: [
    { image: "/project-art/bragstack-project.svg", projectName: "BragStack", projectDesc: "Career-proof SaaS for recording evidence-backed accomplishments, measurable impact, skills, and review-ready career material. Demonstrates product modeling, authentication, privacy controls, reporting workflows, automated tests, and containerized local development.", tech: "FastAPI • React/Vite • MongoDB • Docker • GitHub Actions", footerLink: [{ name: "Live Site", url: "https://usebragstack.com" }, { name: "API Docs", url: "https://api.usebragstack.com/docs" }, { name: "View Source", url: "https://github.com/mergemaven11/bragstack" }] },
    { image: "/project-art/clinly-project.svg", projectName: "Clinly", projectDesc: "Secure professional-participant portal with encrypted messaging, journaling, progress tracking, tenant isolation, audit events, and authorization boundaries. Demonstrates security-conscious backend design and production-minded operational controls.", tech: "React • FastAPI • MongoDB • PyNaCl • Docker", footerLink: [{ name: "View Source", url: "https://github.com/mergemaven11/clinly-backbone" }] },
    { image: "/project-art/flashquest-project.svg", projectName: "FlashQuest", projectDesc: "Game-like spaced-repetition learning platform with accounts, email verification, private decks, XP, mastery progression, migrations, seed data, readiness checks, and CI quality gates.", tech: "React • FastAPI • PostgreSQL • Alembic • Docker", footerLink: [{ name: "Live Demo", url: "https://flaskquest.netlify.app/" }, { name: "View Source", url: "https://github.com/mergemaven11/FlashQuest" }] },
  ], display: true,
};

const achievementSection = { title: emoji("Achievements And Certifications 🏆"), subtitle: "Selected certifications and engineering achievements.", achievementsCards: [], display: false };
const blogSection = { title: "Blogs", subtitle: "Engineering notes and things I've learned while building and troubleshooting systems.", blogs: [], display: false };
const talkSection = { title: "Talks", subtitle: "Technical talks and knowledge sharing.", talks: [], display: false };
const podcastSection = { title: emoji("Podcast 🎙️"), subtitle: "Conversations about technology and engineering.", podcast: [], display: false };
const contactInfo = { title: emoji("Let's Connect ☎️"), subtitle: "I'm interested in platform engineering, production support, cloud operations, and software engineering opportunities where troubleshooting depth and hands-on building both matter.", emailAddress: "tobiascodes12@gmail.com" };
const twitterDetails = { userName: "tobiascodes12", display: false };

export { illustration, greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo, twitterDetails };

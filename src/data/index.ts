import {
  AboutMeProps,
  BriefAbtProps,
  CertificationsProps,
  ContactMeProps,
  ExperienceProps,
  ProjectsProps,
  SkillsProps,
} from "../model";

export const NavBarButtonsData: Array<string> = [
  "About",
  "Projects",
  "Skills",
  "Certificates",
  "Contact",
];

export const AbtMeButtonData: AboutMeProps = {
  AbtMeButtons: ["Learn More", "Contact Me"],
  AbtMeTxt: "A highly motivated web developer, eager to apply my skills in HTML, CSS, JavaScript, and modern frameworks to real-world projects. Actively seeking opportunities to contribute to innovative web solutions and advance the industry.",
  greet: "Hey",
  intro: "I'm Swathi Madhavan",
  profession: "Software Engineer",
};

export const BriefAbtMeData: BriefAbtProps = {
    text: "About Me",
    abtPara: "Passionate Software Developer specializing in Networking, with 1.6 years of expertise in C programming and Linux environments. Skilled in creating dynamic single-page applications using ReactJS, TypeScript, and modern web technologies, including Redux and responsive design. Strong problem solving abilities and proficient in development tools such as Git and JIRA.Committed to delivering clean, reusable code and conducting thorough code reviews."
}

export const ProjectsData: ProjectsProps = {
  project: "Projects",
  projButtons: ["Portfolio WebApp", "TODO App", "Calculator App"],
  projectDataInfo: [
    {
      projectName: "Portfolio WebApp",
      projectImg: "portfolioApp",
      projectDesc:
        "An engaging personal portfolio website that highlights my skills, projects, and professional background.",
      projGitLink:
        "https://github.com/Swathi-Madhavan/portfolio-site/tree/feature/version-2",
    },
    {
      projectName: "TODO App",
      projectImg: "todoApp",
      projectDesc:
        "Developed a feature-rich TODO app using React, TypeScript, and Redux, focusing on scalability, performance, and cross-browser compatibility.",
      projGitLink: "https://github.com/Swathi-Madhavan/todo-list",
    },
    {
      projectName: "Calculator App",
      projectImg: "calcApp",
      projectDesc:
        "A dynamic calculator app built with React, TypeScript, and Redux for efficient state management and robust performance.",
      projGitLink: "https://github.com/Swathi-Madhavan/calculator-app",
    },
  ],
};

export const SkillsData: SkillsProps = {
  SkillsTxt: "Skills",
  SkillsDescDataInfo: [
    {
      skillsButtons: "FrontEnd Development",
      skillsImg: "FrontEndImg.png",
      skillsTypes: [
        "FrontEnd Development",
        "React",
        "Javascript",
        "TypeScript",
        "Html5",
        "Css",
        "Redux",
        "Router",
        "FlexBox",
        "RESTful API",
        "Material UI",
        "Git",
        "GitHub"
      ],
      skillsTypesImg: [" "],
    },
  ],
};

export const CertificatesData: CertificationsProps = {
  certificateTxt: "Certifications",
  certificateImg: ["Certificate1.png", "Certificate2.png"],
};

export const ExperienceData: ExperienceProps = {
  experienceTxt: "Experience",
  experienceButtons: ["Experience", "Education"],
  workExperience: " ",
  education: " ",
};

export const ContactMeData: ContactMeProps = {
  contactTxt: "Contact",
  contactDetails: ["swathipattam123@gmail.com", ""],
};

import { AboutMeProps, BriefAbtProps, CertificationsProps, ContactMeProps, ExperienceProps, ProjectsProps, SkillsProps } from "../model";

export const NavBarButtonsData: Array<string> = [
  "Contact",
  "Resume",
  "About",
  "Certificates",
  "Projects",
];

export const AbtMeButtonData: AboutMeProps = {
  AbtMeButtons: ["Learn More", "Contact Me"],
  AbtMeTxt: "A highly motivated student studying Artificial Intelligence and Machine Learning. Actively seeking opportunities to apply my skills and knowledge to real-world projects and contribute to the advancement of the industry.",
  greet: "Hey",
  intro: "I'm Swathi Madhavan",
  profession: "Software Engineer"
};


export const BriefAbtMeData: BriefAbtProps = {
    text: "About Me",
    abtPara: "I am actively seeking opportunities to apply my acquired skills and knowledge to real-world projects. My educational background has equipped me with a solid foundation in AI and ML algorithms, data analysis, and programming languages such as Python. Additionally, I have gained practical experience through hands-on projects, both independently and collaboratively."
}

export const ProjectsData: ProjectsProps = {
  project: "Projects",
  projButtons: ["PersonalPortfolio Website", "Calculator App","E-Commerce Website"],
  projectDataInfo: [
    {
    projectName: "Portfolio Website",
    projectImg: "\BrainImg.png",
    projectDesc: "An engaging personal portfolio website that highlights my skills, projects, and professional background.",
    projGitLink: "https://github.com/Swathi-Madhavan/portfolio-website"
  },
  {
    projectName: "Calculator App",
    projectImg: "\cellPhone.png",
    projectDesc: "A dynamic calculator app built with React, TypeScript, and Redux for efficient state management and robust performance.",
    projGitLink: "https://github.com/Swathi-Madhavan/calculator-app"
  },
  {
    projectName: "E-Commerce Website",
    projectImg: "\Computers.png",
    projectDesc: "Developed a feature-rich E-Commerce website for purchasing electronic gadgets, dresses,home appliances and so on using React, TypeScript, JavaScript, Redux, and Router for seamless user experience.",
    projGitLink: "https://github.com/Swathi-Madhavan/e-commerce-website"
  }
]
}

export const SkillsData : SkillsProps = {
  SkillsTxt: "Skills",
  SkillsDescDataInfo: [
    {
      
      skillsButtons: "FrontEnd Development",
      skillsImg: "\FrontEndImg.png",
      skillsTypes: ["React", "Javascript", "TypeScript", "Html5", "Css", "Redux", "Router", "FlexBox"],
      skillsTypesImg: [" "]
  }]
}


export const CertificatesData : CertificationsProps = {
  certificateTxt: "Certifications",
  certificateImg: ["\Certificate1.png", "\Certificate2.png"]
}

export const ExperienceData : ExperienceProps = {
    experienceTxt: "Experience",
    experienceButtons: ["Experience", "Education"],
    workExperience: " ",
    education: " "
}

export const ContactMeData : ContactMeProps = {
    contactTxt: "Contact",
    contactDetails: ["swathipattam123@gmail.com", ""]
}
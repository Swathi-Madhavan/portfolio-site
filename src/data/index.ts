import {
  AboutProps,
  BannerButtonsProps,
  Header,
  SkillBoxProps,
  MenuItems,
  MyIntro,
  SocialMediaIconsProps,
  BigBoxProps,
  TopicProps,
  TechIconsProps,
  FooterLinkProp,
  DataSource,
} from "../model";

export const headerData: Header = {
  title: "Swathi Madhavan",
  href: "#",
};

export const menuData: Array<MenuItems> = [
  {
    label: "ABOUT",
    link: "#about-me",
  },
  {
    label: "PROJECTS",
    link: "#my-projects",
  },
  {
    label: "get in touch",
    link: "#get-in-touch",
    isGetInTouchBtn: true,
  },
];

export const myIntroData: MyIntro = {
  introText1:
    "I'm Swathi Madhavan, and I currently working as a junior software in Networking Domain.",
  introText2:
    "Welcome to my first milestone in FrontEnd development of creating a Website 😎",
};

export const iconsList: Array<SocialMediaIconsProps> = [
  {
    mediaIconLink: "https://www.linkedin.com/in/swathi-madhavan-ab888b191/",
    iconImg: "fa-linkedin",
  },
  {
    mediaIconLink: "https://github.com/Swathi-Madhavan",
    iconImg: "fa-github",
  },
  {
    mediaIconLink: "",
    iconImg: "fa-twitter",
  },
];

export const btnList: Array<BannerButtonsProps> = [
  {
    btnClass: "view-projects",
    anchorTagClass: "view-projects-link",
    link: "#my-projects",
    btnText: "VIEW PROJECTS",
  },
  {
    btnClass: "getin-touch",
    anchorTagClass: "remove-link-style",
    link: "#get-in-touch",
    btnText: "GET IN TOUCH",
  },
];

export const abtData: AboutProps = {
  title: "about me",
  desc: "Hello! My name is Swathi Madhavan.I have a graduate degree of B.Tech from Anna University, Trichy. I am outgoing,dedicated and open minded.I get across people and adapt to the changes with ease.I believe that a person should work on developing their professional skills and learning new things all the time.",
};

export const skillData: Array<SkillBoxProps> = [
  {
    skillName: "PROGRAMMING LANGUAGES",
    skills: "C, HTML, CSS, Javascript",
  },
  {
    skillName: "DATABASE",
    skills: "SQL, MySQL",
  },
  {
    skillName: "OPERATING SYSTEMS",
    skills: "Linux, Windows",
  },
  {
    skillName: "NETWORKING",
    skills: "Basic",
  },
  {
    skillName: "IDE",
    skills: "VScode, Pycharm, Idea",
  },
  {
    skillName: "COLLABORATING WITH PEOPLE",
    skills: "",
  },
];

export const bigBoxData: Array<BigBoxProps> = [
  {
    imgSrc: `${process.env.PUBLIC_URL}/images/website-preview.png`,
    alt: "website-preview",
  },
  {
    imgSrc: `${process.env.PUBLIC_URL}/images/calculator-app`,
    alt: "calculator-preview",
  },
  {
    imgSrc: `${process.env.PUBLIC_URL}/images/Todo-app.png`,
    alt: "todo-preview",
  },
];

export const topicData: Array<TopicProps> = [
  {
    topicName: "WEB DEVELOPMENT",
    briefMe:
      "I have created this portfolio website based on the knowledge gained in the areas such as HTML,CSS,JAVASCRIPT. This website contains the profile portfolio of myself which includes introduction,about me and the areas where I interested in. I will be constantly upgrading this profile accordingly.",
    topicName2: "Personal Website",
  },
  {
    topicName: "WEB DEVELOPMENT",
    briefMe:
      "I have created a Todo app using react, typescript and material UI. It's an Multi-page app. I have used react router to create multi-page application. To share the state across all the pages, I have used redux and redux-tool kit.",
    topicName2: "TO-Do APP",
  },
  {
    topicName: "WEB DEVELOPMENT",
    briefMe:
      "This Calculator app created using react, typescript and material UI. It's an simple react single page application to demonstrate my react skills.",
    topicName2: "Calculator-APP",
  },
];

export const techIconsData: Array<TechIconsProps> = [
  {
    techImg: "fa fa-html5 html-icon",
  },
  {
    techImg: "fa-brands fa-css3-alt css-icon",
  },
  {
    techImg: "fa-brands fa-js javscript-icon",
  },
];

export const toDoIconsData: Array<TechIconsProps> = [
  {
    techImg: "fa-brands fa-react css-icon",
  },
  {
    techImg: "fa-brands fa-css3-alt css-icon",
  },
  {
    techImg: "fa-brands fa-js javscript-icon",
  },
];

export const footerData: Array<FooterLinkProp> = [
  {
    footClassName: "about-ref",
    link: "#about-me",
    txt: "ABOUT",
  },
  {
    footClassName: "project-ref",
    link: "#my-projects",
    txt: "PROJECTS",
  },
  {
    footClassName: "contact",
    link: "#get-in-touch",
    txt: "CONTACT",
  },
];

export const projectsData: Array<DataSource> = [
  {
    bigBox: {
      imgSrc: `${process.env.PUBLIC_URL}/images/website-preview.png`,
      alt: "website-preview",
    },
    techIcons: techIconsData,
    topic: {
      topicName: "WEB DEVELOPMENT",
      briefMe:
        "I have created this portfolio website based on the knowledge gained in the areas such as HTML,CSS,JAVASCRIPT. This website contains the profile portfolio of myself which includes introduction,about me and the areas where I interested in. I will be constantly upgrading this profile accordingly.",
      topicName2: "Personal Website",
    },
  },
  {
    bigBox: {
      imgSrc: `${process.env.PUBLIC_URL}/images/calculator-app1.png`,
      alt: "calculator-preview",
    },
    techIcons: toDoIconsData,
    topic: {
      topicName: "WEB DEVELOPMENT",
      briefMe:
        "This Calculator app created using react, typescript and material UI. It's an simple react single page application to demonstrate my react skills.",
      topicName2: "Calculator-APP",
    },
  },
  {
    bigBox: {
      imgSrc: `${process.env.PUBLIC_URL}/images/Todo-app.png`,
      alt: "todo-preview",
    },
    techIcons: toDoIconsData,
    topic: {
      topicName: "WEB DEVELOPMENT",
      briefMe:
        "I have created a Todo app using react, typescript and material UI. It's an Multi-page app. I have used react router to create multi-page application. To share the state across all the pages, I have used redux and redux-tool kit.",
      topicName2: "TO-DO APP",
    },
  },
];

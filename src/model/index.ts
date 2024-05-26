export interface Header {
  title: string;
  href: string;
}

export interface MenuItems {
  label: string;
  link: string;
  isGetInTouchBtn?: boolean;
}

export interface NavProps {
  header: Header;
  menuItems: Array<MenuItems>;
}

export interface MyIntro {
  introText1: string;
  introText2: string;
}

export interface SocialMediaIconsProps {
  mediaIconLink: string;
  iconImg: string;
}

export interface BannerButtonsProps {
  btnClass: string;
  anchorTagClass: string;
  link: string;
  btnText: string;
}

export interface BannerProps {
  myintro: MyIntro;
  socialMediaIcons: Array<SocialMediaIconsProps>;
  bannerButtons: Array<BannerButtonsProps>;
}

export interface AboutProps {
  title: string;
  desc: string;
}

export interface SkillBoxProps {
  skillName: string;
  skills: string;
}

export interface InterestProps {
  data: Array<SkillBoxProps>;
}

export interface BigBoxProps {
  imgSrc: string;
  alt: string;
}

export interface TopicProps {
  topicName: string;
  topicName2: string;
  briefMe: string;
}

export interface TechIconsProps {
  techImg: string;
}

export interface DataSource {
  bigBox: BigBoxProps;
  topic: TopicProps;
  techIcons: Array<TechIconsProps>;
}
export interface ProjectProps {
  data: Array<DataSource>;
}

export interface ListOfProjectsProps {
  bigBox: BigBoxProps;
  topic: TopicProps;
  techIcons: Array<TechIconsProps>;
  isFirstItem?: boolean;
}

export interface FooterLinkProp {
  footClassName: string;
  link: string;
  txt: string;
}

export interface FooterProps {
  data: Array<FooterLinkProp>;
}

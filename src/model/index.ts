export interface AppColorsProps {
  primaryDarkColor: string;
  secondaryDarkColor: string;
  whiteColor: string;
  violetColor: string;
}

export interface AboutMeProps {
  greet: string;
  intro: string;
  profession: string;
  AbtMeTxt: string;
  AbtMeButtons: Array<string>;
}

export interface BriefAbtProps {
  text: string;
  abtPara: string;
}

export interface ProjectDescData {
  projectImg: string;
  projectDesc: string;
  projectName: string;
  projGitLink: string;
}

export interface ProjectsProps {
  project: string;
  projButtons: Array<string>;
  projectDataInfo: Array<ProjectDescData>;
}

export interface SkillsDescData {
  skillsImg: string;
  skillsButtons: string;
  skillsTypes: Array<string>;
  skillsTypesImg: Array<string>;
}

export interface SkillsProps {
  SkillsTxt: string;
  SkillsDescDataInfo: Array<SkillsDescData>;
}

export interface CertificationsProps {
    certificateTxt: string;
    certificateImg: Array<string>;
}

export interface ExperienceProps {
    experienceTxt: string;
    experienceButtons: Array<string>;
    workExperience: string;
    education: string;
}


export interface ContactMeProps {
  contactTxt : string;
  contactDetails: Array<string>

}
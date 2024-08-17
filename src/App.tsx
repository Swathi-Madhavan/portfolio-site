import React from "react";
import "./App.css";
import { AppColorsData } from "./themes/ColoPallets";
import NavBar from "./UIComponents/NavBar";
import Picture from "./UIComponents/Picture";
import AboutMe from "./UIComponents/AboutMe";
import {
  AbtMeButtonData,
  BriefAbtMeData,
  CertificatesData,
  ContactMeData,
  ExperienceData,
  ProjectsData,
  SkillsData,
} from "./data";
import BriefAbtMe from "./UIComponents/BriefAbtMe";
import Projects from "./UIComponents/Projects";
import Skills from "./UIComponents/Skills";
import Certifications from "./UIComponents/Certifications";
import Experience from "./UIComponents/Experience";
import ContactMe from "./UIComponents/ContactMe";

function App() {
  return (
    <div
      style={{
        width: "100%",
        padding: "95px 112px 167px 135px",
        backgroundColor: AppColorsData.primaryDarkColor,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        flex: 1,
      }}
    >
      <NavBar />
      <Picture />
      <AboutMe {...AbtMeButtonData} />
      <BriefAbtMe {...BriefAbtMeData} />
      <Projects {...ProjectsData} />
      <Skills {...SkillsData} />
      <Certifications {...CertificatesData} />
      <Experience {...ExperienceData} />
      <ContactMe {...ContactMeData} />
    </div>
  );
}

export default App;

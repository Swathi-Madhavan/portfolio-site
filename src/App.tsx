import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Banner from "./components/Banner";
import About from "./components/About";
import Interest from "./components/Interest";
import Projects from "./components/Projects";
import GetInTouch from "./components/GetInTouch";
import Footer from "./components/Footer";
import {
  btnList,
  iconsList,
  menuData,
  myIntroData,
  headerData,
  abtData,
  skillData,
  footerData,
  projectsData,
} from "./data";

function App() {
  return (
    <div>
      <Nav header={headerData} menuItems={menuData} />
      <Main>
        <Banner
          myintro={myIntroData}
          socialMediaIcons={iconsList}
          bannerButtons={btnList}
        />
        <About {...abtData} />
        <Interest data={skillData} />
        <Projects data={projectsData} />

        <GetInTouch />
      </Main>
      <Footer data={footerData} />
    </div>
  );
}

export default App;

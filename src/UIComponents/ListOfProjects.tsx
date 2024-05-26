import React from "react";
import { ListOfProjectsProps } from "../model";
import ProjectInfo from "./ProjectInfo";

export function ListOfProjects({
  bigBox,
  topic,
  techIcons,
  isFirstItem,
}: ListOfProjectsProps) {
  return (
    <>
      <div
        className="row-align"
        style={{
          marginTop: isFirstItem ? "0px" : "30px",
        }}
      >
        <img className="big-box" src={bigBox.imgSrc} alt={bigBox.alt} />
        <div className="column-layout">
          <ProjectInfo {...topic} />
          <div className="tech-used">
            <div className="tech-icon">
              {techIcons.map((icon, index) => (
                <i key={index.toString()} className={icon.techImg}></i>
              ))}
            </div>
            <div className="view-code-container">
              <button className="view-code">
                <a
                  href="https://github.com/Swathi-Madhavan/portfolio-website"
                  target="_blank"
                  className="remove-hyper-link-white"
                  rel="noreferrer"
                >
                  VIEW CODE
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

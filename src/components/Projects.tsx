import React from "react";
import { ListOfProjects } from "../UIComponents/ListOfProjects";
import { ProjectProps } from "../model";

export default function Projects({ data }: ProjectProps) {
  return (
    <section className="container4" id="my-projects">
      <div className="projects">
        <p>projects</p>
      </div>
      <div className="my-experience">
        <p>Some things I’ve worked (or am working) on</p>
      </div>
      {data.map((item, index) => (
        <ListOfProjects
          key={index.toString()}
          bigBox={item.bigBox}
          topic={item.topic}
          techIcons={item.techIcons}
          isFirstItem={index === 0}
        />
      ))}
    </section>
  );
}

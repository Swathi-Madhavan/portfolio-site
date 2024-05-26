import React from "react";
import { AboutProps } from "../model";

export default function About({ title, desc }: AboutProps) {
  return (
    <section className="container2" id="about-me">
      <div className="intro">
        <p>{title}</p>
      </div>
      <div className="aboutme">
        <p>{desc}</p>
      </div>
    </section>
  );
}

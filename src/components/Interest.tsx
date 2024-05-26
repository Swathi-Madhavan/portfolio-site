import React from "react";
import SkillBox from "../UIComponents/SkillBox";
import { InterestProps } from "../model";

export default function Interest({ data }: InterestProps) {
  return (
    <section className="container3">
      <div className="interest">
        <p>interest</p>
      </div>
      <div className="my-skills">
        <p>Some things I enjoy learning about and doing</p>
      </div>
      <div className="skills">
        {data?.map((row, index) => (
          <SkillBox key={index.toString()} {...row} />
        ))}
      </div>
    </section>
  );
}

import React from "react";
import { SkillBoxProps } from "../model";

export default function SkillBox({ skillName, skills }: SkillBoxProps) {
  return (
    <div className="skill">
      {skillName}
      <br />
      {skills && `[${skills}]`}
    </div>
  );
}

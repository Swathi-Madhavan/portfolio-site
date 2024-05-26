import React from "react";
import { SocialMediaIconsProps } from "../model";

export default function SocialMediaIcons({
  mediaIconLink,
  iconImg,
}: SocialMediaIconsProps) {
  return (
    <a
      className="remove-hyper-link"
      href={mediaIconLink}
      target="_blank"
      rel="noreferrer"
    >
      <i className={`fa ${iconImg} icon-color`}></i>
    </a>
  );
}

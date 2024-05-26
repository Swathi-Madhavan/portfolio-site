import React from "react";
import { BannerButtonsProps } from "../model";

export default function BannerButtons({
  btnClass,
  anchorTagClass,
  link,
  btnText,
}: BannerButtonsProps) {
  return (
    <button className={btnClass}>
      <a className={anchorTagClass} href={link}>
        {btnText}
      </a>
    </button>
  );
}

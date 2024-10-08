import React from "react";
import { createSvgIcon } from "@mui/material";

const HamBurgerIcon = createSvgIcon(
  <svg
    width="35"
    height="35"
    viewBox="0 0 35 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="17.5" cy="17.5" r="17.5" fill="#7733FF" />
    <path
      d="M9 24V22H27V24H9ZM9 19V17H27V19H9ZM9 14V12H27V14H9Z"
      fill="white"
    />
  </svg>,

  "HamBurgerIcon"
);

export default HamBurgerIcon;

import React from "react";
import { createSvgIcon } from "@mui/material";

const RightArrowIcon = createSvgIcon(
  <svg
    width="76"
    height="96"
    viewBox="0 0 76 96"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_dd_1336_735)">
      <rect
        x="58"
        y="18.0005"
        width="59.3543"
        height="39.9997"
        rx="11"
        transform="rotate(90 58 18.0005)"
        fill="#232732"
      />
    </g>
    <path
      d="M28.3223 35.3117C28.3223 34.8582 28.4488 34.4134 28.6881 34.026C28.9273 33.6386 29.27 33.3235 29.6787 33.1152C30.0874 32.9069 30.5463 32.8133 31.0053 32.8448C31.4643 32.8763 31.9056 33.0317 32.2811 33.2938L49.8424 45.5668C50.1686 45.7942 50.435 46.0951 50.6194 46.4444C50.8039 46.7938 50.901 47.1815 50.9027 47.5753C50.9044 47.9691 50.8107 48.3577 50.6293 48.7086C50.4479 49.0595 50.1842 49.3626 49.8599 49.5927L32.2986 62.0487C31.924 62.3151 31.482 62.4743 31.0214 62.5089C30.5608 62.5435 30.0995 62.452 29.6883 62.2446C29.277 62.0372 28.9319 61.7219 28.6909 61.3335C28.4498 60.945 28.3223 60.4985 28.3223 60.0432V35.3117Z"
      fill="#7733FF"
    />
    <defs>
      <filter
        id="filter0_dd_1336_735"
        x="0"
        y="0.000488281"
        width="76"
        height="95.3545"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="6" dy="6" />
        <feGaussianBlur stdDeviation="6" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="overlay"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1336_735"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="-6" dy="-6" />
        <feGaussianBlur stdDeviation="6" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
        />
        <feBlend
          mode="overlay"
          in2="effect1_dropShadow_1336_735"
          result="effect2_dropShadow_1336_735"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect2_dropShadow_1336_735"
          result="shape"
        />
      </filter>
    </defs>
  </svg>,

  "RightArrowIcon"
);

export default RightArrowIcon;

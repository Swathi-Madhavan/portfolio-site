import React from "react";
import { MenuItems } from "../model";

export default function NavListItem({
  label,
  link,
  isGetInTouchBtn,
}: Readonly<MenuItems>) {
  return (
    <li>
      <a
        className={`nav-link ${isGetInTouchBtn ? "get-in-touch-btn" : ""}`}
        href={link}
      >
        {label}
      </a>
    </li>
  );
}

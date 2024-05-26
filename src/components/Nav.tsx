import React from "react";
import NavListItem from "../UIComponents/NavListItem";
import { NavProps } from "../model";

export default function Nav({ header, menuItems }: Readonly<NavProps>) {
  return (
    <nav>
      <ul>
        <li>
          <a className="logo" href={header?.href}>
            {header?.title}
          </a>
        </li>
      </ul>
      <label htmlFor="menu" tabIndex={0}>
        <i className="fa-solid fa-bars bar-icon"></i>
      </label>
      <input id="menu" type="checkbox" />
      <ul>
        {menuItems?.map((menu, index) => (
          <NavListItem key={index.toString()} {...menu} />
        ))}
      </ul>
    </nav>
  );
}

import React from "react";
import { FooterProps } from "../model";

export default function Footer({ data }: FooterProps) {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-row">
        {data.map((value, index) => (
          <a
            key={index.toString()}
            className={value.footClassName}
            href={value.link}
          >
            {value.txt}
          </a>
        ))}
      </div>
      <div className="copy-rights">
        <p>
          <span id="copy-rights">© {currentYear}</span> Swathi Madhavan All
          Rights Reserved
        </p>
      </div>
    </footer>
  );
}

import React from "react";

export default function GetInTouch() {
  return (
    <section className="container5" id="get-in-touch">
      <div className="get-in-touch">
        <p>get in touch</p>
      </div>
      <div className="email">
        <p>
          I&apos;m currently open to new opportunities, inbox is always open! Find me
          everywhere @swathipattam123
        </p>
      </div>
      <div className="get-in-touch-icon">
        <a
          href="mailto:swathipattam123@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-solid fa-envelope mail-icon"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/swathi-madhavan-ab888b191/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-linkedin linked-icon"></i>
        </a>
        <a
          href="https://github.com/Swathi-Madhavan"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-github github-icon"></i>
        </a>
      </div>
    </section>
  );
}

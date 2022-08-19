import classes from "./Footer.module.css";
import React from "react";

function Footer() {
  function onEmailClick() {
    window.open(
      "mailto:benallen@bendesign.dev?subject=Subject&body=Hello There%20"
    );
  }

  function onGithubClick() {
    window.open(
      "https://github.com/blaster73"
    );
  }

  return (
    <div className={classes.footer}>
      <li>
        <h2>Let's Connect</h2>
        <div className={classes.sidelist}>
          <p>Email me: &nbsp;&nbsp;</p>
          <p onClick={onEmailClick} className={classes.underlined}>
            benallen@bendesign.dev
          </p>
        </div>
        <div className={classes.sidelist}>
          <p>My code: &nbsp;&nbsp;&nbsp;</p>
          <p onClick={onGithubClick} className={classes.underlined}>
          github.com/blaster73
          </p>
        </div>
      </li>
      <h4>© 2022 Benjamin Allen</h4>
    </div>
  );
}

export default Footer;

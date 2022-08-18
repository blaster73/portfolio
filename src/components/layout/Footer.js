import classes from "./Footer.module.css";
import React from "react";

function Footer() {
  function onEmailClick() {
    window.open(
      "mailto:allenbenjamin@knights.ucf.edu?subject=Subject&body=Body%20"
    );
  }

  return (
    <div className={classes.footer}>
      <li>
        <h2>Let's Connect</h2>
        <p onClick={onEmailClick}>Email me at allenbenjamin@knights.ucf.edu</p>
        <a href="https://github.com/blaster73" target="_blank" rel="noopener noreferrer">https://github.com/blaster73</a>
      </li>
      <h4>© 2022 Benjamin Allen</h4>
    </div>
  );
}

export default Footer;

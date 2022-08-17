import classes from "./LeftNavigation.module.css";
import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

function LeftNavigation(props) {
  return (
    <div>
      <nav className={props.showSidebar ? classes.navbar : classes.navbarclosed}>
        <ul className={props.showSidebar ? classes.navmenu : classes.navmenuclosed}>
          <Link
            className={classes.navlink}
            to="intro"
            spy={true}
            smooth={true}
            duration={500}
          ><h3>Intro</h3></Link>
          <Link
            className={classes.navlink}
            to="content"
            spy={true}
            smooth={true}
            duration={500}
          ><h3>Works</h3></Link>
          <Link
            className={classes.navlink}
            to="footer"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          ><h3>Contact</h3></Link>
        </ul>
      </nav>
    </div>
  );
}

export default LeftNavigation;

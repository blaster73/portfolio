import classes from "./LeftNavigation.module.css";
import React, { useState } from "react";

function LeftNavigation(props) {
  return (
    <div> 
      <nav className={props.showSidebar ? classes.navbar : classes.navbarclosed}>
        <ul className={props.showSidebar ? classes.navmenu : classes.navmenuclosed}>
          <h2>TODO</h2>
          <h3>dynamically</h3>
          <h3>scroll</h3>
          <h3>to</h3>
          <h3>page</h3>
          <h3>sections</h3>
        </ul>
      </nav>
    </div>
  );
}

export default LeftNavigation;
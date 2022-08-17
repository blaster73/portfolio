import classes from "./LeftNavigation.module.css";
import React, { useState } from "react";

function initialGetWindowDimenstions() {
  const { innerWidth: width, innerHeight: height } = window;
  if(width < 501) {
    return false;
  }
  else {
    return true;
  }
}

function LeftNavigation() {
  const [showSidebar, setShowSidebar] = useState(() => initialGetWindowDimenstions());

  // check for mobile

  // Check width is above 500
  function getWindowDimenstions() {
    const { innerWidth: width, innerHeight: height } = window;
    console.log(width, height);

    if(width < 501) {
      setShowSidebar(show => false);
    }
    else {
      setShowSidebar(show => true);
    }
    return {
      width,
      height
    };
  }

  function displaySize() {
    console.log(getWindowDimenstions());
  }

  window.addEventListener('resize', displaySize);

  return (
    <div> 
      <nav className={showSidebar ? classes.navbar : classes.navbarclosed}>
        <ul className={showSidebar ? classes.navmenu : classes.navmenuclosed}>
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
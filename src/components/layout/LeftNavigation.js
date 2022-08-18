import classes from "./LeftNavigation.module.css";
import { Link} from "react-scroll";

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
          ><h2>Intro</h2></Link>
          <Link
            className={classes.navlink}
            to="content"
            spy={true}
            smooth={true}
            duration={500}
          ><h2>Works</h2></Link>
          <Link
            className={classes.navlink}
            to="footer"
            spy={true}
            smooth={true}
            offset={-500}
            duration={500}
          ><h2>Contact</h2></Link>
        </ul>
      </nav>
    </div>
  );
}

export default LeftNavigation;

import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Benjamin Allen</div>
      <nav>
        <ul>
          <li>
            <Link to="/portfolio">Home</Link>
          </li>
          <li>
            <Link to="/portfolio/programming">Programming</Link>
          </li>
          <li>
            <Link to="/portfolio/game-design">Game Design</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;

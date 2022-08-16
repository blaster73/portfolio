import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/programming">Programming</Link>
          </li>
          <li>
            <Link to="/game-design">Game Design</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;

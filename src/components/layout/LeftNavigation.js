import classes from "./LeftNavigation.module.css";

function LeftNavigation() {
  return (
    <div>
      <nav className={classes.navbar}>
        <ul className={classes.navmenu}>
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

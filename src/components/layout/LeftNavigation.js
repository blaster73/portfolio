import classes from "./LeftNavigation.module.css";

function LeftNavigation() {
  return (
    <div>
      <nav className={classes.navbar}>
        <ul className={classes.navmenu}>
          <h2 className={classes.text}>ToDO</h2>
          <h3 className={classes.text}>dynamically</h3>
          <h3 className={classes.text}>scroll</h3>
          <h3 className={classes.text}>to</h3>
          <h3 className={classes.text}>page</h3>
          <h3 className={classes.text}>sections</h3>
        </ul>
      </nav>
    </div>
  );
}

export default LeftNavigation;

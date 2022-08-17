import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";
import LeftNavigation from "./LeftNavigation";

function Layout(props) {
  return (
    <div>
      <LeftNavigation showSidebar={props.showSidebar} />

      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
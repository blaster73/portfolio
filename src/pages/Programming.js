import ProjectItem from "../components/layout/ProjectItem";

import classes from "./Programming.module.css";

function Programming() {
  return (
    <div className={classes.section}>
      <section className={classes.section}>
        <h1>Programming Projects</h1>
        <li>
          <ProjectItem
            image="https://images.squarespace-cdn.com/content/v1/5dc885d0e8c8347aab579042/1639372236539-AHCM07SYQ4LOJW8BPFKE/AvMT8X.gif?format=500w"
            title="Project Title"
            description="Test Description"
          />
        </li>
      </section>
    </div>
  );
}

export default Programming;

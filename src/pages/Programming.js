import ProjectItem from "../components/layout/ProjectItem";
import classes from "./Page.module.css";

function Programming() {
  return (
    <div className={classes.divholder}>
      <div className={classes.divbackground}>
        <section className={classes.section}>
          <h1>Unity Weather</h1>
          <ul>
            <ProjectItem
              image="https://images.squarespace-cdn.com/content/v1/5dc885d0e8c8347aab579042/1603916441336-FLWIWI0M0A4KM57BA9Z1/Screenshot_20201028-155801.png?format=300w"
              title="Unity Weather"
              description="A weather app created in Unity that pulls the user's weather information from an API and dynamically displays their local weather in a 3D environment."
              link="https://www.bendesign.net/work/personalprojects#:~:text=audio%20in%20Audacity.-,Unity%20Weather,-Solo%20project%2C%20Google"
            />
          </ul>
        </section>
      </div>
      <div className={classes.divbackground2}>
        <section className={classes.section}>
          <h1>Programming Projects</h1>
          <ul>
            <ProjectItem
              image="https://i.imgur.com/LqIYj3J.png"
              title="This Website!"
              description="I wanted to create a custom porftolio website that fit my needs of displaying game design content separately from programming content. I ditched that orginal design but still ended up with a custom website and more experience programming."
              link="blaster73.github.io/portfolio"
            />
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Programming;

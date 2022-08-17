import ProjectItem from "../components/layout/ProjectItem";
import Intro from "../components/layout/Intro";
import classes from "./Page.module.css";

function Home(props) {
  return (
    <div>
      <Intro fullWidth={props.fullWidth} />
      <div>
        <ProjectItem
          fullWidth={props.fullWidth}
          color="rgb(179, 179, 179)"
          image="https://images.squarespace-cdn.com/content/v1/5dc885d0e8c8347aab579042/1651267976476-BET6LWPEFKBEUFPZWQO8/tp8.jpg?format=750w"
          title="Treasure Party"
          subtitle="Unity - 2022"
          description="I wanted to create a custom porftolio website that fit my needs of displaying game design content separately from programming content. I ditched that orginal design but still ended up with a custom website and more experience programming."
          link="https://www.bendesign.net/work/treasure-party"
        />
        <ProjectItem
          fullWidth={props.fullWidth}
          color="rgb(255, 122, 112)"
          image="https://i.imgur.com/LqIYj3J.png"
          title="This Website!"
          subtitle="React - 2022"
          description="I wanted to create a custom porftolio website that fit my needs of displaying game design content separately from programming content. I ditched that orginal design but still ended up with a custom website and more experience programming."
          link="blaster73.github.io/portfolio"
        />
        <ProjectItem
          fullWidth={props.fullWidth}
          color="rgb(102, 102, 102)"
          image="https://i.imgur.com/SJYZ533.png"
          title="Unity Weather"
          subtitle="Unity - 2020"
          description="A weather app created in Unity that pulls the user's weather information from an API and dynamically displays their local weather in a 3D environment."
          link="https://www.bendesign.net/work/personalprojects#:~:text=audio%20in%20Audacity.-,Unity%20Weather,-Solo%20project%2C%20Google"
        />
      </div>
    </div>
  );
}

export default Home;

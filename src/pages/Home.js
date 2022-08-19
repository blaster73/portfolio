import ProjectItem from "../components/layout/ProjectItem";
import Intro from "../components/layout/Intro";
import Footer from "../components/layout/Footer";
import classes from "./Page.module.css";

function Home(props) {
  return (
    <div id="intro" className={classes.test}>
      <Intro fullWidth={props.fullWidth} />
      <div id="mobile">
        <ProjectItem
          fullWidth={props.fullWidth}
          color="rgb(255, 137, 46)"
          image="https://images.squarespace-cdn.com/content/v1/5dc885d0e8c8347aab579042/1651267976476-BET6LWPEFKBEUFPZWQO8/tp8.jpg?format=750w"
          title="Treasure Party"
          subtitle="Unity - 2022"
          description="I wanted to create a custom porftolio website that fit my needs of displaying game design content separately from programming content. I ditched that orginal design but still ended up with a custom website and more experience programming."
          link="https://www.bendesign.net/work/treasure-party"
        />
          <ProjectItem
          id="unityweather"
          fullWidth={props.fullWidth}
          color="rgb(224, 126, 126)"
          image="https://i.imgur.com/SJYZ533.png"
          title="Unity Weather"
          subtitle="Unity - 2020"
          description="A weather app created in Unity that pulls the user's weather information from an API and dynamically displays their local weather in a 3D environment."
          link="https://www.bendesign.net/work/personalprojects#:~:text=audio%20in%20Audacity.-,Unity%20Weather,-Solo%20project%2C%20Google"
        />
        <div id="web">
        <ProjectItem
          fullWidth={props.fullWidth}
          color="rgb(84, 84, 84)"
          image="https://i.imgur.com/LqIYj3J.png"
          title="bendesign.dev"
          subtitle="React - 2022"
          description="I wanted to create a custom porftolio website that fit my needs of displaying game design content separately from programming content. I ditched that orginal design but still ended up with a custom website and more experience programming."
          link="https://github.com/blaster73/portfolio"
        />
        </div>
        <div id="AR/VR">
          <ProjectItem
            fullWidth={props.fullWidth}
            color="rgb(77, 138, 40)"
            image="https://cdn.cloudflare.steamstatic.com/steam/apps/580060/header.jpg?t=1487966420"
            title="Cut Cut Buffet"
            subtitle="Unity - 2017"
            description="Cut Cut Buffet is a slicing simulator for the ages, cut your way through mounds of food and multiple game modes. Can you stand the heat of the kitchen?"
            link="https://store.steampowered.com/app/580060/Cut_Cut_Buffet/"
          />
          <ProjectItem
            fullWidth={props.fullWidth}
            color="rgb(255, 137, 46)"
            image="https://cdn.cloudflare.steamstatic.com/steam/apps/511420/header.jpg?t=1477078242"
            title="Aleph Null"
            subtitle="Unity - 2016"
            description="Aleph Null is a story based platformer/puzzler for the HTC Vive. Engage in the story mode or Challenge yourself to 4 difficulty levels Beginner, Intermediate, Expert, and Master to reach the end in the quickest time possible. Charge your shots and manage ammo to improve yourself!"
            link="https://store.steampowered.com/app/511420/Aleph_Null/"
          />
        </div>
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Home;

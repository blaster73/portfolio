import ProjectItem from "../components/layout/ProjectItem";
import classes from "./Page.module.css";

function GameDesign() {
  return (
    <div className={classes.divholder}>
      <div className={classes.divbackground}>
        <section className={classes.section}>
          <h1>SUCPOP</h1>
          <ul>
            <ProjectItem
              image="https://images.squarespace-cdn.com/content/v1/5dc885d0e8c8347aab579042/1639372236539-AHCM07SYQ4LOJW8BPFKE/AvMT8X.gif?format=500w"
              title="GMTK Game Jam 2021 - Solo Project - SUCPOP"
              description={
                'This was a small game created over the coarse of a weekend. The theme was "Joined Together." I created every aspect of the game from the art and programming to the sounds effects and design.'
              }
              link="https://www.bendesign.net/work/personalprojects#:~:text=Made%20in%20Unity.-,SUCPOP,-Solo%20project%2C%20GMTK"
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

export default GameDesign;
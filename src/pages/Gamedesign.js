import ProjectItem from "../components/layout/ProjectItem";
import classes from "./Programming.module.css";

function GameDesign() {
  return (
    <div>
      <section className={classes.section}>
        <h1>Programming Projects</h1>
        <ul>
          <ProjectItem
            image="https://images.squarespace-cdn.com/content/v1/5dc885d0e8c8347aab579042/1639372236539-AHCM07SYQ4LOJW8BPFKE/AvMT8X.gif?format=500w"
            title="GMTK Game Jam 2021 - Solo Project - SUCPOP"
            description={
              'This was a small game created over the coarse of a weekend. The theme was "Joined Together." I created every aspect of the game from the art and programming to the sounds effects and design.'
            }
            link="https://www.bendesign.net/work/personalprojects#:~:text=Made%20in%20Unity.-,SUCPOP,-Solo%20project%2C%20GMTK"
          />
          <ProjectItem
            image="https://images.squarespace-cdn.com/content/v1/5dc885d0e8c8347aab579042/1639372236539-AHCM07SYQ4LOJW8BPFKE/AvMT8X.gif?format=500w"
            title="GMTK Game Jam 2021 - Solo Project - SUCPOP"
            description={
              'This was a small game created over the coarse of a weekend. The theme was "Joined Together." I created every aspect of the game from the art and programming to the sounds effects and design.'
            }
            link="https://www.bendesign.net/work/personalprojects#:~:text=Made%20in%20Unity.-,SUCPOP,-Solo%20project%2C%20GMTK"
          />
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
  );
}

export default GameDesign;

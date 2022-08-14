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
              title="GMTK Game Jam Solo Project - 2021"
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
          <h1>Chimp Chat</h1>
          <ul>
            <ProjectItem
              image="https://images.squarespace-cdn.com/content/v1/5dc885d0e8c8347aab579042/1651506786648-46QOMZHL0XVY4PSMVY2O/jane+6.jpg?format=500w"
              title="National Geographic - 2021"
              description="Learn to communicate with chimps! Use your voice to mimmick chimpanzee vocalizations. I was a game designer, UI/UX designer, and programmer on this project."
              link="https://www.nationalgeographic.org/tickets/events/event/becoming-jane/"
            />
          </ul>
        </section>
      </div>
    </div>
  );
}

export default GameDesign;
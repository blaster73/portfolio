import Card from "./ui/Card";
import classes from "./ProjectItem.module.css";
import FadeIn from "./FadeIn";

function PojectItem(props) {
  const bgColor = props.color;

  return (
    <div>
      <div
        className={
          props.fullWidth ? classes.divbackground : classes.divbackgroundfull
        }
        style={{
          backgroundColor: bgColor,
        }}
      >
        <FadeIn>
          <section className={classes.section}>
            <h1>{props.title}</h1>
            <Card>
              <div className={classes.image}>
                <img src={props.image} alt={props.title} />
              </div>
              <div className={classes.content}>
                <h3>{props.subtitle}</h3>
                <p>{props.description}</p>
              </div>
              <div className={classes.actions}>
                <a href={props.link} target="_blank" rel="noreferrer">
                  <button>Go to Project</button>
                </a>
              </div>
            </Card>
          </section>
        </FadeIn>
      </div>
    </div>
  );
}

export default PojectItem;

import Card from "./ui/Card";
import classes from "./ProjectItem.module.css";

function PojectItem(props) {
  return (
    <Card>
      <div className={classes.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={classes.content}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
      <div className={classes.actions}>
        <a href={props.link} target="_blank" rel="noreferrer">
          <button>Go to Project</button>
        </a>
      </div>
    </Card>
  );
}

export default PojectItem;
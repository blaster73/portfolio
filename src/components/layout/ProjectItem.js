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
      <div>
        <button onClick={'/game-design'}> Go to Project</button>
      </div>
    </Card>
  );
}

export default PojectItem;

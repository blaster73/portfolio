import classes from "./Intro.module.css";
import { useSpring, animated } from "react-spring";

function Intro() {
  const delay1 = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 300,
  });

  const delay2 = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 600,
  });

  const delay3 = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 900,
  });

  return (
    <div className={classes.introdiv}>
      <animated.h3 style={delay1}>Benjamin Allen</animated.h3>
      <animated.h2 style={delay2}>Game Designer / Programmer</animated.h2>
      <animated.p style={delay3}>
        Hello, I'm Ben. I'm a Game Designer at PlayQ, currently working on a new
         mobile game. I create games, make little programs, and work on my website 
         in my spare time. I have previously worked on projects with National Geographic,
         343i, and Busch Gardens. Feel free to check out some of my work below:
      </animated.p>
    </div>
  );
}

export default Intro;

import "./Scoreboard.css";
//
//
//
//
//

const Scoreboard = (props) => {
  return (
    <div id="header">
      <p id="title">
        Get points by clicking on an image but don't click on any more than
        once!
      </p>
      <div id="scoreboard">
        <p>Score {props.score}</p>
        <p>Best score {props.best}</p>
      </div>
    </div>
  );
};

export default Scoreboard;

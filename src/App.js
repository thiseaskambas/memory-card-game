import { useState } from "react";
import "./App.css";
import Gameboard from "./Components/Gameboard";
import Scoreboard from "./Components/Scoreboard";

function App() {
  const [playCount, setPlayCount] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [playedCards, setPlayedCards] = useState([]);

  const clickCountHandler = (clickedCard) => {
    if (!playedCards.includes(clickedCard)) {
      setPlayedCards((prevPlayed) => [...prevPlayed, clickedCard]);
      setPlayCount(playCount + 1);
    } else {
      if (playCount > bestScore) {
        setBestScore(playCount);
      }
      setPlayedCards([]);
      setPlayCount(0);
    }
  };

  return (
    <div className="App">
      <Scoreboard score={playCount} best={bestScore} />
      <Gameboard onClick={clickCountHandler} />
    </div>
  );
}

export default App;

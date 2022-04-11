import { useState } from "react";
import imagesArr from "../../src/AllImages";
import Card from "./Card";
import "./Gameboard.css";

const Gameboard = (props) => {
  const [cardsArr, setCardsArr] = useState(imagesArr);

  const fisherYates = (toShuffle = []) => {
    for (let i = toShuffle.length - 1; i > 0; i -= 1) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [toShuffle[i], toShuffle[randomIndex]] = [
        toShuffle[randomIndex],
        toShuffle[i],
      ];
    }
    return toShuffle;
  };

  const clickHandler = (e) => {
    e.stopPropagation();
    let shuffled = [...fisherYates(cardsArr)];
    setCardsArr(shuffled);
    props.onClick(e.currentTarget.id);
  };

  return (
    <div id="gameboard-ctn">
      <div id="gameboard">
        {cardsArr.map((img) => (
          <Card
            title={img.title}
            src={img.src}
            key={img.id}
            id={img.id}
            onClick={clickHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default Gameboard;

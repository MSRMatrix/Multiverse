import { useContext, useEffect, useState } from "react";
import { newGame } from "../../memoryFunctions/newGame";
import "./finishedGame.css";
import { cardGameSettings } from "../../memoryFunctions/cardGameSettings";
import { MemoryContext } from "../memoryContext/MemoryContext";
import { displayRecord } from "../../memoryFunctions/displayRecord";
import { isNewRecord } from "../../memoryFunctions/isNewRecord";

const FinishedGame = ({
  setClickState,
  setCounter,
  setGameStarted,
  setCardChooser,
  setDifficulty,
  gameTime,
  setGameTime,
  difficulty,
  cardChooser,
  setNewClass,
  setImagesLoaded,
  setTest,
}) => {
  const {cards, setCards} = useContext(MemoryContext);
  const [record, setRecord] = useState(localStorage.getItem(difficulty));

  useEffect(() => {
    isNewRecord(record, difficulty, gameTime, setRecord)
  }, []) 

  return (
    <>
      <dialog open className="finished-game">
        <p>Mode: {difficulty}</p>
       {displayRecord(record, gameTime)}
        <p>
          Time:{" "}
          {gameTime.minutes <= 10 ? `0${gameTime.minutes}` : gameTime.minutes}:
          {gameTime.seconds >= 10 ? gameTime.seconds : `0${gameTime.seconds}`}
        </p>
        <button
          onClick={() => {
            cardGameSettings(setCards, difficulty, cardChooser, setNewClass, cards, setImagesLoaded, setTest),
              newGame(setClickState, cards, setCards, setCounter),
              setGameTime({
                seconds: 0,
                minutes: 0,
              });  
              
          }}
        >
          Restart the Game
        </button>
        <button
          onClick={() => {
            setGameStarted(false),
              setCards([]),
              setCardChooser(""),
              setDifficulty(""),
              setGameTime({
                seconds: 0,
                minutes: 0,
              });
          }}
        >
          Back to the Menu
        </button>
      </dialog>
    </>
  );
};

export default FinishedGame;

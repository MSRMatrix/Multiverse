import { useContext, useEffect, useState } from "react";
import { newGame } from "../../memoryFunctions/newGame";
import "./finishedGame.css";
import { cardGameSettings } from "../../memoryFunctions/cardGameSettings";
import { preloadImages } from "../../memoryFunctions/preloadImages";
import { MemoryContext } from "../memoryContext/MemoryContext";

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

  if (record === null) {
    localStorage.setItem(difficulty, `${gameTime.minutes}:${gameTime.seconds}`);
  }


  if (record) {
    const minutes = localStorage.getItem(difficulty).split(":")[0];
    const seconds = localStorage.getItem(difficulty).split(":")[1];
    if (minutes > gameTime.minutes) {
      return localStorage.setItem(
        difficulty,
        `${gameTime.minutes}:${gameTime.seconds}`
      );
    }

    if (Number(seconds) > gameTime.seconds) {
      localStorage.setItem(difficulty, `${minutes}:${gameTime.seconds}`);
      return setRecord(localStorage.getItem(difficulty));
    }
  }

   

  return (
    <>
      <dialog open className="finished-game">
        <p>Mode: {difficulty}</p>
        {record ? (
          <p>
            Your record:{" "}
            {`${
              record.split(":")[0] <= 10
                ? `0${record.split(":")[0]}`
                : record.split(":")[0]
            }:${
              record.split(":")[1] < 10
                ? `0${record.split(":")[1]}`
                : record.split(":")[1]
            }`}
          </p>
        ) : (
          ""
        )}
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

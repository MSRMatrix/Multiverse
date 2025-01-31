import { NavLink } from "react-router";
import { cardTheme } from "../memoryFunctions/cardTheme";
import { changeDifficulty } from "../memoryFunctions/changeDifficulty";
import { newGame } from "../memoryFunctions/newGame";
import { useState } from "react";
import Memory from "./Game/Memory";
import "./memoryMenu.css";
import FinishedGame from "./finishedGame/FinishedGame";

const MemoryMenu = () => {
  const [clickState, setClickState] = useState({
    firstCard: null,
    secondCard: null,
    attempts: 0,
  });
  const [counter, setCounter] = useState(0);
  const [newClass, setNewClass] = useState("");
  const [cards, setCards] = useState([]);
  const [difficulty, setDifficulty] = useState("");
  const [cardChooser, setCardChooser] = useState("");
  const [gameStarted, setGameStarted] = useState(false);
  const [gameTime, setGameTime] = useState({
    seconds: 0,
    minutes: 0,
  });

  return (
    <>
      {!gameStarted ? (
        <dialog open className="memory-menu">
          <h1>Memory Menu</h1>
          <div className="card-difficulty">
            <h2>Difficulty</h2>
            <div className="select-container">
              <select
                value={difficulty}
                onChange={(e) =>
                  changeDifficulty(
                    e,
                    cards,
                    setCards,
                    difficulty,
                    cardChooser,
                    setDifficulty,
                    setCardChooser,
                    setNewClass
                  )
                }
              >
                <option value="" disabled>
                  Please Choose...
                </option>
                <option value="Easy">Easy</option>
                <option value="Normal">Normal</option>
                <option value="Hard">Hard</option>
                <option value="Expert">Expert</option>
              </select>
              {difficulty ? (
                <i className="fa-solid fa-check"></i>
              ) : (
                <i className="fa-solid fa-xmark"></i>
              )}
            </div>
          </div>

          <div className="card-theme">
            <h2>Card Theme</h2>
            <div className="select-container">
              <select
                value={cardChooser}
                onChange={(e) =>
                  cardTheme(
                    e,
                    cardChooser,
                    setCardChooser,
                    cards,
                    setCards,
                    difficulty,
                    setNewClass
                  )
                }
              >
                <option value="" disabled>
                  Please Choose...
                </option>
                <option value="Memes">Memes</option>
                <option value="Tropical">Tropical</option>
                <option value="Animes">Animes</option>
                <option value="Cars">Cars</option>
              </select>
              {cardChooser ? (
                <i className="fa-solid fa-check"></i>
              ) : (
                <i className="fa-solid fa-xmark"></i>
              )}
            </div>
          </div>

          <button
            disabled={!cardChooser || !difficulty}
            onClick={() => setGameStarted(true)}
          >
            Start Game
          </button>
        </dialog>
      ) : cards.map((item) => item.found).includes(false) ? (
        <Memory
          clickState={clickState}
          setClickState={setClickState}
          cards={cards}
          setCards={setCards}
          newClass={newClass}
          setCounter={setCounter}
          counter={counter}
          setGameStarted={setGameStarted}
          setCardChooser={setCardChooser}
          setDifficulty={setDifficulty}
          gameTime={gameTime}
          setGameTime={setGameTime}
        />
      ) : (
        <FinishedGame
          setClickState={setClickState}
          cards={cards}
          setCards={setCards}
          setCounter={setCounter}
          setGameStarted={setGameStarted}
          setCardChooser={setCardChooser}
          setDifficulty={setDifficulty}
          difficulty={difficulty}
          gameTime={gameTime}
          setGameTime={setGameTime}
        />
      )}
    </>
  );
};

export default MemoryMenu;

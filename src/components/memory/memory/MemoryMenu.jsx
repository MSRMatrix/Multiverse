import { useContext, useEffect, useState } from "react";
import { cardGameSettings } from "../memoryFunctions/cardGameSettings";
import Memory from "./Game/Memory";
import FinishedGame from "./finishedGame/FinishedGame";
import "./memoryMenu.css";
import { preloadImages } from "../memoryFunctions/preloadImages";
import { MemoryContext } from "./memoryContext/MemoryContext";
import LoadingComponent from "../../loadingComponent/LoadingComponent";

const MemoryMenu = () => {
  const [clickState, setClickState] = useState({
    firstCard: null,
    secondCard: null,
    attempts: 0,
  });
  const [counter, setCounter] = useState(0);
  const [newClass, setNewClass] = useState("");
  const {cards, setCards} = useContext(MemoryContext);
  const [difficulty, setDifficulty] = useState("");
  const [cardChooser, setCardChooser] = useState("");
  const [gameStarted, setGameStarted] = useState(false);
  const [gameTime, setGameTime] = useState({ seconds: 0, minutes: 0 });
  const [test, setTest] = useState(null);
  const [running, setRunning] = useState(true)

  useEffect(() => {

    if (difficulty && cardChooser) {
      cardGameSettings(setCards, difficulty, cardChooser, setNewClass,cards);
    }
  }, [difficulty, cardChooser]);
  
  useEffect(() => {
   if(cards.filter((item) => item.found === false).length <= 0) {
    setTimeout(() => {
      setRunning(false)
    }, 2000);
      
   }else{
    setRunning(true)
   }
  }, [cards])
  
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
                 setDifficulty(e.target.value)
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
              disabled={!difficulty}
                value={cardChooser}
                onChange={(e) =>
                  setCardChooser(e.target.value)
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
      ) : running ? (
        <Memory
          clickState={clickState}
          setClickState={setClickState}
          newClass={newClass}
          setCounter={setCounter}
          counter={counter}
          setGameStarted={setGameStarted}
          setCardChooser={setCardChooser}
          setDifficulty={setDifficulty}
          gameTime={gameTime}
          setGameTime={setGameTime}
          difficulty={difficulty}
          test={test}
          setTest={setTest}
        />
      ) : (
        <FinishedGame
          setClickState={setClickState}
          setCounter={setCounter}
          setGameStarted={setGameStarted}
          setCardChooser={setCardChooser}
          setDifficulty={setDifficulty}
          difficulty={difficulty}
          gameTime={gameTime}
          setGameTime={setGameTime}
          cardChooser={cardChooser}
          setNewClass={setNewClass}
          setTest={setTest}
        />
      )}
    </>
  );
};

export default MemoryMenu;

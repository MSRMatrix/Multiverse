import { NavLink } from "react-router";
import { cardTheme } from "./memoryFunctions/cardTheme";
import { changeDifficulty } from "./memoryFunctions/changeDifficulty";
import { newGame } from "./memoryFunctions/newGame";
import { useState } from "react";
import Memory from "./Memory";

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

  return (
    <>
      {!gameStarted ? (
        <dialog open>
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
            <option value="" disabled>Please Choose...</option>
            <option value="Easy">Easy</option>
            <option value="Normal">Normal</option>
            <option value="Hard">Hard</option>
            <option value="Expert">Expert</option>
          </select>

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
                setDifficulty,
                setNewClass
              )
            }
          >
             <option value="" disabled>Please Choose...</option>
            <option value="Memes">Memes</option>
            <option value="Tropical">Tropical</option>
            <option value="Animes">Animes</option>
            <option value="Cars">Cars</option>
          </select>
          <button disabled={!cardChooser || !difficulty} onClick={() => setGameStarted(true)}>Start Game</button>
        </dialog>
      ) : (
        <Memory
          clickState={clickState}
          setClickState={setClickState}
          cards={cards}
          setCards={setCards}
          newClass={newClass}
          setCounter={setCounter}
          counter={counter}
          setGameStarted={setGameStarted}
        />
      )}
    </>
  );
};

export default MemoryMenu;

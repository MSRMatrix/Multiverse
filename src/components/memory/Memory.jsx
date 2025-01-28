import sample from "./cards/sample.png";
import questionMark from "./cards/question-mark.png";
import test from "./cards/test.png";
import { useState } from "react";
import "./memory.css";
import { clickPicture } from "./memoryFunctions/clickPicture";
import { newGame } from "./memoryFunctions/newGame";
import { cardTheme } from "./memoryFunctions/cardTheme";
import { changeDifficulty } from "./memoryFunctions/changeDifficulty";

const Memory = () => {
  const [clickState, setClickState] = useState({
    firstCard: null,
    secondCard: null,
    attempts: 0,
  });
  const [difficulty, setDifficulty] = useState("Normal");
  const [cardChooser, setCardChooser] = useState("" || "Memes");
  const [counter, setCounter] = useState(0)

//   Muss noch entfernt und ausgetauscht werden
  const [cards, setCards] = useState([
    { id: 1, name: "Card 1", image: sample, revealed: false, found: false },
    { id: 3, name: "Card 3", image: sample, revealed: false, found: false },
    { id: 4, name: "Card 4", image: test, revealed: false, found: false },
    { id: 6, name: "Card 6", image: test, revealed: false, found: false },
  ]);
  //   Muss noch entfernt und ausgetauscht werdenk

  return (
    <div className="memory">
        <p>attempts: {counter}</p>
      <button onClick={() => newGame(setClickState, cards, setCards, setCounter)}>
        New Game
      </button>
      <select
        value={difficulty}
        onChange={(e) => changeDifficulty(e, cards, setCards, difficulty, cardChooser, setDifficulty, setCardChooser)}
      >
        <option value="Easy">Easy</option>
        <option value="Normal">Normal</option>
        <option value="Hard">Hard</option>
        <option value="Expert">Expert</option>
      </select>

      <select
        value={cardChooser}
        onChange={(e) => cardTheme(e, cardChooser, setCardChooser, cards, setCards, difficulty, setDifficulty)}
      >
        <option value="Memes">Memes</option>
        <option value="Tropical">Tropical</option>
        <option value="Animes">Animes</option>
        <option value="Cars">Cars</option>
      </select>

      <div className="cards-container">
        {cards.map((item) => (
          <img
            key={item.id}
            onClick={(e) =>
              clickPicture(e, item, cards, setCards, clickState, setClickState, setCounter, counter)
            }
            src={item.revealed ? item.image : questionMark}
            alt="Memory card"
          />
        ))}
      </div>
    </div>
  );
};

export default Memory;

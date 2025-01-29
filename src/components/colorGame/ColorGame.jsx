import { useState } from "react";
import "./colorGame.css";
import { generateColors } from "./colorFunctions/generateColors";
import { pickColor } from "./colorFunctions/pickColor";
import { resetColors } from "./colorFunctions/resetColors";
import { handleDifficultyChange } from "./colorFunctions/handleDifficutlyChange";

const ColorGame = () => {
  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState("");
  const [difficulty, setDifficulty] = useState("Normal");
  const [colors, setColors] = useState(generateColors(difficulty));
  const [colorToWin, setColorToWin] = useState(
    colors[Math.floor(Math.random() * colors.length)].color
  );


  function difficultyEmoji(difficulty){
    if (difficulty === "Easy") {
        return <i className="fa-regular fa-face-laugh-beam"></i>
      }
      if (difficulty === "Normal") {
        return <i className="fa-regular fa-face-smile-beam"></i>
      }
      if (difficulty === "Hard") {
        return <i className="fa-regular fa-face-meh"></i>
      }
      if (difficulty === "Expert") {
        return <i className="fa-regular fa-face-frown"></i>
      }
  }

  return (
    <div className="color-game">
        <div className="color-header">
      <h1>Color Game</h1>
      <button onClick={() => resetColors(difficulty, setMessage, setCounter, setColorToWin, setColors)}>New Game</button>
      <select value={difficulty} onChange={(e) => handleDifficultyChange(e, setMessage, setCounter, setColorToWin, setColors, setDifficulty)}>
        <option value="Easy">Easy</option>
        <option value="Normal">Normal</option>
        <option value="Hard">Hard</option>
        <option value="Expert">Expert</option>
        
      </select>{difficultyEmoji(difficulty)}
      {!message ? (
        <h2>
          Can you guess which color is: <strong>{colorToWin}</strong>?
        </h2>
      ) : (
        ""
      )}
      <h1>{message || `${Math.ceil(colors.length / 2 - counter)} attempts remaining!`}</h1> 
      </div>
      <ul>
        {colors.map((item, index) => (
          <li
            key={index}
            className={item.isWrong ? "wrong" : ""}
            style={{ background: item.color, cursor: message === "You lose!" || item.color === "rgba(0, 0, 0, 0)"  ? "not-allowed" : "pointer"}}
            onClick={(e) => pickColor(e.target.style.background, counter, colors, message, colorToWin, setColors, setMessage, setCounter)}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default ColorGame;
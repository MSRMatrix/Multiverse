import { NavLink, useNavigate } from "react-router";
import questionMark from "../../cards/question-mark.png";
import "./memory.css";
import { clickPicture } from "../../memoryFunctions/clickPicture";
import { useContext, useEffect, useState } from "react";
import { MemoryContext } from "../memoryContext/MemoryContext";
const Memory = ({
  clickState,
  setClickState,
  newClass,
  setCounter,
  counter,
  setGameStarted,
  setCardChooser,
  setDifficulty,
  gameTime,
  setGameTime,
  difficulty,
  test
}) => {
  const {cards, setCards} = useContext(MemoryContext);
  const navigate = useNavigate()
  const [flipped, setFlipped] = useState({
    classname: "",
    firstId: "",
    secondId: ""
  })
  
  useEffect(() => {
    const interval = setInterval(() => {
      setGameTime((prevTime) => {
        let newSeconds = prevTime.seconds + 1;
        let newMinutes = prevTime.minutes;

        if (newSeconds >= 60) {
          newSeconds = 0;
          newMinutes += 1;
        }

        return { seconds: newSeconds, minutes: newMinutes };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  
  
  return (
    <>
      <div className="memory">
        <div className="memory-top">
          <i onClick={() => {
              setGameStarted(false),
                setCounter(0),
                setCards([]),
                setCardChooser(""),
                setDifficulty(""),
                setGameTime({
                  seconds: 0,
                  minutes: 0,
                },navigate("/memory"));
            }} className="fa-regular fa-rectangle-xmark back-xmark"></i>
        <div className="attempts-difficulty-timer"> 
          <p>attempts: {counter}</p>
          <p>{difficulty}</p>
          <p>
            Time:{" "}
            {gameTime.minutes < 10 ? `0${gameTime.minutes}` : gameTime.minutes}:
            {gameTime.seconds >= 10 ? gameTime.seconds : `0${gameTime.seconds}`}
          </p>
          </div> 
        </div>

        <div className={`cards-container ${newClass}`}>
          {cards.map((item) => (
            <div className="card-wrapper" key={item.id}>
            <img
              className={
                flipped.firstId === item.id || flipped.secondId === item.id || item.found
                  ? flipped.classname
                  : ""
              }
              style={{
                cursor:
                  item.revealed || (clickState.firstCard && clickState.secondCard)
                    ? "default"
                    : "",
              }}
              onClick={(e) =>
                clickPicture(
                  e,
                  item,
                  cards,
                  setCards,
                  clickState,
                  setClickState,
                  setCounter,
                  counter,
                  flipped,
                  setFlipped
                )
              }
              src={questionMark}
              alt="Memory card"
            />
            {test.find((pic) => Number(pic.key) === item.id) ?? null}
          </div>
          
          ))}
        </div>
      </div>
    </>
  );
};

export default Memory;

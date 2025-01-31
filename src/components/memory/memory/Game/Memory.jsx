import { NavLink } from "react-router";
import questionMark from "../../cards/question-mark.png";
import "./memory.css";
import { clickPicture } from "../../memoryFunctions/clickPicture";
import { useEffect } from "react";
const Memory = ({
  clickState,
  setClickState,
  cards,
  setCards,
  newClass,
  setCounter,
  counter,
  setGameStarted,
  setCardChooser,
  setDifficulty,
  gameTime,
  setGameTime,
}) => {
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
        <NavLink
          onClick={() => {
            setGameStarted(false),
              setCounter(0),
              setCards([]),
              setCardChooser(""),
              setDifficulty(""),
              setGameTime({
                seconds: 0,
                minutes: 0,
              });
          }}
          to="/memory"
        >
          Back
        </NavLink>
        <p>attempts: {counter}</p>
        <p>
          Time: {gameTime.minutes <= 10 ? `0${gameTime.minutes}`: gameTime.minutes}:
          {gameTime.seconds >= 10 ? gameTime.seconds : `0${gameTime.seconds}`}
        </p>
        <div className={`cards-container ${newClass}`}>
          {cards.map((item) => (
            <div className="card-wrapper" key={item.id}>
              <img
                onClick={(e) =>
                  clickPicture(
                    e,
                    item,
                    cards,
                    setCards,
                    clickState,
                    setClickState,
                    setCounter,
                    counter
                  )
                }
                src={item.revealed ? item.image : questionMark}
                alt="Memory card"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Memory;

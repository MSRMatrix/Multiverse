import { NavLink } from "react-router";
import questionMark from "./cards/question-mark.png";
import "./memory.css";
import { clickPicture } from "./memoryFunctions/clickPicture";

const Memory = ({
  clickState,
  setClickState,
  cards,
  setCards,
  newClass,
  setCounter,
  counter,
  setGameStarted,
}) => {
  return (
    <>
      <div className="memory">
        
        <NavLink onClick={() =>{ setGameStarted(false), setCounter(0)}} to="/memory">
          Back
        </NavLink>
        <p>attempts: {counter}</p>
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

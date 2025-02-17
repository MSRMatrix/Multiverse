import { useRef } from "react";
import { handleDown } from "../jumpAndRunFunctions/handleDown";
import { handleUp } from "../jumpAndRunFunctions/handleUp";
import "./gameControll.css";

const GameControll = ({
  setKey,
  setUpDown,
  setJumpCooldown,
  controll,
  jumpCooldown,
  setLeftRight,
  upDown
}) => {
  const intervalRef = useRef(null);

  function startHolding(e) {
    const event = { value: e.key, key: e.value };

    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        handleDown(event, controll, setKey, jumpCooldown, setUpDown, setJumpCooldown, upDown, setLeftRight);
      }, 100); // Wiederholt sich alle 100ms
    }
  }

  function stopHolding() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    handleUp(setKey, setUpDown, setJumpCooldown);
  }

  return (
    <div className="your-controll">

    {controll
      .filter((item) => item.key === "jump")
      .map((item, key) => (
        <button
          className="key"
          key={key}
          onMouseDown={() => startHolding(item)}
          onMouseUp={stopHolding}
          onMouseLeave={stopHolding}
          onTouchStart={() => startHolding(item)}
          onTouchEnd={stopHolding}
          onContextMenu={(e) => e.preventDefault()}
        >
          {item.value}
        </button>
      ))}

    <div  className="left-down-right">
      {controll
        .filter((item) => item.key !== "jump")
        .map((item, key) => (
          <button
            className="key"
            key={key}
            onMouseDown={() => startHolding(item)}
            onMouseUp={stopHolding}
            onMouseLeave={stopHolding}
            onTouchStart={() => startHolding(item)}
            onTouchEnd={stopHolding}
            onContextMenu={(e) => e.preventDefault()}
          >
            {item.value}
          </button>
        ))}
    </div>
  </div>
  
  );
};

export default GameControll;

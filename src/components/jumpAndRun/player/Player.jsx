import { useEffect, useRef } from "react";
import { handleDown } from "../jumpAndRunFunctions/handleDown";
import { handleUp } from "../jumpAndRunFunctions/handleUp";

const Player = ({ upDown, leftRight, setKey, setUpDown, setJumpCooldown, controll, jumpCooldown, setLeftRight }) => {
  const intervalRef = useRef(null);

  useEffect(() => {
    const startHolding = (e) => {
      if (!intervalRef.current) {
        intervalRef.current = setInterval(() => {
          handleDown(e, controll, setKey, jumpCooldown, setUpDown, setJumpCooldown, upDown, setLeftRight);
        }, 100);
      }
    };

    const stopHolding = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      handleUp(setKey, setUpDown, setJumpCooldown);
    };

    window.addEventListener("keydown", startHolding);
    window.addEventListener("keyup", stopHolding);

    return () => {
      window.removeEventListener("keydown", startHolding);
      window.removeEventListener("keyup", stopHolding);
    };
  }, [controll, setKey, jumpCooldown, setUpDown, setJumpCooldown, upDown, setLeftRight]);

  return (
    <div
      className="player"
      style={{
        transform: `translateY(${upDown}px) translateX(${leftRight}px)`,
      }}
    ></div>
  );
};

export default Player;

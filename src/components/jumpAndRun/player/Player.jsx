import { useEffect, useRef } from "react";
import { handleDown } from "../jumpAndRunFunctions/handleDown";
import { handleUp } from "../jumpAndRunFunctions/handleUp";
import "./player.css";

const Player = ({ upDown, leftRight, setKey, setUpDown, setJumpCooldown, controll, jumpCooldown, setLeftRight }) => {
  const intervalRef = useRef(null);
  const scannerRef = useRef(null); 

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

  useEffect(() => {
    if (scannerRef.current) {
      const watcher = scannerRef.current;
      const rect = watcher.getBoundingClientRect();
  
      const scanPositions = [
        { x: rect.x, y: rect.y }, 
        { x: rect.x + rect.width, y: rect.y }, 
        { x: rect.x, y: rect.y + rect.height },
        { x: rect.x + rect.width, y: rect.y + rect.height }, 
        { x: rect.x + rect.width / 2, y: rect.y + rect.height / 2 },
      ];
  
      let elementsBehind = [];
      scanPositions.forEach(({ x, y }) => {
        const elements = document.elementsFromPoint(x, y);
        elementsBehind = [
          ...elementsBehind,
          ...elements.filter(
            (element) => element !== watcher && element.classList.contains("obstacle")
          ),
        ];
      });
  console.log(elementsBehind);
  
      if (elementsBehind.length > 0) {
        console.log("Es gibt ein Hindernis hinter dem watcher!");
      } else {
        console.log("Kein Hindernis hinter dem watcher.");
      }
    }
  }, [upDown, leftRight]);  
  
  

  return (
    <div className="player-container">
      <div ref={scannerRef}
        className="player-watcher"
        style={{
          transform: `translateY(${upDown}px) translateX(${leftRight}px)`,
        }}
      >
        <div className="player">
        </div>
      </div>
    </div>
  );
};

export default Player;

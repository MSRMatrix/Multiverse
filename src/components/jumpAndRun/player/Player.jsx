import { useEffect, useRef } from "react";
import { handleDown } from "../jumpAndRunFunctions/handleDown";
import { handleUp } from "../jumpAndRunFunctions/handleUp";

const Player = ({upDown, leftRight, setKey, setUpDown, setJumpCooldown, controll, jumpCooldown,setLeftRight }) => {
    const focusPlayer = useRef(null)

  useEffect(() => {
    if (focusPlayer?.current) {
       focusPlayer.current.focus();
    }
  }, [focusPlayer]);


    return(
        <div
        ref={focusPlayer}
          className="player"
          style={{
            transform: `translateY(${upDown}px) translateX(${leftRight}px)`,
          }}
          tabIndex="0"
          onKeyDown={(e) => handleDown(e, controll, setKey, jumpCooldown, setUpDown, setJumpCooldown, upDown, setLeftRight)}
          onKeyUp={() => handleUp(setKey, setUpDown, setJumpCooldown)}
        ></div>
    )
}

export default Player;
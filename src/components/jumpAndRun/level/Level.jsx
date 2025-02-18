import "./level.css";
import Player from "../player/Player";
import GameControll from "../gameControll/GameControll";

const Level = ({
  upDown,
  leftRight,
  setKey,
  setUpDown,
  setJumpCooldown,
  controll,
  jumpCooldown,
  setLeftRight,
}) => {
  
  return (
    <>
      <div className="level-1">
        <Player
          upDown={upDown}
          leftRight={leftRight}
          setKey={setKey}
          setUpDown={setUpDown}
          setJumpCooldown={setJumpCooldown}
          controll={controll}
          jumpCooldown={jumpCooldown}
          setLeftRight={setLeftRight}
        />
        <div className="obstacle"></div>
      </div>
      {localStorage.getItem("digitalKeyboard") === "true" ? <GameControll 
          setKey={setKey}
          setUpDown={setUpDown}
          setJumpCooldown={setJumpCooldown}
          controll={controll}
          jumpCooldown={jumpCooldown}
          setLeftRight={setLeftRight}
          upDown={upDown}/> : ""}
      
    </>
  );
};

export default Level;
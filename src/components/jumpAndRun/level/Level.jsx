import "./level.css";
import Player from "../player/Player";

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
      </div>
    </>
  );
};

export default Level;
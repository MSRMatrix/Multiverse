import { useState } from "react";
import Level from "./level/Level";
import { controllConfig } from "./jumpAndRunFunctions/controllConfig";
import GameSettingsJNR from "./gameSettingsJNR/GameSettingsJNR";

const JumpAndRun = () => {
  const [jumpCooldown, setJumpCooldown] = useState(false);
  const [controll, setControll] = useState(controllConfig);
  const [isOpen, setIsOpen] = useState(false);
  const [keyName, setKeyName] = useState("");
  const [upDown, setUpDown] = useState(0);
  const [leftRight, setLeftRight] = useState(0);
  const [key, setKey] = useState("");
  const [openState, setOpenState] = useState("");
  return (
    <div>
      <ul>
        <li onClick={() => setOpenState("play")}>Play</li>
        <li onClick={() => setOpenState("settings")}>Game settigs</li>
      </ul>
      {openState === "play" ? (
        <Level
          setKey={setKey}
          setUpDown={setUpDown}
          setJumpCooldown={setJumpCooldown}
          controll={controll}
          jumpCooldown={jumpCooldown}
          setLeftRight={setLeftRight}
          upDown={upDown}
          leftRight={leftRight}
        />
      ) : (
        ""
      )}

      {openState === "settings" ? (
        <GameSettingsJNR
          controll={controll}
          key={key}
          isOpen={isOpen}
          keyName={keyName}
          setIsOpen={setIsOpen}
          setKeyName={setKeyName}
          setControll={setControll}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default JumpAndRun;

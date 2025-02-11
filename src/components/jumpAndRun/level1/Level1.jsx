import { useState } from "react";
import "./level1.css";
import ControllWindow from "../controllWindow/ControllWindow";
import { controllConfig } from "../jumpAndRunFunctions/controllConfig";

const Level1 = () => {
  const [key, setKey] = useState("");
  const [upDown, setUpDown] = useState(0);
  const [leftRight, setLeftRight] = useState(0);
  const [jumpCooldown, setJumpCooldown] = useState(false);
  const [controll, setControll] = useState(controllConfig);
  const [isOpen, setIsOpen] = useState(false);
  const [keyName, setKeyName] = useState("");

  const handleDown = (event) => {
    if (event.code === "ArrowDown" || controll.filter((item) => item.value === event.code).length <= 0) return;
    
    setKey(event.code);
    
    const jump = controll.find((item) => item.key === "jump" && item.value === event.code);
    const down = controll.find((item) => item.key === "down" && item.value === event.code);
    const left = controll.find((item) => item.key === "left" && item.value === event.code);
    const right = controll.find((item) => item.key === "right" && item.value === event.code);

    if (jump && !jumpCooldown) {
        setUpDown(-100);
        setJumpCooldown(true);
        console.log("Up-down:", upDown);

        setTimeout(() => {
            handleUp();
        }, 500);
    }

    if (left) {
        setLeftRight(prev => prev - 10);
    }

    if (right) {
        setLeftRight(prev => prev + 10);
    }
};

  const handleUp = () => {
    setKey("");
    setUpDown(0);
    setTimeout(() => {
      setJumpCooldown(false);
    }, 200);
  };

  function openDialog(event, data) {
    console.log(event.target.textContent);
    setKeyName(data.key);
    setIsOpen(true);
  }

  return (
    <>
      <div className="controll">
        <h2>Controll</h2>
        {controll.map((item, key) => (
          <fieldset key={key}>
            <legend>{item.key}</legend>
            <button
              name={item.key}
              onClick={(event) => openDialog(event, item)}
            >
              {item.value}
            </button>
            {isOpen && keyName === item.key ? (
              <ControllWindow
                data={item}
                controll={controll}
                setIsOpen={setIsOpen}
                setKeyName={setKeyName}
                setControll={setControll}
              />
            ) : (
              ""
            )}
          </fieldset>
        ))}
      </div>
      <p>Pressed Key: {key}</p>
      <div className="level-1">
        <div
          className="player"
          style={{
            transform: `translateY(${upDown}px) translateX(${leftRight}px)`,
          }}
          tabIndex="0"
          onKeyDown={handleDown}
          onKeyUp={handleUp}
        ></div>
      </div> 
    </>
  );
};

export default Level1;
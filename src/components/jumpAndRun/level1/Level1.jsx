import { useState } from "react";
import "./level1.css"

const Level1 = () => {

const [key, setKey] = useState("");
  const [upDown, setUpDown] = useState(0); 
  const [leftRight, setLeftRight] = useState(0); 
  const [jumpCooldown, setJumpCooldown] = useState(false)

  const handleDown = (event) => {
    setKey(event.code);
    console.log(leftRight >= 200);
    
    if (event.code === "ArrowDown" && upDown > -200) {
         setUpDown(100);
         setJumpCooldown(true)
    } else if (event.code === "ArrowUp" && upDown < 200) {
         setUpDown(-100); 
         setJumpCooldown(true)
    }
    if(event.code === "ArrowLeft" && leftRight > -400){
      setLeftRight(leftRight - 20); 
     
    }
    if(event.code === "ArrowRight" && leftRight < 400){
         setLeftRight(leftRight + 20); 
        
    }
  };

  const handleUp = () => {
    setKey("");
    setUpDown(0)
    setTimeout(() => {
      setJumpCooldown(false)  
    }, 1000);
    
  };

console.log(leftRight);


    return(
        <><p>Pressed Key: {key}</p>
      <div className="level-1">
      <div
        className="player"
        style={{ 
          transform: `translateY(${upDown}px) translateX(${leftRight}px)`, 
        }}
        tabIndex="0" 
        onKeyDown={!jumpCooldown ? handleDown : handleUp}
        onKeyUp={handleUp}
      >
      </div>
      
      </div>
    </>
    )
}

export default Level1;
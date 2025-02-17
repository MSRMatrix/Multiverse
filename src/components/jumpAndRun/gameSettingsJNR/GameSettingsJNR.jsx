import KeyboardComponent from "../keyboardComponent/KeyboardComponent";
import { openDialog } from "../jumpAndRunFunctions/openDialog";
import ControllWindow from "../controllWindow/ControllWindow";
import { useState } from "react";

const GameSettingsJNR = ({controll, key, isOpen, keyName, setIsOpen, setKeyName, setControll}) => {
  const [itemToData, setItemToData] = useState("")
  const [digitalKey, setDigitalKey] = useState(localStorage.getItem("digitalKeyboard") === "false" ? false : true)
  if(!localStorage.getItem("digitalKeyboard")){
    localStorage.setItem("digitalKeyboard", false)
  }
  

  function digitalKeyboard(){
    setDigitalKey((prevMode) => !prevMode)
    if(localStorage.getItem("digitalKeyboard") === "false"){
      localStorage.setItem("digitalKeyboard", true)
    }else{
      localStorage.setItem("digitalKeyboard", false)
    }
  }
  
  
    return(
    
    <>
    <div className="controll">
        <h2>Controll</h2>
        
        <div>
          <p>Digital Keyboard: {digitalKey ? "Enabled" : "Disabled"}</p>
        <input type="checkbox" checked={digitalKey} onChange={() => digitalKeyboard()}/>  
        </div>
        
        <p>Pressed Key: {key}</p>
        {controll.map((item, key) => (
          <fieldset key={key}>
            <legend>{item.key}</legend>
            <button
              name={item.key}
              onClick={(event) => {setItemToData(item), openDialog(event, item, setKeyName, setIsOpen)}}
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
    
   <KeyboardComponent data={itemToData} controll={controll} setKeyName={setKeyName} setControll={setControll} isOpen={isOpen}/>
    </>
    
)
}


export default GameSettingsJNR;
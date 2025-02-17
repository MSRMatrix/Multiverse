import Keyboard from "react-simple-keyboard";
import "./keyboardComponent.css"
import "react-simple-keyboard/build/css/index.css";
import { changeKey } from "../jumpAndRunFunctions/changeKey";

const KeyboardComponent = ({data, controll, setKeyName, setControll, isOpen}) => {
    function keyFromDigitalKeyboard(e){
      if(!isOpen){
        return
      }
        const event ={
            key: e.replace("{", "").replace("}", "")
        }
        changeKey(event, data, controll, setKeyName, setControll)
    }

    return(

        <>
        <Keyboard 

layout={{
    default: [
      "1 2 3 4 5 6 7 8 9 0 - = {backspace}",
      "q w e r t y u i o p [ ] \\",
      "a s d f g h j k l ; ' {enter}",
      "z x c v b n m , . / {shift}",
      "{controlleft} {alt} {space} {altgr} {controlright}",
      "{arrowup}",
      "{arrowleft} {arrowdown} {arrowright}"
    ],
    shift: [
      "! @ # $ % ^ & * ( ) _ + {backspace}",
      "Q W E R T Y U I O P { } |",
      "A S D F G H J K L : \" {enter}",
      "Z X C V B N M < > ? {shift}",
      "{controlleft} {alt} {space} {altgr} {controlright}",
      "{arrowup}",
      "{arrowleft} {arrowdown} {arrowright}"
    ]
  }}
  display={{
    "{backspace}": "⌫",
    "{enter}": "⏎ Enter",
    "{shift}": "⇧ Shift",
    "{controlleft}": "Ctrl",
    "{controlright}": "Ctrl",
    "{alt}": "Alt",
    "{altgr}": "AltGr",
    "{space}": "⎵ Space",
    "{arrowup}": "↑",
    "{arrowdown}": "↓",
    "{arrowleft}": "←",
    "{arrowright}": "→"
  }}
  onKeyPress={(e) => keyFromDigitalKeyboard(e, data, controll, setKeyName, setControll)}/>
        </>
    )
}

export default KeyboardComponent;
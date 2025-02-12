import KeyboardComponent from "../keyboardComponent/KeyboardComponent";
import { openDialog } from "../jumpAndRunFunctions/openDialog";
import ControllWindow from "../controllWindow/ControllWindow";

const GameSettingsJNR = ({controll, key, isOpen, keyName, setIsOpen, setKeyName, setControll}) => {
    return(
    
    <>
    <div className="controll">
        <h2>Controll</h2>
        <p>Pressed Key: {key}</p>
        {controll.map((item, key) => (
          <fieldset key={key}>
            <legend>{item.key}</legend>
            <button
              name={item.key}
              onClick={(event) => openDialog(event, item, setKeyName, setIsOpen)}
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
    
    <KeyboardComponent />
    </>
    
)
}


export default GameSettingsJNR;
import { useRef } from "react"
import { changeKey } from "../jumpAndRunFunctions/changeKey.jsx"

const ControllWindow = ({data, controll, setIsOpen, setKeyName, setControll}) => {
    const ref = useRef(null)

    function giveRightKey(e, data, controll, setKeyName, setControl){
        const event = {
            key: ""
        }
        if(e.code.toLowerCase() === "space"){
            event.key = e.code.toLowerCase()
        }else{
            event.key = e.key.toLowerCase()
        }
        changeKey(event, data, controll, setKeyName, setControll)
    }

    return(
    
    <dialog open onKeyDown={(e) => giveRightKey(e, data, controll, setKeyName, setControll)}>
        <p onClick={() => setIsOpen(false)}>X</p>
        <h3>{data.key}</h3>
        <p>Type in your Key for {data.value}</p> 
        </dialog>
        
    )
}

export default ControllWindow;
import { newGame } from "../../memoryFunctions/newGame"
import "./finishedGame.css"

const FinishedGame = ({setClickState, cards ,setCards, setCounter, setGameStarted, setCardChooser, setDifficulty}) => {
    return(
        <>
        <dialog open className="finished-game">
           
            <button onClick={() => newGame(setClickState, cards ,setCards, setCounter)}>Restart the Game</button>
            <button onClick={() => {setGameStarted(false), setCards([]), setCardChooser(""), setDifficulty("")}}>Back to the Menu</button>
          
        </dialog>
        </>
    )
}

export default FinishedGame
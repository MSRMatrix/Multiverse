import sample from "./cards/sample.png"
import questionMark from "./cards/question-mark.png"
import { useState } from "react"
import "./memory.css"

const Memory = () => {
    const [cards, setCards] = useState([
        { id: 1, name: "Card 1", image: sample, revealed: false},
    ])

    return(
        <div className="cards-container">
        {cards.map((item) => 
            <img src={item.revealed ? item.image : questionMark}/>
        )}
        </div>
    )
}

export default Memory
import { useState } from "react";
import { randomColor } from "../functions/randomColor";
import "./colorGame.css"

const ColorGame = () => {
    const [colors, setColors] = useState([
        {color: randomColor()},
        {color: randomColor()},
        {color: randomColor()},
        {color: randomColor()},
        {color: randomColor()},
        {color: randomColor()},
    ])

    const [colorToWin, setColorToWin] = useState(colors[Math.floor(Math.random() * colors.length)].color)

    console.log(colorToWin);
    

    function pickColor(e){
        const clickedColor = e.target.style.background
        console.log(clickedColor.trim());
        console.log(colorToWin);
        
        if(clickedColor !== colorToWin){
            const newColors = colors.filter((item) => item.color !== clickedColor);
            console.log(`Try Again!`);
            
             setColors(newColors)
            console.log(colors);
            
            return
        }else{
            console.log(`Nice work!`);
            
        }
    }    

    function resetColors(){
        setColors([
            {color: randomColor()},
            {color: randomColor()},
            {color: randomColor()},
            {color: randomColor()},
            {color: randomColor()},
            {color: randomColor()},
        ])
        return
    }
    
    return(
        <div className="color-game">
        <h2>Color Game</h2>
        <button onClick={resetColors}>New Game</button><button>Easy</button>
        <p></p>
        <ul onClick={(e) => pickColor(e)}>
            {colors.map((item, key) => 
               <li style={{background: item.color || "white"}} key={key}></li>
                
                
            )}
        </ul>
        </div>
    )
}

export default ColorGame;
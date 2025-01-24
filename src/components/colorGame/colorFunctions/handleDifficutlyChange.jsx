import { resetColors } from "./resetColors";

export function handleDifficultyChange(e, setMessage, setCounter, setColorToWin, setColors, setDifficulty){
    const newDifficulty = e.target.value;
    setDifficulty(newDifficulty);
    resetColors(newDifficulty, setMessage, setCounter, setColorToWin, setColors);
  }
import { generateColors } from "./generateColors";

export function resetColors(
  newDifficulty,
  setMessage,
  setCounter,
  setColorToWin,
  setColors
) {
  const newColors = generateColors(newDifficulty);
  setColors(newColors);
  setColorToWin(newColors[Math.floor(Math.random() * newColors.length)].color);
  setCounter(0);
  setMessage("");
}

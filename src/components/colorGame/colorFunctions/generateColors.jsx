import { randomColor } from "./randomColor";


export function generateColors (difficultyLevel){
    if (difficultyLevel === "Easy") {
      return Array.from({ length: 5 }, () => ({ color: randomColor() }));
    }
    if (difficultyLevel === "Normal") {
      return Array.from({ length: 10 }, () => ({ color: randomColor() }));
    }
    if (difficultyLevel === "Hard") {
      return Array.from({ length: 15 }, () => ({ color: randomColor() }));
    }
    if (difficultyLevel === "Expert") {
      return Array.from({ length: 20 }, () => ({ color: randomColor() }));
    }
  }
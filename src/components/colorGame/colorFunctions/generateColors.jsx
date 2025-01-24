import { randomColor } from "../../functions/randomColor";

export function generateColors (difficultyLevel){
    if (difficultyLevel === "Easy") {
      return Array.from({ length: 4 }, () => ({ color: randomColor() }));
    }
    if (difficultyLevel === "Normal") {
      return Array.from({ length: 6 }, () => ({ color: randomColor() }));
    }
    if (difficultyLevel === "Hard") {
      return Array.from({ length: 8 }, () => ({ color: randomColor() }));
    }
    if (difficultyLevel === "Expert") {
      return Array.from({ length: 12 }, () => ({ color: randomColor() }));
    }
  }
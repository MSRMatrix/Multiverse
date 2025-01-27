export function changeDifficulty(e, setDifficulty, difficulty) {
  setDifficulty(e.target.value);
  if (difficulty === "Easy") {
  return  console.log(`Easy`);
  }
  if (difficulty === "Normal") {
    return  console.log(`Normal`);
  }
  if (difficulty === "Hard") {
    console.log(`Hard`);
  }
  if (difficulty === "Expert") {
    return  console.log(`Expert`);
  }
}

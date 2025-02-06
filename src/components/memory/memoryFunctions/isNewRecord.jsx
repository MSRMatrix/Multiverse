export function isNewRecord(record, difficulty, gameTime, setRecord){
    if (record === null) {
    localStorage.setItem(difficulty, `${gameTime.minutes}:${gameTime.seconds}`);
  }


  if (record) {
    const minutes = localStorage.getItem(difficulty).split(":")[0];
    const seconds = localStorage.getItem(difficulty).split(":")[1];
    if (minutes > gameTime.minutes) {
      return localStorage.setItem(
        difficulty,
        `${gameTime.minutes}:${gameTime.seconds}`
      );
    }

    if (Number(seconds) > gameTime.seconds) {
      localStorage.setItem(difficulty, `${minutes}:${gameTime.seconds}`);
      return setRecord(localStorage.getItem(difficulty));
    }
  }

  } 
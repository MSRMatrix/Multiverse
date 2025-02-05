export function newGame(setClickState, cards ,setCards, setCounter) {
  setCounter(0)
    setClickState({
      firstCard: null,
      secondCard: null,
      attempts: 0,
    })
  }

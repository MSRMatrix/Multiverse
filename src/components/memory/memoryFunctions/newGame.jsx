export function newGame(setClickState, cards ,setCards, setCounter) {
  setCounter(0)
    setClickState({
      firstCard: null,
      secondCard: null,
      attempts: 0,
    }),
      setCards(
        cards.map((card) => ({ ...card, revealed: false, found: false }))
      );
  }

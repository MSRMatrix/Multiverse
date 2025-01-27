export function resetClickState(setClickState, clickState) {
    setClickState({
      firstCard: null,
      secondCard: null,
      attempts: clickState.attempts + 1,
    });
  };
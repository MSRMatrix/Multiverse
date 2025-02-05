import { resetClickState } from "./resetClickState";

export function clickPicture(
  e,
  clickedCard,
  cards,
  setCards,
  clickState,
  setClickState,
  setCounter,
  counter,
  flipped,
  setFlipped
) {
  if (clickedCard.revealed || clickedCard.found) return;
  if (clickState.firstCard && clickState.secondCard) return;

  const updatedCards = cards.map((card) =>
    card.id === clickedCard.id ? { ...card, revealed: true } : card
  );
  setCards(updatedCards);

  if (!clickState.firstCard) {
    setClickState({ ...clickState, firstCard: clickedCard });
    flipped.firstId = clickedCard.id
    flipped.classname = "flipped"
    
  } else if (!clickState.secondCard) {
    setClickState({ ...clickState, secondCard: clickedCard });
    flipped.secondId = clickedCard.id

    if (clickState.firstCard.image === clickedCard.image) {
      setCounter(counter + 1);
      setCards((prevCards) =>
        prevCards.map((card) =>
          card.image === clickedCard.image
            ? { ...card, found: true, revealed: true }
            : card
        )
      );
      resetClickState(setClickState, clickState);
      setTimeout(() => {
       flipped.firstId = "";
      flipped.secondId = "" 
      }, 1000);
      
    } else {
      setCounter(counter + 1);
      setTimeout(() => {
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.found ? card : { ...card, revealed: false }
          )
        );
        resetClickState(setClickState, clickState);
        
flipped.firstId = "";
        flipped.secondId = "";
      }, 1500);
        

    }
  }
}

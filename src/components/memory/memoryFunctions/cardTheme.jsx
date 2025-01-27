// Memes
import joey from "../cards/memes/joey.jpg";
import futurama from "../cards/memes/futurama-Fry.jpg";
import attackOnTitan from "../cards/memes//attack-on-titan.jpg";
import mr_bean from "../cards/memes/mr.bean.jpg";
import president_poo from "../cards/memes/president-poo.jpg";
import spongebob from "../cards/memes/spongebob.jpg";
import jesus from "../cards/memes/jesus.jpg";
// Memes

// Tropical
// Tropical

// Animes
// Animes

// Cars
// Cars

// Neue Karten noch nötig

export function cardTheme(
  e,
  cardChooser,
  setCardChooser,
  cards,
  setCards,
  difficulty
) {
  setCardChooser(e.target.value);
  if (cardChooser === "Memes") {
    const newCardDeck = [
      joey,
      futurama,
      attackOnTitan,
      mr_bean,
      president_poo,
      spongebob,
      jesus,
    ];
    changeDifficulty(cards, setCards, difficulty, newCardDeck);
    return console.log(`Memes`);
  }
  if (cardChooser === "Tropical") {
    changeDifficulty(cards, setCards, difficulty);
    return console.log(`Tropical`);
  }
  if (cardChooser === "Animes") {
    changeDifficulty(cards, setCards, difficulty);
    return console.log(`Animes`);
  }
  if (cardChooser === "Cars") {
    changeDifficulty(cards, setCards, difficulty);
    return console.log(`Cars`);
  }
}

function cardNumberFunction(difficulty) {
    switch (difficulty) {
      case "Easy":
        return 5;
      case "Normal":
        return 10;
      case "Hard":
        return 15;
      case "Expert":
        return 20;
      default:
        console.log(`No difficulty choosed!`);
        return 5;
    }
  }
  
  function changeDifficulty(difficulty, newCardDeck, cards, setCards) {
    const cardNumber = cardNumberFunction(difficulty);
  
    // Sicherstellen, dass nur einzigartige Bilder ausgewählt werden
    const uniqueImages = [...new Set(newCardDeck)];
  
    // Zufällig  die gewünschte Anzahl an Bildern auswählen
    const selectedImages = uniqueImages
      .sort(() => Math.random() - 0.5) // Mischen
      .slice(0, cardNumber); // Anzahl der Karten auswählen
  
    // Verdoppeln der Karten für Paare
    const pairedCards = [...selectedImages, ...selectedImages];
  
    // Zufällig mischen
    const shuffledCards = pairedCards.sort(() => Math.random() - 0.5);
  
    setCards(
      shuffledCards.map((item, index) => ({
        id: index + 1,
        name: `Card ${index + 1}`,
        image: item,
        revealed: false,
        found: false,
      }))
    );
  
    console.log(difficulty);  // Gibt die Schwierigkeit aus
  }
  
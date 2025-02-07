// Memes
import meme1 from "../cards/memes/joey.jpg";
import meme2 from "../cards/memes/futurama-Fry.jpg";
import meme3 from "../cards/memes/attack-on-titan.jpg";
import meme4 from "../cards/memes/mr.bean.jpg";
import meme5 from "../cards/memes/president-poo.jpg";
import meme6 from "../cards/memes/spongebob.jpg";
import meme7 from "../cards/memes/jesus.jpg";
import meme8 from "../cards/memes/angela-merkel.jpg";
import meme9 from "../cards/memes/shocked-man.jpg";
import meme10 from "../cards/memes/crying-meme-face-baby-cap.jpg";
import meme11 from "../cards/memes/Crying-Soyjak-No-PNG-758x473.jpg";
import meme12 from "../cards/memes/Dinkleberg-meme-ukx.jpg";
import meme13 from "../cards/memes/e252e41e-123b-4dbb-8f36-85d83d3ec6d2.jpeg";
import meme14 from "../cards/memes/Mocking-Spongebob-meme-1otk96.jpg";
import meme15 from "../cards/memes/One-Does-Not-Simply-meme-1bij.jpg";
import meme16 from "../cards/memes/pikachu-1.png";
import meme17 from "../cards/memes/shocked-man.jpg";
import meme18 from "../cards/memes/Steve-Harvey.jpg";
import meme19 from "../cards/memes/X-X-Everywhere-meme-1ihzfe.jpg";
import meme20 from "../cards/memes/x1080.jpeg";
// Memes

// Tropical
import tropical1 from "../cards/tropical/alev-takil-3jlUF7-3-4E-unsplash.jpg";
import tropical2 from "../cards/tropical/alex-perez-NLUkAA-nDdE-unsplash.jpg";
import tropical3 from "../cards/tropical/alex-perri-bmM_IdLd1SA-unsplash.jpg";
import tropical4 from "../cards/tropical/ali-abdul-rahman-9Itl-03hLao-unsplash.jpg";
import tropical5 from "../cards/tropical/annie-spratt-wMqPJs2x0-A-unsplash.jpg";
import tropical6 from "../cards/tropical/augustine-wong-T0BYurbDK_M-unsplash.jpg";
import tropical7 from "../cards/tropical/camilo-ayala-V9VDd-2s3aE-unsplash.jpg";
import tropical8 from "../cards/tropical/chuttersnap-u-vmeJcJ-Z4-unsplash.jpg";
import tropical9 from "../cards/tropical/dharmendra-sahu-Ia2Kjtrx8y4-unsplash.jpg";
import tropical10 from "../cards/tropical/harshil-gudka-77zGnfU_SFU-unsplash.jpg";
import tropical11 from "../cards/tropical/jamaal-cooks-sp4dq3f825M-unsplash.jpg";
import tropical12 from "../cards/tropical/joma-barleah-5C9r8gWHha4-unsplash.jpg";
import tropical13 from "../cards/tropical/linus-nylund-JP23z_-dA74-unsplash.jpg";
import tropical14 from "../cards/tropical/marc-babin-ZWRDRbPuMns-unsplash.jpg";
import tropical15 from "../cards/tropical/nattu-adnan-atSUvc1hMwk-unsplash.jpg";
import tropical16 from "../cards/tropical/roberto-nickson-5ui0tfMC5ts-unsplash.jpg";
import tropical17 from "../cards/tropical/saud-edum-5sTxCIF2qZg-unsplash.jpg";
import tropical18 from "../cards/tropical/shawn-FbTMcaMhb1Y-unsplash.jpg";
import tropical19 from "../cards/tropical/shreyas-sane-G9QPsPvw63g-unsplash.jpg";
import tropical20 from "../cards/tropical/vicko-mozara-m82uh_vamhg-unsplash.jpg";
// Tropical

// Animes
// Animes

// Cars
import cars1 from "../cards/cars/aaron-huber-8qYE6LGHW-c-unsplash.jpg"
import cars2 from "../cards/cars/alex-suprun-A53o1drQS2k-unsplash.jpg"
import cars3 from "../cards/cars/artur-aldyrkhanov-_omYGHPwGEU-unsplash.jpg"
import cars4 from "../cards/cars/campbell-3ZUsNJhi_Ik-unsplash.jpg"
import cars5 from "../cards/cars/chris-nguyen-aTX_bRaOZnA-unsplash.jpg"
import cars6 from "../cards/cars/dhiva-krishna-YApS6TjKJ9c-unsplash.jpg"
import cars7 from "../cards/cars/dima-panyukov-DwxlhTvC16Q-unsplash.jpg"
import cars8 from "../cards/cars/gian-gomez-SU6MbWxLozY-unsplash.jpg"
import cars9 from "../cards/cars/hakon-sataoen-qyfco1nfMtg-unsplash.jpg"
import cars10 from "../cards/cars/ivana-cajina-WPVtT0MEM00-unsplash.jpg"
import cars11 from "../cards/cars/jan-willem-9LMd9iiVL9Y-unsplash.jpg"
import cars12 from "../cards/cars/josh-berquist-0kxOW0I-HLM-unsplash.jpg"
import cars13 from "../cards/cars/joshua-koblin-eqW1MPinEV4-unsplash.jpg"
import cars14 from "../cards/cars/lance-asper-N9Pf2J656aQ-unsplash.jpg"
import cars15 from "../cards/cars/marc-kleen-h8UQV31X5AI-unsplash.jpg"
import cars16 from "../cards/cars/marek-pospisil-oUBjd22gF6w-unsplash.jpg"
import cars17 from "../cards/cars/roberto-nickson-IOI3KCYsn0o-unsplash.jpg"
import cars18 from "../cards/cars/roberto-nickson-Yp9FdEqaCdk-unsplash.jpg"
import cars19 from "../cards/cars/serge-kutuzov-nm_UwlzQe_Q-unsplash.jpg"
import cars20 from "../cards/cars/tyler-clemmensen-4gSavS9pe1s-unsplash.jpg"

// Cars


export function cardGameSettings(setCards, difficulty, cardChooser, setNewClass) {
  if(!cardChooser && !difficulty){
    return;
  }
  const cardNumber = cardNumberFunction(difficulty, setNewClass);
  
  const selectedImages = cutePictures(cardChooser);
  
  const uniqueImages = [...new Set(selectedImages)];

  const imagesToShow = uniqueImages
    .sort(() => Math.random() - 0.5)
    .slice(0, cardNumber); 

  const pairedCards = [...imagesToShow, ...imagesToShow];

  const shuffledCards = pairedCards.sort(() => Math.random() - 0.5);

   const newDeck = shuffledCards.map((item, index) => ({
      id: index + 1,
      name: `Card ${index + 1}`,
      image: item,
      revealed: false,
      found: false,
    }))
   setCards(newDeck) 

  return newDeck
}

export function cardNumberFunction(difficulty, setNewClass) {
  switch (difficulty) {
    case "Easy":
      setNewClass("easy-cards")
      return 3;
    case "Normal":
      setNewClass("normal-cards")
      return 6;
    case "Hard":
      setNewClass("")
      return 12;
    case "Expert":
      setNewClass("")
      return 18;
    default:
      console.log(`No difficulty choosed!`);
      return 5;
  }
}

function cutePictures(cardChooser) {
  const theme = cardChooser;
  let images = [];

  switch(theme) {
    case "Memes":
      images = [meme1, meme2, meme3, meme4, meme5, meme6, meme7, meme8, meme9, meme10, meme11, meme12, meme13, meme14, meme15, meme16, meme17, meme18, meme19, meme20];
      break;
    case "Tropical":
      images = [tropical1, tropical2, tropical3, tropical4, tropical5, tropical6, tropical7, tropical8, tropical9, tropical10, tropical11, tropical12, tropical13, tropical14, tropical15, tropical16, tropical17, tropical18, tropical19, tropical20];
      break;
    case "Animes":
      // Anime-Bilder hinzufügen
      break;
    case "Cars":
      images = [cars1, cars2, cars3, cars4, cars5, cars6, cars7, cars8, cars9, cars10, cars11, cars12, cars13, cars14, cars15, cars16, cars17, cars18, cars19, cars20];
      break;
    default:
      break;
  }

  return images;
}

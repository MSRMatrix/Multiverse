import { useNavigate } from "react-router";
import questionMark from "../../cards/question-mark.png";
import "./memory.css";
import { clickPicture } from "../../memoryFunctions/clickPicture";
import { useContext, useEffect, useState } from "react";
import { MemoryContext } from "../memoryContext/MemoryContext";
import LoadingComponent from "../../../loadingComponent/LoadingComponent";
import { preloadImages } from "../../memoryFunctions/preloadImages";

const Memory = ({
  clickState,
  setClickState,
  newClass,
  setCounter,
  counter,
  setGameStarted,
  setCardChooser,
  setDifficulty,
  gameTime,
  setGameTime,
  difficulty,
  test,
  setTest,
}) => {
  const { cards, setCards } = useContext(MemoryContext);
  const navigate = useNavigate();
  const [imagesLoaded, setImagesLoaded] = useState(false);

  
  useEffect(() => {
    if(cards.map((item) => item.found).includes(false)){
      const interval = setInterval(() => {
        setGameTime((prevTime) => {
          let newSeconds = prevTime.seconds + 1;
          let newMinutes = prevTime.minutes;

          if (newSeconds >= 60) {
            newSeconds = 0;
            newMinutes += 1;
          }

          return { seconds: newSeconds, minutes: newMinutes };
        });
      }, 1000);

      return () => clearInterval(interval);
    }
      
  }, [cards.map((item) => item.found).includes(false)]);

  useEffect(() => {
    if (cards.length > 0) {
      const imageUrls = cards.map((card) => card.image);
      preloadImages(imageUrls, cards, setImagesLoaded, setTest);
    }
  }, [cards]);
  
  if (!imagesLoaded && cards.length > 0) {
    return <LoadingComponent text={"Your game will be prepared shortly!"}/>;
  }


  // Timer und Spiel anzeigen
  return (
    <>
      <div className="memory">
        <div className="memory-top">
          <i
            onClick={() => {
              setGameStarted(false),
                setCounter(0),
                setCards([]),
                setCardChooser(""),
                setDifficulty(""),
                setGameTime({
                  seconds: 0,
                  minutes: 0,
                });
              navigate("/memory");
            }}
            className="fa-regular fa-rectangle-xmark back-xmark"
          ></i>
          <div className="attempts-difficulty-timer">
            <p>attempts: {counter}</p>
            <p>{difficulty}</p>
            <p>
              Time:{" "}
              {gameTime.minutes < 10
                ? `0${gameTime.minutes}`
                : gameTime.minutes}
              :
              {gameTime.seconds >= 10
                ? gameTime.seconds
                : `0${gameTime.seconds}`}
            </p>
          </div>
        </div>

        <div className={`cards-container ${newClass}`}>
          {cards.map((item) => (
            <div className="card-wrapper" key={item.id}>
              <section
                style={{
                  cursor:
                    item.revealed ||
                    (clickState.firstCard && clickState.secondCard)
                      ? "default"
                      : "",
                }}
                onClick={(e) =>
                  clickPicture(
                    e,
                    item,
                    cards,
                    setCards,
                    clickState,
                    setClickState,
                    setCounter,
                    counter,
                  )
                }
                src={questionMark}
                alt="Memory card"
              ></section>
              {test?.find((pic) => Number(pic.key) === item.id) ?? null}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Memory;

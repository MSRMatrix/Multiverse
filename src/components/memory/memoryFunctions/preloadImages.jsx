export function preloadImages(imageUrls, cards, setImagesLoaded, setTest) {
    let loadedCount = 0;
    let loadedImages = [];

    imageUrls.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;

        // Eindeutigen Key setzen
        const matchedCard = cards.filter((item) => item.image === src);
        const filteredId = matchedCard.map((item) => item.id);

        loadedImages.push(
          <div>
            <img
              className={
                cards.some((item) => item.revealed && item.id === filteredId[0])
                  ? "revealed-card"
                  : "memory-images"
              }
              key={filteredId[0]}
              src={src}
              alt="Preloaded"
            />
            <img
              className={
                cards.some((item) => item.revealed && item.id === filteredId[1])
                  ? "revealed-card"
                  : "memory-images"
              }
              key={filteredId[1]}
              src={src}
              alt="Preloaded"
            />
          </div>
        );

        if (loadedCount === imageUrls.length) {
          setImagesLoaded(true);
          setTest(loadedImages.map((item) => item.props.children).flat()); // Setze erst, wenn ALLE Bilder geladen sind
        }
      };
    });
  };
export function pickColor(clickedColor, counter, colors, message, colorToWin, setColors, setMessage, setCounter){
    if (counter >= colors.length || message) {
      return;
    }

    if (clickedColor === `rgba(0, 0, 0, 0)`) {
      return;
    }

    const normalizedClickedColor = clickedColor.trim().toLowerCase();
    const normalizedTargetColor = colorToWin.trim().toLowerCase();

    if (normalizedClickedColor !== normalizedTargetColor) {
      const newCounter = counter + 1;

      if (newCounter >= colors.length / 2) {
        setColors(colors.map(() => ({ color: colorToWin })));
        setMessage("You lose!");
      } else {
        console.log("Try Again!");
        const updatedColors = colors.map((item) =>
          item.color.trim().toLowerCase() === normalizedClickedColor
            ? { color: "rgba(0, 0, 0, 0)" }
            : item
        );

        setColors(updatedColors);
      }

      setCounter(newCounter);
    } else {
      console.log("Nice work!");
      setColors(colors.map(() => ({ color: colorToWin })));
      setMessage(`You win with ${counter + 1} attempts!`);
    }
  }
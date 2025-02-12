export const handleUp = (setKey, setUpDown, setJumpCooldown) => {
    setKey("");
    setUpDown(0);
    setTimeout(() => {
      setJumpCooldown(false);
    }, 200);
  };

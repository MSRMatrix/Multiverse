import { handleUp } from "./handleUp";

export const handleDown = (event, controll, setKey, jumpCooldown, setUpDown, setJumpCooldown, upDown, setLeftRight) => {    
    if (event.key.toLowerCase() === "ArrowDown" || controll.filter((item) => item.value === event.key.toLowerCase()).length <= 0) return;
    setKey(event.key.toLowerCase());
    
    const jump = controll.find((item) => item.key === "jump" && item.value === event.key.toLowerCase());
    const down = controll.find((item) => item.key === "down" && item.value === event.key.toLowerCase());
    const left = controll.find((item) => item.key === "left" && item.value === event.key.toLowerCase());
    const right = controll.find((item) => item.key === "right" && item.value === event.key.toLowerCase());

    if (jump && !jumpCooldown) {
        setUpDown(-100);
        setJumpCooldown(true);
        console.log("Up-down:", upDown);

        setTimeout(() => {
            handleUp(setKey, setUpDown, setJumpCooldown);
        }, 500);
    }

    if (left) {
        setLeftRight(prev => prev - 10);
    }

    if (right) {
        setLeftRight(prev => prev + 10);
    }
};

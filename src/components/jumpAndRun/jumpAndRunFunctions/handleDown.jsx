import { handleUp } from "./handleUp";

export const handleDown = (event, controll, setKey, jumpCooldown, setUpDown, setJumpCooldown, upDown, setLeftRight) => {
    if (event.code === "ArrowDown" || controll.filter((item) => item.value === event.code).length <= 0) return;
    
    setKey(event.code);
    
    const jump = controll.find((item) => item.key === "jump" && item.value === event.code);
    const down = controll.find((item) => item.key === "down" && item.value === event.code);
    const left = controll.find((item) => item.key === "left" && item.value === event.code);
    const right = controll.find((item) => item.key === "right" && item.value === event.code);

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

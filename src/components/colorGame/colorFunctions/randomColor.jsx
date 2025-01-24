export function randomColor() {
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));

   return `rgb(${randomBetween(0, 255)}, ${randomBetween(0, 255)}, ${randomBetween(0, 255)})`;
}

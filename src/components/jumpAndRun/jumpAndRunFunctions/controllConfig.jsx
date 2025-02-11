export function controllConfig() {
  if (!localStorage.getItem("jumpnRun")) {
    localStorage.setItem(
      "jumpnRun",
      "jump:ArrowUp:down:ArrowDown:right:ArrowRight:left:ArrowLeft"
    );
  }
  const stored = localStorage.getItem("jumpnRun");

  const items = stored.split(":");

  // Wandle das Array in ein Key-Value-Objekt um
  const pairs = [];
  for (let i = 0; i < items.length; i += 2) {
    const key = items[i].trim();
    const value = items[i + 1]?.trim(); // Sicherstellen, dass value existiert
    pairs.push({ key, value });
  }

  return pairs;
}

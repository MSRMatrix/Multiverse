export function openDialog(event, data, setKeyName, setIsOpen) {
    console.log(event.target.textContent);
    setKeyName(data.key);
    setIsOpen(true);
  }
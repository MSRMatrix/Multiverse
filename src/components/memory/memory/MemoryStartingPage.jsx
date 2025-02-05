import { useState } from "react";
import { MemoryContext } from "./memoryContext/MemoryContext";
import MemoryMenu from "./MemoryMenu";

const MemoryStartingPage = () => {
    const [cards, setCards] = useState([])
    return(<>
    <MemoryContext.Provider value={{cards, setCards}}>
    <MemoryMenu />    
    </MemoryContext.Provider>
    
    </>)
}

export default MemoryStartingPage;
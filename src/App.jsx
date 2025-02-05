import { createBrowserRouter, RouterProvider } from "react-router";
import Startsite from "./components/startsite/Startsite";
import ColorGame from "./components/colorGame/ColorGame";
import Memory from "./components/memory/memory/Game/Memory";
import MemoryMenu from "./components/memory/memory/MemoryMenu";
import MemoryStartingPage from "./components/memory/memory/MemoryStartingPage";

function App() {
  const router = createBrowserRouter([
    {
      element: <Startsite />,
      path: "/",
      children: [
        {
           element: <ColorGame />, 
          path: "/color-game" 
        },
        { element: <MemoryStartingPage />, 
          path: "/memory" ,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

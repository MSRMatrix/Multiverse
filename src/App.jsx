import { createBrowserRouter, RouterProvider } from "react-router";
import Startsite from "./components/startsite/Startsite";
import ColorGame from "./components/colorGame/ColorGame";
import MemoryStartingPage from "./components/memory/memory/MemoryStartingPage";
import JumpAndRun from "./components/jumpAndRun/JumpAndRun";
import GameSettingsJNR from "./components/jumpAndRun/gameSettingsJNR/GameSettingsJNR";

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
        {
          element: <JumpAndRun />,
          path: "/jump-and-run",
        }
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

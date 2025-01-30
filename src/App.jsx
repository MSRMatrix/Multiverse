import { createBrowserRouter, RouterProvider } from "react-router";
import Startsite from "./components/startsite/Startsite";
import ColorGame from "./components/colorGame/ColorGame";
import Memory from "./components/memory/memory/Game/Memory";
import MemoryMenu from "./components/memory/memory/MemoryMenu";

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
        { element: <MemoryMenu />, 
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

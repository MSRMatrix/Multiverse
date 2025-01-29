import { createBrowserRouter, RouterProvider } from "react-router";
import Startsite from "./components/startsite/Startsite";
import ColorGame from "./components/colorGame/ColorGame";
import Memory from "./components/memory/Memory";
import MemoryMenu from "./components/memory/MemoryMenu";

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
          children: [
            {element: <Memory />,
              path: "game"
            }
          ]
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

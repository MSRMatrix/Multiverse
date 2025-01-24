import { createBrowserRouter, RouterProvider } from "react-router";
import Startsite from "./components/startsite/Startsite";
import ColorGame from "./components/colorGame/ColorGame";
import Memory from "./components/memory/Memory";

function App() {
  const router = createBrowserRouter([
    {
      element: <Startsite />,
      path: "/",
      children: [{ element: <ColorGame />, path: "/color-game" }, { element: <Memory />, path: "/memory"}],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

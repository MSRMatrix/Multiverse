import { createBrowserRouter, RouterProvider } from "react-router";
import Startsite from "./components/startsite/Startsite";
import ColorGame from "./components/colorGame/ColorGame";

function App() {
  const router = createBrowserRouter([
    {
      element: <Startsite />,
      path: "/",
      children: [{ element: <ColorGame />, path: "/color-game" }, {}],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

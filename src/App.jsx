import "./App.css";
import Homepage from "./components/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Errorpage from "./pages/Errorpage";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "about",
      element: <Aboutpage />,
    },
    {
      path: "*",
      element: <Errorpage />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
      <footer className=" text-right text-sm text-black ">No copyright website@still under construction</footer>
    </>
  );
}

export default App;

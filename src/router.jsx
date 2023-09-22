 
import { createBrowserRouter } from "react-router-dom";
import Home from './Components/HomePage/Home.jsx';
import About from './Components/About/About.jsx';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/about",
        element: <About></About>
      }
    ]
  }
]);

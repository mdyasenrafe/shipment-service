import { RouterProvider, createBrowserRouter } from "react-router-dom";
import logo from "./logo.svg";
import Booking from "./pages/Booking";
import Home from "./pages/Home";
import Shiping from "./pages/Shiping";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/booking",
    element: <Booking />,
  },
  {
    path: "/shipping-details",
    element: <Shiping />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

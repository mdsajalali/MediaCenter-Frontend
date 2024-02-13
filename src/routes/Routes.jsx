import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddProduct from "../pages/AddProduct";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyCart from "../pages/MyCart";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addProduct",
        element: <AddProduct />,
      },
      {
        path: "/myCart",
        element: <MyCart />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;

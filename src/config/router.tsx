import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "../views/Dashboard";
import Detail from "../views/Detail";
import Screen2 from "../views/Screen2";
import Screen3 from "../views/Screen3";
import Screen4 from "../views/Screen4";
import Signup from "../views/SignUp";
import Login from "../views/Login";
import AddProduct from "../views/AddProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/screen2",
    element: <Screen2 />,
  },
  {
    path: "/screen3",
    element: <Screen3 />,
  },
  {
    path: "/screen4",
    element: <Screen4 />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/add-Product",
    element: <AddProduct />,
  },
  {
    path: "/detail/:id",
    element: <Detail />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import Dashboard from "../views/Dashboard";
import Detail from "../views/Detail";
import Screen2 from "../views/Screen2";
import Screen3 from "../views/Screen3";
import Screen4 from "../views/Screen4";
import Signup from "../views/SignUp";
import Login from "../views/Login";
import AddProduct from "../views/AddProduct";
import { useEffect, useState } from "react";
import { onAuthStateChanged, auth } from "../config/firebase";

const Main = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState();

  console.log("user", user);
  useEffect(() => {
    onAuthStateChanged(auth, (user: any) => {
      setUser(user);
    });
  }, []);
  useEffect(() => {
    const { pathname } = window.location;

    if (user) {
      if (pathname === "/signup" || pathname === "/login") {
        navigate("/");
      }
    } else {
      if (pathname === "/add-product") navigate("/login");
    }
  }, [window.location.pathname, user]);

  return <Outlet />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
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
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}

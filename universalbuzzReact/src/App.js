import React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ErrorPage from "./pages/error-page";
import Windowchatroom from "./pages/WindowChatroom";
import "./App.css";

const router = createBrowserRouter([{
  path: "/",
  element: <Login />,
}, {
  path: "/login",
  element: <Login />,
},{
  path: "/about",
  element: <About />,
}, {
  path: "/home",
  element: <Home />,
}, {
  path: "/register",
  element: <Register />,
}, {
  path: "/windowchatroom",
  element: <Windowchatroom />,
}, {
  path: "*",
  element: <ErrorPage />,
}]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
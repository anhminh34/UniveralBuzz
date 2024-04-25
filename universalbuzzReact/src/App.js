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
import errorpage from "./pages/error-page";
import "./App.css";

const router = createBrowserRouter([{
  path: "/",
  element: <Home />,
}, {
  path: "/about",
  element: <About />,
}, {
  path: "/login",
  element: <Login />,
}, {
  path: "/register",
  element: <Register />,
}, {
  path: "*",
  element: <error-page />,
}]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
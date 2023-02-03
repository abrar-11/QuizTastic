import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Quiz from "./Pages/Quiz";

const router = createBrowserRouter([
    {
        path: "/",
        // element: <App/>,
        element: <h1>hellow</h1>,
    },
    {
        path: "/login",
        element: <Login></Login>,
    },
    {
        path: "/register",
        element: <Register/>,
    },
    // {
    //     path: "/quiz",
    //     element: <Quiz/>,
    // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

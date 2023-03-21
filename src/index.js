import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import About from "./pages/About";
import Models from "./pages/Models";
import Home from "./pages/Home";
import {
    createBrowserRouter,
    RouterProvider,
    } from "react-router-dom";


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
                path: "about",
                element: <About />,
            },
            {
                path: "models",
                element: <Models />,
            }
        ]
    },
]);

const root = ReactDOM.createRoot(document.getElementById('canvas'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

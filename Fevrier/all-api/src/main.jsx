import React from 'react'
import ReactDOM from 'react-dom/client'
import RandomApp from "./random-user/RandomApp";
import Adresse from "./adresse-api/Adresse";
import Quiz from "./quiz-api/Quiz";
import ErrorPage from './error-page';
import './main.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './Root';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/Adresse',
                element: <Adresse />
            },
            {
                path: '/Quiz',
                element: <Quiz />
            },
            {
                path: '/Random-App',
                element: <RandomApp />
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)

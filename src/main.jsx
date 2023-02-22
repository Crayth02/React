import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Accueil from './accueil/accueil'
import Experience from './experience/experience'
import Portfolio from './portfolio/portfolio';
import Contact from './contact/contact';
import Root from './root';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
            path: "/accueil",
            element: <Accueil />
        },
        {
          path: "/experience",
          element: <Experience />
        },
        {
          path: "/portfolio",
          element: <Portfolio />
        },
        {
          path: "/contact",
          element: <Contact />
        },
      ],
    },
  ]);
  
  ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />    
  </React.StrictMode>,
)

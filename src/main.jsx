import React from 'react'
import ReactDOM from 'react-dom/client'

import Root from './routes/Root.jsx'
import ErrorPage from './routes/ErrorPage.jsx'
import Contacts from './routes/Contacts.jsx'
import Portfolio from './routes/Portfolio.jsx'
import About from './routes/About.jsx'

import {
  ScrollRestoration,
  createHashRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

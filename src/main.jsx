import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './mainPage/App.jsx'
import About from './aboutPage/About.jsx'
import ErrorPage from './error-page.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/portfolio",
    element: <h1>Portfolio</h1>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contact",
    element: <h1>Contact</h1>,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="principal">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)

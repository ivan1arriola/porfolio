import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './aboutPage/About.jsx';
import Contact from './contactPage/Contact.jsx';
import ErrorPage from './error-page.jsx';
import App from './mainPage/App.jsx';
import Portfolio from './portfolioPage/Portfolio.jsx';
import SiteLayout from './components/SiteLayout.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    element: <SiteLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <App /> },
      { path: '/about', element: <About /> },
      { path: '/portfolio', element: <Portfolio /> },
      { path: '/contact', element: <Contact /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

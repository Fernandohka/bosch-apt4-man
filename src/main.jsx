import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Produtos from './Produtos.jsx'
import Mapa from './Mapa.jsx'
import Api from './Api.jsx'
import Graficos from './Graficos.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/produtos",
    element: <>
      <App />
      <Produtos />
    </>,
  },
  {
    path: "/mapa",
    element: <>
      <App />
      <Mapa />
    </>,
  },
  {
    path: "/api",
    element: <>
      <App />
      <Api />
    </>,
  },
  {
    path: "/graficos",
    element: <>
      <App />
      <Graficos />
    </>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NewsContext from './Components/Context/newsContext';
import Blog from './Components/pages/Blog';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'blog/:id',
    element: <Blog />, 
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NewsContext>
      <RouterProvider router={router} />
    </NewsContext>
  </React.StrictMode>,
)

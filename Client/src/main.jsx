import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NewsContext from './Components/Context/newsContext';
import Blog from './Components/pages/Blog';
import Login from './Components/pages/Login';
import Register from './Components/pages/Register';
import AuthContext from './Components/Context/AuthContext';
import PrivetRoute from './Components/Privet/PrivetRoute';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'blog/:id',
    element: <PrivetRoute><Blog /></PrivetRoute>,
  },
  {
    path: 'login',
    element: <Login />
  },
  {
    path: 'register',
    element: <Register />
  }

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NewsContext>
      <AuthContext>
        <RouterProvider router={router} />
      </AuthContext>
    </NewsContext>
  </React.StrictMode>,
)

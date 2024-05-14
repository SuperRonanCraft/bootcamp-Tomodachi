import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Home from './pages/Home.jsx';
import Profile from './pages/Profile.jsx';
import Game from './pages/Game.jsx';
import Leaderboard from './pages/Leaderboard.jsx';
import Login from './pages/login.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Game />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/landing',
        element: <Home />,
      },
      {
        path: '/leaderboard',
        element: <Leaderboard />,
      },
      {
        path: '/login',
        element: <Login />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

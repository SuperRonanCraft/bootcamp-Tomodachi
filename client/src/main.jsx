import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Home from './pages/Home.jsx';
import Profile from './pages/Profile.jsx';
import ProfileById from './pages/ProfileById.jsx';
import Game from './pages/Game.jsx';
import Leaderboard from './pages/Leaderboard.jsx';
import Login from './pages/login.jsx';
import SignUp from './pages/SignUp.jsx';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import EmptyGame from './components/game/EmptyGame.jsx';
import AuthGuard from './components/landing/AuthGuard.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <EmptyGame />,
      },
      {
        path: '*',
        element: <Navigate to="/landing" replace />,
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
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '/profile/:userId',
        element: <ProfileById />,
      },
      {
        element: <AuthGuard />,
        children: [
          {
            path: '/play',
            element: <EmptyGame />,
          },
          {
            path: '/play/:gameId',
            element: <Game />,
          },
          {
            path: '/profile',
            element: <Profile />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

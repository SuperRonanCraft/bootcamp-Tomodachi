import { useState } from 'react';
import Home from '../../pages/Home';
import Profile from '../../pages/Profile';
import Leaderboard from '../../pages/Leaderboard';
import Game from '../../pages/Game';

export default function PageHandler() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Profile') {
      return <Profile />;
    }
    if (currentPage === 'Leaderboard') {
      return <Leaderboard />;
    } else return <Game />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <main>{renderPage()}</main>
    </div>
  );
}

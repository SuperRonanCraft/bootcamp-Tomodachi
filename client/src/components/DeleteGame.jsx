import { useState } from 'react';
import auth from '@/utils/auth';
import { DELETE_GAME_DATA } from '../utils/mutations';

export default function DeleteGame() {
  const [games, setGames] = useState([]);
  const deleteGame = (gameId) => {
    const updatedGame = games.filter((game) => game.id !== gameId);
    setGames(updatedGame);
  };
}

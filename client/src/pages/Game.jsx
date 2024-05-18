import GameProvider from '../context/GameContext';
import GameDashboard from '../components/game/GameDashboard';
import { Navigate, useParams } from 'react-router-dom';
import auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

export default function Game() {
  const { gameId } = useParams();

  //Not logged in, LEAVE HERE PEASANT
  if (!auth.loggedIn()) return <Navigate to={'/'} />;

  const user = auth.getProfile().data;
  const { loading, data } = useQuery(QUERY_USER, {
    variables: { userId: user._id },
  });

  if (loading) return <h1>Loading...</h1>;

  const userData = data.me;
  const { gameData: games } = userData;
  // console.log('Games', games);
  const game = games.find((game) => game._id === gameId);
  // console.log(game);
  if (!game) return <Navigate to={'/profile'} />;
  return (
    <GameProvider>
      <GameDashboard user={user} gameData={game} />
    </GameProvider>
  );
}

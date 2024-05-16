import { useQuery } from '@apollo/client';
import auth from '../../utils/auth';
import { QUERY_USER } from '../../utils/queries';
import GameInfo from './GameInfo';
import CreateGame from '../CreateGame';
export default function DisplayGames() {
  const { loading, data } = useQuery(QUERY_USER, {
    variables: { userId: auth.getProfile().data._id },
  });

  if (loading) return <h1>Loading...</h1>;
  const canCreate = data.me.gameData.length < 3;

  console.log('DISPLAYE!', data);
  return (
    <div className="mx-2">
      {data.me.gameData.map((game) => (
        <GameInfo className="text-center" key={game._id} {...game} />
      ))}
      {canCreate && <CreateGame />}
    </div>
  );
}

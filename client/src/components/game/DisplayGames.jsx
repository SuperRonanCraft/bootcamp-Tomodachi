import GameInfo from './GameInfo';
import CreateGame from '../CreateGame';
import auth from '../../utils/auth';
export default function DisplayGames({ user }) {
  const canCreate = user.gameData.length < 3;

  // console.log('DISPLAYE!', data);
  return (
    <div className="mx-2">
      {user.gameData.map((game) => (
        <GameInfo
          className="text-center"
          key={game._id}
          {...game}
          isSelf={user._id === auth.getProfile().data._id}
        />
      ))}
      {canCreate && auth.getProfile().data._id === user._id && <CreateGame />}
    </div>
  );
}

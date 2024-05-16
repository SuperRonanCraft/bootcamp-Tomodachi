import { getEmoji, getEmotion } from '../../lib/petStatus';
import Emoji from '../../components/game/Emoji';
import Food from './status/Food';
import Happiness from './status/Happiness';
import Energy from './status/Energy';
import { Card, CardContent, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { DELETE_GAME_DATA } from '../../utils/mutations';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import auth from '../../utils/auth';
export default function GameInfo({ _id, name, energy, food, happiness }) {
  const [deleteGameData] = useMutation(DELETE_GAME_DATA);
  function playButton() {
    console.log('Play');
    return <Link to={`/${_id}`} />;
  }

  function deleteButton() {
    console.log('Delete');
    deleteGameData({
      variables: { id: _id, userId: auth.getProfile().data._id },
    });
  }
  return (
    <Card className="w-full sm:w-2/3 mx-auto mb-2 hover:bg-violet-700">
      <CardTitle>
        <p className="mt-2 ">{name}</p>
      </CardTitle>
      <CardContent>
        <div className="grid grid-cols-4 gap-4 mx-0 sm:mx-auto">
          <div>
            <Emoji emoji={getEmoji(getEmotion({ energy, food, happiness }))} />
          </div>
          <div className="my-auto justify-between gap-2 w-full col-span-3">
            <Food food={food} />
            <Happiness happiness={happiness} />
            <Energy energy={energy} />
          </div>
        </div>
      </CardContent>
      <div className="mb-2">
        <Button className="mx-1" onClick={playButton}>
          Play
        </Button>
        <Button className="mx-1" onClick={deleteButton}>
          Delete
        </Button>
      </div>
    </Card>
  );
}

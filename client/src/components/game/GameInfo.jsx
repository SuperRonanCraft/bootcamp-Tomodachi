import { getEmoji, getEmotion } from '../../lib/petStatus';
import Emoji from '../../components/game/Emoji';
import Food from './status/Food';
import Happiness from './status/Happiness';
import Energy from './status/Energy';
import { Card, CardContent, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { DELETE_GAME_DATA } from '../../utils/mutations';
import { useMutation } from '@apollo/client';
import auth from '../../utils/auth';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';
import { checkDead, getTimeLeft } from '../../lib/Game';
import { timeLeft } from '../../lib/useGameLoop';
import { useState } from 'react';
export default function GameInfo({
  _id,
  name,
  energy,
  food,
  happiness,
  timeAlive,
  isSelf,
}) {
  const [deleteGameData] = useMutation(DELETE_GAME_DATA);
  const [enableLink, setEnableLink] = useState(true);

  function deleteButton() {
    // console.log('Delete');
    deleteGameData({
      variables: { id: _id, userId: auth.getProfile().data._id },
    });
  }
  return (
    <Card className="w-full sm:w-2/3 mx-auto mb-2 transition group hover:bg-gradient-to-r hover:from-violet-600 hover:to-rose-400/40 dark:hover:from-violet-600/10 dark:hover:to-rose-400/10">
      {isSelf ? (
        <Link to={enableLink ? `../${_id}` : '#'} relative="path">
          {card(
            _id,
            name,
            energy,
            food,
            happiness,
            isSelf,
            deleteButton,
            timeAlive,
            setEnableLink
          )}
        </Link>
      ) : (
        card(
          _id,
          name,
          energy,
          food,
          happiness,
          isSelf,
          deleteButton,
          timeAlive,
          setEnableLink
        )
      )}
    </Card>
  );
}

function card(
  _id,
  name,
  energy,
  food,
  happiness,
  isSelf,
  deleteButton,
  timeAlive,
  setEnableLink
) {
  return (
    <>
      <CardTitle>
        <p className="mt-2 ">{name}</p>
      </CardTitle>
      <div></div>
      <CardContent>
        <div className="grid grid-cols-4 gap-4 mx-0 sm:mx-auto">
          <div className="relative">
            <Emoji
              emoji={getEmoji(getEmotion({ energy, food, happiness }))}
              page="profile"
              isDead={checkDead({ energy, food, happiness })}
            />
            {isSelf && (
              <div className="absolute top-2 left-2 right-2 bottom-2 opacity-0 group-hover:opacity-50 bg-white rounded-sm flex justify-center items-center transition">
                <Play className="text-black dark:text-gray-800 drop-shadow-2xl w-24 h-24" />
              </div>
            )}
          </div>
          <div className="my-auto justify-between gap-2 w-full col-span-3">
            <Food food={food} />
            <Happiness happiness={happiness} />
            <Energy energy={energy} />
          </div>
        </div>
        <div className="flex flex-nowrap my-3">
          <div className="mx-auto mb-2">
            {isSelf && (
              <Button
                className="mx-1"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteButton();
                }}
                onMouseOver={() => setEnableLink(false)}
                onMouseOut={() => setEnableLink(true)}
              >
                Delete
              </Button>
            )}
          </div>
          <div className="flex-grow" />
          <div>
            <p className="text-right text-foreground/70">
              Played For: {getTimeLeft(timeAlive)}
            </p>
            <p className="text-right text-foreground/70">
              Time Left:{' '}
              {getTimeLeft(
                timeLeft({ food, energy, happiness }),
                checkDead({ food, happiness, energy })
              )}
            </p>
          </div>
        </div>
      </CardContent>
    </>
  );
}

import Action from './action/Action';
import Emoji from './Emoji';
import Status from './Status';
import { useEffect } from 'react';
import { useGameContext } from '../../context/GameContext';
import useGameLoop from '../../lib/useGameLoop';
import TabContainer from './tab/TabContainer';
import { useMutation, useQuery } from '@apollo/client';
import { UPDATE_GAMEDATA } from '../../utils/mutations';
import { QUERY_USER } from '../../utils/queries';
import { useParams } from 'react-router-dom';
import auth from '../../utils/auth';
import useGameHook from '../../lib/useGameHook';
import { getEmoji } from '../../lib/petStatus';

export default function GameDashboard() {
  const { petState } = useGameContext();
  const { food, happiness, energy, status } = petState;
  const { gameTick } = useGameLoop();
  const { changeGame } = useGameHook();
  const { gameId } = useParams();
  const [updateGameData] = useMutation(UPDATE_GAMEDATA);
  const { loading, data } = useQuery(QUERY_USER, {
    variables: { userId: auth.getProfile().data._id },
  });
  //Download data
  useEffect(() => {
    if (loading) return;
    // console.log('DOWNLOADING!');
    // console.log(data.me.gameData);
    const gamesArray = data.me.gameData;
    const gameData = gamesArray.filter(({ _id }) => _id === gameId)[0];
    changeGame(gameData);
  }, [loading, gameId]);

  //Update data
  useEffect(() => {
    // console.log('UPLOADING!');
    if (loading) return;
    const data = {
      userId: auth.getProfile().data._id,
      gameId,
      food,
      energy,
      happiness,
    };
    // console.log('Uploading', data);
    updateGameData({ variables: data });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [food, happiness, energy]);

  //Game Tick
  useEffect(() => {
    if (food <= 0 || happiness <= 0 || energy <= 0) return;
    const interval = setInterval(() => {
      // console.log(petState);

      gameTick();
    }, 1000);

    return () => clearInterval(interval);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [food, happiness, energy]);

  if (loading) return <h2>Loading</h2>;

  return (
    <div className="w-fit mx-auto gap-4 mt-32 md:mt-0 md:flex md:items-center md:h-screen">
      <div className="flex flex-col md:flex-row gap-4 mx-8 md:mx-0">
        <TabContainer className="block md:hidden" />
        <Emoji emoji={getEmoji(petState)} petState={petState} />
        <div className="flex flex-col gap-4">
          <TabContainer className="hidden md:block" />
          <Status />
          <Action />
        </div>
      </div>
    </div>
  );
}

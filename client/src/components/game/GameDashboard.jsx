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

export default function GameDashboard() {
  const { petState, setGameState } = useGameContext();
  const { food, happiness, energy } = petState;
  const { gameTick } = useGameLoop();
  const { gameId } = useParams();
  const [updateGameData] = useMutation(UPDATE_GAMEDATA);
  const { loading, data } = useQuery(QUERY_USER, {
    variables: { userId: auth.getProfile().data._id },
  });
  //Download data
  useEffect(() => {
    //setGameState((prev) => {
    //const _data = { ...prev };
    //return data;
    //});
  }, [data]);

  //Update data
  useEffect(() => {
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
    const interval = setInterval(() => {
      // console.log(petState);

      gameTick();
    }, 1000);

    return () => clearInterval(interval);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [food, happiness, energy]);

  if (loading) return <h2>Loading</h2>;

  console.log('GAMEDATA:', data);

  return (
    <div className="flex flex-row w-fit mx-auto gap-4">
      <div className="flex flex-col gap-4 mx-8 md:mx-0">
        <TabContainer />
        <Emoji />
        <div className="grid grid-cols-3 gap-4 w-full">
          <Status />
          <Action />
        </div>
      </div>
    </div>
  );
}

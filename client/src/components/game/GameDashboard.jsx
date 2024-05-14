import Action from './action/Action';
import Emoji from './Emoji';
import Status from './Status';
import { useEffect } from 'react';
import { useGameContext } from '../../context/GameContext';
import GameLog from './gamelog/GameLog';
import useGameLoop from '../../lib/useGameLoop';

export default function GameDashboard() {
  const { petState } = useGameContext();
  const { food, happiness, energy } = petState;
  const { gameTick } = useGameLoop();

  useEffect(() => {
    //DOWNLOAD DATA FROM DATABASE
    // setPetState();
    // setGameState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // console.log(petState);
      gameTick(1000, petState);
    }, 1000);

    return () => clearInterval(interval);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [food, happiness, energy]);

  return (
    <div className="flex flex-row w-fit mx-auto gap-4">
      <GameLog />
      <div className="flex flex-col gap-4">
        <Emoji />
        <div className="grid grid-cols-3 gap-4 w-full">
          <Status />
          <Action />
        </div>
      </div>
      <GameLog />
    </div>
  );
}

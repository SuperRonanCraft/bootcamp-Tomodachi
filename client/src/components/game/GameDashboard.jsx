import Action from './action/Action';
import Emoji from './Emoji';
import Status from './Status';
import { useEffect } from 'react';
import { useGameContext } from '../../context/GameContext';
import createPet from '../../lib/Pet';
import useGameHandler from '../../lib/useGameLoop';
import GameLog from './gamelog/GameLog';

export default function GameDashboard() {
  const { petState, setPetState } = useGameContext();
  const { food, happiness, energy } = petState;
  const { gameTick, getTickDelay } = useGameHandler();

  useEffect(() => {
    setPetState(createPet());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // console.log(petState);
      gameTick(getTickDelay(), petState);
    }, getTickDelay());

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

import Action from './action/Action';
import Emoji from './Emoji';
import Status from './Status';
import { useEffect } from 'react';
import { useGameContext } from '../../context/GameContext';
import createPet from '../../lib/Pet';
import useGameLoop from '../../lib/useGameLoop';
import createGame from '../../lib/Game';

export default function GameDashboard() {
  const { petState, setPetState, gameState, setGameState } = useGameContext();
  const { food, happiness, energy } = petState;
  const { gameTick, getTickDelay } = useGameLoop();

  useEffect(() => {
    setPetState(createPet());
    setGameState(createGame('Mike'));
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
    <div className="flex flex-col gap-4 w-fit mx-auto h-screen justify-center items-center">
      <Emoji />
      <div className="grid grid-cols-3 gap-4 w-full">
        <Status />
        <Action />
      </div>
    </div>
  );
}

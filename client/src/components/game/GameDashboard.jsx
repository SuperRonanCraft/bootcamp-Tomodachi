import Action from './action/Action';
import Emoji from './Emoji';
import Status from './Status';
import { useEffect } from 'react';
import { usePetContext } from '../../context/PetContext';
import useGameHook from '../../lib/useGameHook';
import createPet from '../../lib/Pet';

export default function GameDashboard() {
  const { gameLoop } = useGameHook();
  const { setPetState } = usePetContext();

  useEffect(() => {
    setPetState(createPet('Alfonso'));
    gameLoop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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

import Action from './action/Action';
import Emoji from './Emoji';
import Status from './Status';
import { useEffect } from 'react';
import { usePetContext } from '../../context/PetContext';
import createPet from '../../lib/Pet';
import useGameHandler from '../../lib/useGameLoop';

export default function GameDashboard() {
  const { petState, setPetState } = usePetContext();
  const { gameTick, getTickDelay } = useGameHandler();

  useEffect(() => {
    setPetState(createPet('Alfonso'));
    const inverval = setInterval(() => {
      gameTick();
      console.log(getTickDelay());
    }, getTickDelay());
    return clearInterval(inverval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [petState]);
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

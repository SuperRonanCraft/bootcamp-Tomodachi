import { usePetContext } from '../context/PetContext';
import { executeAction, battle, getPet, getCurrentValues } from './gameLogic';

export default function useGameLogic() {
  const { setPetState } = usePetContext();

  function play() {
    executeAction(getPet(), getPet().POSSIBILITIES.play, 'play');
    updateData();
  }

  function feed() {
    executeAction(getPet(), getPet().POSSIBILITIES.feed, 'feed');
    updateData();
  }

  function sleep() {
    executeAction(getPet(), getPet().POSSIBILITIES.sleep, 'sleep');
    updateData();
  }

  function battleBeast() {
    battle(getPet());
    updateData();
  }

  function updateData() {
    setPetState(getCurrentValues(getPet()));
  }

  return { play, feed, sleep, battleBeast };
}

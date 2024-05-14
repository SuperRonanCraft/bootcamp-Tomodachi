import { usePetContext } from '../context/PetContext';
import { executeAction, battle } from './gameLogic';
import useGameHandler from './useGameHandler';

export default function useGameHook() {
  const { petState: pet, setPetState } = usePetContext();
  const { startGame } = useGameHandler();

  function play(happiness_array) {
    const newPet = { ...pet };
    const outcome = executeAction(newPet, 'play', { happiness_array });
    setPetState(newPet);
  }

  function feed() {
    const newPet = { ...pet };
    const outcome = executeAction(newPet, 'feed');
    setPetState(newPet);
  }

  function sleep() {
    const newPet = { ...pet };
    const outcome = executeAction(newPet, 'sleep');
    setPetState(newPet);
  }

  function battleBeast() {
    const newPet = { ...pet };
    const outcome = battle(newPet);
    setPetState(newPet);
  }

  function gameLoop() {
    startGame();
  }

  return { play, feed, sleep, battleBeast, gameLoop };
}

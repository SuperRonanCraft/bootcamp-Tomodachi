import { usePetContext } from '../context/PetContext';
import { executeAction, battle } from './gameLogic';
import useGameHandler from './useGameHandler';

export default function useGameHook() {
  const { petState: pet, setPetState } = usePetContext();
  const { startGame } = useGameHandler();

  function play() {
    const newPet = { ...pet };
    executeAction(newPet, 'play');
    setPetState(newPet);
  }

  function feed() {
    const newPet = { ...pet };
    executeAction(newPet, 'feed');
    setPetState(newPet);
  }

  function sleep() {
    const newPet = { ...pet };
    executeAction(newPet, 'sleep');
    setPetState(newPet);
  }

  function battleBeast() {
    const newPet = { ...pet };
    battle(newPet);
    setPetState(newPet);
  }

  function gameLoop() {
    startGame();
  }

  return { play, feed, sleep, battleBeast, gameLoop };
}

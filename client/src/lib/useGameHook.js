import { usePetContext } from '../context/PetContext';
import { executeAction, battle } from './gameLogic';
import useGameHandler from './useGameHandler';

export default function useGameHook() {
  const { petState: pet, setPetState } = usePetContext();
  const { startGame } = useGameHandler();

  function play() {
    executeAction(pet, 'play');
    updateData();
  }

  function feed() {
    console.log(pet);
    executeAction(pet, 'feed');
    console.log(pet);
    updateData();
  }

  function sleep() {
    executeAction(pet, 'sleep');
    updateData();
  }

  function battleBeast() {
    battle(pet);
    updateData();
  }

  function updateData() {
    setPetState(pet);
  }

  function gameLoop() {
    startGame();
  }

  return { play, feed, sleep, battleBeast, gameLoop };
}

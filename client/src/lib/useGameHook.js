import { useGameContext } from '../context/GameContext';
import useGameLogic from './useGameLogic';
import useGameLoop from './useGameLoop';

//Gives access to buttons to call these functions
export default function useGameHook() {
  const { startGame } = useGameLoop();
  const { battle, executeAction } = useGameLogic();
  const { setGameState, setPetState } = useGameContext();

  function play(happiness_array) {
    // warning(`${gameState.name} is playing!`);
    executeAction('play', { happiness_array });
  }

  function feed() {
    // warning(`${gameState.name} has been feed!`);
    executeAction('feed');
  }

  function sleep() {
    // warning(`${gameState.name} is taking a nap...`);
    executeAction('sleep');
  }

  function battleBeast() {
    battle();
  }

  function gameLoop() {
    startGame();
  }

  function isAlive() {}

  function changeGame(gameData) {
    // console.log(gameData);
    setGameState((prev) => {
      const newGame = { ...prev };
      newGame.name = gameData.name;
      return newGame;
    });
    setPetState((prev) => {
      // console.log('Pet', prev);
      const newPet = { ...prev };
      newPet.food = gameData.food;
      newPet.energy = gameData.energy;
      newPet.happiness = gameData.happiness;
      // console.log('New Pet', newPet);
      return newPet;
    });
  }

  return { play, feed, sleep, battleBeast, gameLoop, changeGame };
}

import useGameLogic from './useGameLogic';
import useGameLoop from './useGameLoop';

//Gives access to buttons to call these functions
export default function useGameHook() {
  const { startGame } = useGameLoop();
  const { battle, executeAction } = useGameLogic();

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

  return { play, feed, sleep, battleBeast, gameLoop };
}

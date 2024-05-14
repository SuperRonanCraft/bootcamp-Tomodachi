import { useGameContext } from '../context/GameContext';

const defaultTickDelay = 500;
const tickMultiplier = 1;
const foodDecayTicks = 5;
const happinessDecayTicks = 10;
const energyDecayTicks = 5;

export default function useGameHandler() {
  const { petState, setPetState } = useGameContext();

  function startGame() {
    gameTick(defaultTickDelay * tickMultiplier);
  }

  function gameTick(delay) {
    var intervalID = setInterval(function () {
      gameTick(delay);
    }, delay);

    // Later, when you want to cancel the interval
    progressTime(delay);
    clearInterval(intervalID);
  }

  function progressTime(time) {
    const gameTicks = time / defaultTickDelay;
    const foodDecay = gameTicks / foodDecayTicks;
    const happinessDecay = gameTicks / happinessDecayTicks;
    const energyDecay = gameTicks / energyDecayTicks;
  }

  return { startGame };
}

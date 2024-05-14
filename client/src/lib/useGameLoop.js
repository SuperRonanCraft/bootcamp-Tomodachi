import { useGameContext } from '../context/GameContext';

const defaultTickDelay = 1000;
const tickMultiplier = 1;
const foodDecayTicks = 5;
const happinessDecayTicks = 10;
const energyDecayTicks = 5;

export default function useGameHandler() {
  let foodDecay_prev = 0;
  let happinessDecay_prev = 0;
  let energyDecay_prev = 0;

  const { setPetState } = useGameContext();

  function getTickDelay() {
    return defaultTickDelay * tickMultiplier;
  }

  function gameTick(delay, pet) {
    // console.log('Time Progresses...');
    // Later, when you want to cancel the interval
    progressTime(delay, pet);

    // clearInterval(intervalID);
  }

  function progressTime(time, pet) {
    const gameTicks = time / defaultTickDelay;
    let foodDecay = gameTicks / foodDecayTicks;
    let happinessDecay = gameTicks / happinessDecayTicks;
    let energyDecay = gameTicks / energyDecayTicks;
    foodDecay_prev += foodDecay;
    happinessDecay_prev += happinessDecay;
    energyDecay_prev += energyDecay;

    if (foodDecay_prev >= 1) {
      foodDecay = Math.floor(foodDecay_prev);
      foodDecay_prev -= foodDecay;
    } else {
      foodDecay = 0;
    }

    if (happinessDecay_prev >= 1) {
      happinessDecay = Math.floor(happinessDecay_prev);
      happinessDecay_prev -= happinessDecay;
    } else {
      happinessDecay = 0;
    }

    if (energyDecay_prev >= 1) {
      energyDecay = Math.floor(energyDecay_prev);
      energyDecay_prev -= energyDecay;
    } else {
      energyDecay = 0;
    }

    // console.log({ foodDecay, happinessDecay, energyDecay });
    const newPet = { ...pet };
    newPet.food -= foodDecay;
    newPet.energy -= energyDecay;
    newPet.happiness -= happinessDecay;
    setPetState(newPet);
  }

  return { getTickDelay, gameTick };
}

import { useGameContext } from '../context/GameContext';
import { createPetLog } from './Pet';

const foodDecayTicks = 10;
const happinessDecayTicks = 12;
const energyDecayTicks = 7;

export default function useGameLoop() {
  let foodDecay_prev = 0;
  let happinessDecay_prev = 0;
  let energyDecay_prev = 0;

  const { setPetState, gameState, setGameState } = useGameContext();

  function gameTick(delay, pet) {
    // console.log('Time Progresses...');
    // Later, when you want to cancel the interval
    progressTime(delay * gameState.tickMultiplier, pet);

    // clearInterval(intervalID);
  }

  function progressTime(time, pet) {
    const gameTicks = time / 1000;
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
    if (foodDecay > 0 || energyDecay > 0 || happinessDecay > 0) {
      const message = `${gameState.name}'s `;
      if (foodDecay > 0 && energyDecay > 0 && happinessDecay > 0)
        log(`All of ${message} traits has decayed!`);
      else if (foodDecay > 0 && happinessDecay > 0)
        log(`${message} food and happiness has decayed!`);
      else if (energyDecay > 0 && happinessDecay > 0)
        log(`${message} energy and happiness has decayed!`);
      else if (energyDecay > 0 && foodDecay > 0)
        log(`${message} energy and food has decayed!`);
      else if (foodDecay > 0)
        log(`${message} food has decayed by -${foodDecay}`);
      else if (energyDecay > 0)
        log(`${message} energy has decayed by -${energyDecay}`);
      else if (happinessDecay > 0)
        log(`${message} happiness has decayed by -${happinessDecay}`);
    }
  }

  function log(message) {
    const newLog = [...gameState.logs];
    newLog.push(createPetLog(message));
    setGameState({ ...gameState, logs: newLog });
  }

  return { gameTick };
}

import { useGameContext } from '../context/GameContext';
import { createPetLog } from './Pet';

const foodDecayTicks = 10;
const happinessDecayTicks = 12;
const energyDecayTicks = 7;

let foodDecay_prev = 0;
let happinessDecay_prev = 0;
let energyDecay_prev = 0;

export function timeLeft({ food, energy, happiness }) {
  const data = {
    food: food * foodDecayTicks - foodDecay_prev,
    energy: energy * energyDecayTicks - energyDecay_prev,
    happiness: happiness * happinessDecayTicks - happinessDecay_prev,
  };
  const keyValues = Object.values(data);

  const smallestValue = Math.min(...keyValues);
  // const smallestIndex = keyValues.indexOf(smallestValue);
  // console.log(data);
  return smallestValue;
}

export default function useGameLoop() {
  const {
    petState: pet,
    setPetState,
    gameState,
    setGameState,
  } = useGameContext();

  function gameTick() {
    // console.log('Time Progresses...');
    // Later, when you want to cancel the interval
    progressTime(1000 * gameState.tickMultiplier);

    // clearInterval(intervalID);
  }

  function progressTime(time) {
    const gameTicks = time / 1000;
    //How much to decay THIS TICK
    foodDecay_prev += gameTicks;
    happinessDecay_prev += gameTicks;
    energyDecay_prev += gameTicks;

    let foodDecay, happinessDecay, energyDecay;
    //Manipulating Pet Data
    if (foodDecay_prev >= foodDecayTicks) {
      foodDecay = Math.floor(foodDecay_prev / foodDecayTicks);
      foodDecay_prev = 0;
    } else {
      foodDecay = 0;
    }

    if (happinessDecay_prev >= happinessDecayTicks) {
      happinessDecay = Math.floor(happinessDecay_prev / happinessDecayTicks);
      happinessDecay_prev = 0;
    } else {
      happinessDecay = 0;
    }

    if (energyDecay_prev >= energyDecayTicks) {
      energyDecay = Math.floor(energyDecay_prev / energyDecayTicks);
      energyDecay_prev = 0;
    } else {
      energyDecay = 0;
    }

    // console.log({ foodDecay, happinessDecay, energyDecay });
    // console.log({ foodDecay_prev, happinessDecay_prev, energyDecay_prev });
    const newPet = { ...pet };
    newPet.food -= foodDecay;
    newPet.energy -= energyDecay;
    newPet.happiness -= happinessDecay;
    setPetState(newPet);
    // if (foodDecay > 0 || energyDecay > 0 || happinessDecay > 0) {
    //   const message = `${gameState.name}'s `;
    //   if (foodDecay > 0 && energyDecay > 0 && happinessDecay > 0)
    //     log(`All of ${message} traits has decayed!`);
    //   else if (foodDecay > 0 && happinessDecay > 0)
    //     log(`${message} food and happiness has decayed!`);
    //   else if (energyDecay > 0 && happinessDecay > 0)
    //     log(`${message} energy and happiness has decayed!`);
    //   else if (energyDecay > 0 && foodDecay > 0)
    //     log(`${message} energy and food has decayed!`);
    //   else if (foodDecay > 0)
    //     log(`${message} food has decayed by -${foodDecay}`);
    //   else if (energyDecay > 0)
    //     log(`${message} energy has decayed by -${energyDecay}`);
    //   else if (happinessDecay > 0)
    //     log(`${message} happiness has decayed by -${happinessDecay}`);
    // }
  }

  function log(message) {
    const newLog = [...gameState.logs];
    newLog.push(createPetLog(message));
    setGameState({ ...gameState, logs: newLog });
  }

  return { gameTick };
}

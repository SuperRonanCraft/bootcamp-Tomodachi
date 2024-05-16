import { STATUS } from '../lib/petStatus';

export default function createPet(
  food = 30,
  happiness = 25,
  energy = 50,
  timeAlive = 0,
  status = STATUS.IDLE
) {
  return {
    food,
    happiness,
    energy,
    status,
    timeAlive,
    //Current and Max Tolerated lethal actions
    LETHAL_ACTIONS: 0,
    LETHAL_ACTIONS_MAX: 3,
  };
}

export function createPetLog(text, importance = IMPORTANCE.NORMAL) {
  const options = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
    timeZone: 'America/New_York',
  };
  const log = {
    timestamp: new Intl.DateTimeFormat('en-US', options).format(new Date()),
    text,
    importance,
  };

  // console.log(log);
  return log;
}

export const POSSIBILITIES = {
  // how each action can change pet data
  play: {
    food: [-1, -2, -3], //[-1, -2, -3],
    happiness: [3, 4, 5, 6], //[3, 4, 5, 6],
    energy: [-1, -2, -3], //[-1, -2, -3],
  },
  feed: {
    food: [2, 3, 4, 5], //[2, 3, 4, 5],
    happiness: [1, 2, 3, 4], //[1, 2, 3, 4],
    energy: [-1, -3, -4], //[-2, -3, -4],
  },
  sleep: {
    food: [-2, -3, -4], //[-2, -3, -4],
    happiness: [-2, -1, 0, 1], //[-1, 0, 1],
    energy: [3, 4, 5], //[3, 4, 5],
  },
};

export const THRESHOLDS = {
  death: 0,
  life: 3,
  deductionPoint: 20,
};

export const IMPORTANCE = {
  NORMAL: 'normal',
  WARNING: 'warning',
  SEVERE: 'severe',
};

import { STATUS } from '../lib/petStatus';

export default function createPet(
  food = 30,
  happiness = 25,
  energy = 50,
  status = STATUS.IDLE
) {
  return {
    food,
    happiness,
    energy,
    status,
    //Current and Max Tolerated lethal actions
    LETHAL_ACTIONS: 0,
    LETHAL_ACTIONS_MAX: 3,
  };
}

export const POSSIBILITIES = {
  // how each action can change pet data
  play: {
    food: [-1, -2, -3], //[-1, -2, -3],
    happiness: [3, 4, 5, 6], //[3, 4, 5, 6],
    energy: [-2, -3, -4], //[-1, -2, -3],
  },
  feed: {
    food: [6, 8, 10], //[2, 3, 4, 5],
    happiness: [2, 3, 4], //[1, 2, 3, 4],
    energy: [-1, -2, -3], //[-2, -3, -4],
  },
  sleep: {
    food: [-2, -3], //[-2, -3, -4],
    happiness: [-2, -1, 0, 1], //[-1, 0, 1],
    energy: [3, 4, 5], //[3, 4, 5],
  },
};

export const THRESHOLDS = {
  death: 0,
  life: 3,
  deductionPoint: 30,
};

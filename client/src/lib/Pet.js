export default function createPet(name, food, happiness, energy) {
  return {
    name: name,
    food: food,
    happiness: happiness,
    energy: energy,
    //Current and Max Tolerated lethal actions
    LETHAL_ACTIONS: 0,
    LETHAL_ACTIONS_MAX: 3,
  };
}

export const POSSIBILITIES = {
  // how each action can change pet data
  play: {
    food: [-1, -2, -3],
    happiness: [3, 4, 5, 6],
    energy: [-1, -2, -3],
  },
  feed: {
    food: [2, 3, 4, 5],
    happiness: [1, 2, 3, 4],
    energy: [-2, -3, -4],
  },
  sleep: {
    food: [-2, -3, -4],
    happiness: [-1, 0, 1],
    energy: [3, 4, 5],
  },
};

export const THRESHOLDS = {
  death: 0,
  life: 3,
  deductionPoint: 20,
};

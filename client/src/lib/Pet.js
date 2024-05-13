export default function Pet(name, food, happiness, energy) {
  this.name = name;
  this.food = food;
  this.happiness = happiness;
  this.energy = energy;

  this.THRESHOLDS = {
    death: 0,
    life: 3,
    deductionPoint: 20,
  };

  //Current and Max Tolerated lethal actions
  this.LETHAL_ACTIONS = 0;
  this.LETHAL_ACTIONS_MAX = 3;

  this.POSSIBILITIES = {
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
}

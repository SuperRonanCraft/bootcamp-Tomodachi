import { useGameContext } from '../context/GameContext';
import { POSSIBILITIES, THRESHOLDS, createPetLog } from './Pet';

export default function useGameLogic() {
  const { setGameState, gameState } = useGameContext();

  function warning(message) {
    const newLog = [...gameState.logs];
    newLog.push(createPetLog(message));
    setGameState({ ...gameState, logs: newLog });
  }

  function getRandom(array) {
    //Takes an array
    //Returns a random item from that array
    var index = Math.floor(Math.random() * array.length);
    return array[index];
  }

  function getRandomValues(possibilities) {
    //for example: POSSIBILITIES.play
    //Takes an object in which each key is a list of numbers
    //Iterates through each key and creates a new object where each key contains one random number from each list
    var random_values = {};
    // console.log(possibilities);
    // console.log('  ');
    for (var key in possibilities) {
      var item_array = possibilities[key];
      var random_number = getRandom(item_array);
      // console.log('Key:', key, random_number);
      random_values[key] = random_number;
    }
    return random_values;
  }

  function getCurrentValues(pet) {
    // get object with current values
    return {
      food: pet.food,
      happiness: pet.happiness,
      energy: pet.energy,
    };
  }

  // FUNCTIONS TO DETECT AND HANDLE SITUATION WHEN PET IS IN DANGER-TO-DIE ZONE :))

  function checkImpactDeath(valuesAfter) {
    //Takes an object containing the values of the pet
    //Returns FALSE if adding new values to the current values WILL NOT KILL the pet
    //Returns TRUE if changes WILL KILL the pet
    for (var key in valuesAfter) {
      var value = valuesAfter[key];
      //Check to make sure that the value is not less than death threshold
      if (value <= THRESHOLDS.death) {
        return true;
      }
    }
    return false;
  }

  function preventDeath(pet, action_key) {
    // if action would have killed the pet, show relevant message, increase lethal.attempts count
    var message;
    switch (action_key) {
      case 'play':
        message = `Didn't PLAY as it would have killed ${gameState.name}`;
        pet.LETHAL_ACTIONS++;
        break;
      case 'feed':
        message = "Didn't FEED as it would have killed your pet";
        pet.LETHAL_ACTIONS++;
        break;
      case 'sleep':
        message = `Didn't SLEEP as ${gameState.name} would die while napping!`;
        pet.LETHAL_ACTIONS++;
        break;
    }
    warning(message);
    boost(pet);
  }

  function boost(pet) {
    // if more than 3 lethal attempts either boost the lowest value, or tell user to try another action
    if (pet.LETHAL_ACTIONS >= pet.LETHAL_ACTIONS_TOLLERATED) {
      var currentValues = getCurrentValues(pet);
      var keys = Object.keys(currentValues);
      var keyValues = Object.values(currentValues);

      var smallestValue = Math.min(...keyValues);
      var smallestIndex = keyValues.indexOf(smallestValue);
      var theMinKey = keys[smallestIndex];
      // var theMinKeyValue = keyValues.splice(smallestIndex, 1);
      var secondSmallestValue = Math.min(...keyValues);

      if (secondSmallestValue < THRESHOLDS.life) {
        switch (theMinKey) {
          case 'food':
            pet.food += pet.food;
            warning('Your pet just got FOOD boost!');
            pet.LETHAL_ACTIONS = 0;
            break;
          case 'happiness':
            pet.happiness += pet.happiness;
            warning('Your pet just got HAPPINESS boost!');
            pet.LETHAL_ACTIONS = 0;
            break;
          case 'energy':
            pet.energy += pet.energy;
            warning('Your pet just got ENERGY boost!');
            pet.LETHAL_ACTIONS = 0;
            break;
        }
      } else {
        warning("Why don't you try another action?");
        pet.LETHAL_ACTIONS = 0;
      }
    }
  }

  function checkForDanger(pet) {
    // takes current values, checks if any of them are dangerously low
    // returns feedback message to the to user
    // if no death danger, checks for disbalance in points
    var currentValues = getCurrentValues(pet);
    var items = [];
    for (var key in currentValues) {
      var value = currentValues[key];
      if (value <= THRESHOLDS.life) {
        items.push(key.toUpperCase());
      }
    }
    if (items.length > 0) {
      warning(`Do a better job with ${pet.name}'s ${items}`);
    } else {
      checkForExcess(pet);
    }
  }

  // FUNCTIONS TO CHECK FOR BALANCE IN PET LIFE AND HANDLE DISBALANCE :))

  function checkForExcess(pet) {
    // find the largest value and find the index of it
    // Save key name and value of the largest value into variables
    // Calculate remainder sum and if conditions are met
    // Return the name of the key and remainder Sum
    var currentValues = getCurrentValues(pet);
    var keys = Object.keys(currentValues);
    var keyValues = Object.values(currentValues);

    var largestValue = Math.max(...keyValues);
    var largestIndex = keyValues.indexOf(largestValue);
    var theMaxKey = keys[largestIndex];
    // var theMaxKeyValue = keyValues.splice(largestIndex, 1);
    var remainderSum = keyValues.reduce((a, b) => a + b, 0);

    if (
      largestValue >= THRESHOLDS.deductionPoint &&
      largestValue > remainderSum
    ) {
      deductPoints(pet, theMaxKey, remainderSum);
    } else {
      // warning(`${pet.name} is doing fine!`);
    }
  }

  function deductPoints(pet, theMaxKey, remainderSum) {
    // cuts the highest value if disbalance is found and communicates the cut to the user
    pet[theMaxKey] = pet[theMaxKey] - remainderSum;
    switch (theMaxKey) {
      case 'food':
        warning(
          `${pet.name} was too fat, so it got a surgery of -${remainderSum} points!`
        );
        break;
      case 'happiness':
        warning(
          `${pet.name} was too happy. Devs just could not stand that and made them miserable by deducting ${remainderSum} points!`
        );
        break;
      case 'energy':
        warning(
          `${pet.name} had too much energy. A special pill reduced energy by ${remainderSum} points!`
        );
        break;
    }
  }

  function tooPerfect(pet) {
    // GAME OVER if all values > 33, pet dies if all values are equal at any point in the game
    var outcome = 0;
    var currentValues = getCurrentValues(pet);
    var keyValues = Object.values(currentValues);

    // traverses values array to see if all values are above a game win threshold
    function isAboveWinThreshold(value) {
      return value >= 100;
    }

    if (keyValues[0] === keyValues[1] && keyValues[1] === keyValues[2]) {
      warning(
        `${pet.name} got too balanced and healthy. The Order does not like perfection, so we killed ${gameState.name}. Sorry not sorry...`
      );
      outcome = 1;
    } else if (keyValues.every(isAboveWinThreshold) === true) {
      warning(
        `${pet.name} exceeded the sum of 250 points and thus defeated the First Order! CONGRATULATIONS! Thanks for playing :)`
      );
      outcome = 2;
    }
    return outcome;
  }

  // MAIN ACTIONS AFFECTING PET VALUES

  function executeAction(pet, action_key, props) {
    // action key is a corresponding number to know what to communicate to the user
    const possibilities = POSSIBILITIES[action_key];
    var values = getRandomValues(possibilities);

    // console.log('Values', possibilities, values);
    var valuesAfter = {
      food: pet.food + values.food,
      happiness: pet.happiness + values.happiness,
      energy: pet.energy + values.energy,
    };

    //Test to make sure that the pet is not going to die
    if (checkImpactDeath(valuesAfter) === false) {
      pet.food = valuesAfter.food;
      pet.happiness = valuesAfter.happiness;
      pet.energy = valuesAfter.energy;
      checkForDanger(pet);
    } else {
      preventDeath(pet, action_key);
    }
    return tooPerfect(pet);
  }

  // FUNCTIONS TO CREATE BEAST FOR BATTLE AND BATTLE

  function beast(pet) {
    //function creating the beast for the battle with max being the half of the sum of the current values of the pet
    var currentValues = getCurrentValues(pet);
    var values = Object.values(currentValues);
    var max_number = values.reduce((a, b) => a + b, 0) / 2;
    var beastValues = [0, 0, 0];
    for (var i = 0; i < beastValues.length; i++) {
      var number = Math.ceil(Math.random() * max_number);
      beastValues[i] = number;
    }
    return beastValues;
  }

  function battle(pet) {
    // pet vs beast battle function
    var battleOutcome;
    var beastValues = beast();
    var petSum = pet.food + pet.happiness + pet.energy;
    var beastSum = beastValues.reduce((a, b) => a + b, 0);

    if (petSum < beastSum) {
      warning(
        `${pet.name} LOST to the Order ${petSum} to ${beastSum} and went to heaven...`
      );
      battleOutcome = 0;
    } else {
      warning(`${pet.name} WON the battle ${petSum} to ${beastSum}. Amazing!`);

      battleOutcome = 1;
    }
    return battleOutcome;
  }
  return { battle, executeAction };
}

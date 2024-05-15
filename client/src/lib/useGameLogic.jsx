import { useGameContext } from '../context/GameContext';
import { POSSIBILITIES, THRESHOLDS, createPetLog } from './Pet';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { BeerOff, X } from 'lucide-react';

//All the logic for the game, advances with executeAction
export default function useGameLogic() {
  const {
    setGameState,
    gameState,
    setPetState,
    petState: pet,
  } = useGameContext();

  function showToast(message) {
    toast(message, {
      description: 'Please wait to replenish food',
      icon: <BeerOff />,
      cancel: {
        label: (
          <Button size="icon" variant="ghost">
            <X className="w-6 h-6 text-foreground" />
          </Button>
        ),
        onClick: () => {},
      },
      cancelButtonStyle: {
        backgroundColor: 'inherit',
      },
    });
  }

  function warning(message) {
    setGameState((prev) => {
      const newLog = [...prev.logs];
      newLog.push(createPetLog(message));
      return { ...prev, logs: newLog };
    });
    showToast(message);
    console.log(message);
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

  function getCurrentValues() {
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

  function preventDeath(action_key) {
    // if action would have killed the pet, show relevant message, increase lethal.attempts count
    var message;
    switch (action_key) {
      case 'play':
        message = `Didn't PLAY as it would have killed ${gameState.name}`;

        setPetState({ ...pet, LETHAL_ACTIONS: pet.LETHAL_ACTIONS + 1 });
        break;
      case 'feed':
        message = "Didn't FEED as it would have killed your pet";
        setPetState({ ...pet, LETHAL_ACTIONS: pet.LETHAL_ACTIONS + 1 });
        // pet.LETHAL_ACTIONS++;
        break;
      case 'sleep':
        message = `Didn't SLEEP as ${gameState.name} would die while napping!`;

        setPetState({ ...pet, LETHAL_ACTIONS: pet.LETHAL_ACTIONS + 1 });
        break;
    }
    warning(message);
    boost();
  }

  function boost() {
    // if more than 3 lethal attempts either boost the lowest value, or tell user to try another action
    if (pet.LETHAL_ACTIONS >= pet.LETHAL_ACTIONS_TOLLERATED) {
      var currentValues = getCurrentValues();
      var keys = Object.keys(currentValues);
      var keyValues = Object.values(currentValues);

      var smallestValue = Math.min(...keyValues);
      var smallestIndex = keyValues.indexOf(smallestValue);
      var theMinKey = keys[smallestIndex];
      // var theMinKeyValue = keyValues.splice(smallestIndex, 1);
      var secondSmallestValue = Math.min(...keyValues);

      if (secondSmallestValue < THRESHOLDS.life) {
        switch (theMinKey) {
          case 'food': {
            // pet.food += pet.food;
            warning('Your pet just got FOOD boost!');
            // pet.LETHAL_ACTIONS = 0;
            const newPet = { ...pet };
            newPet.food = pet.food * 2;
            setPetState(newPet);
            break;
          }
          case 'happiness': {
            // pet.happiness += pet.happiness;
            warning('Your pet just got HAPPINESS boost!');
            // pet.LETHAL_ACTIONS = 0;
            const newPet = { ...pet };
            newPet.happiness = pet.happiness * 2;
            setPetState(newPet);
            break;
          }
          case 'energy': {
            // pet.energy += pet.energy;
            warning('Your pet just got ENERGY boost!');
            // pet.LETHAL_ACTIONS = 0;
            const newPet = { ...pet };
            newPet.energy = pet.energy * 2;
            setPetState(newPet);
            break;
          }
        }
      } else {
        warning("Why don't you try another action?");
        // pet.LETHAL_ACTIONS = 0;
        const newPet = { ...pet };
        newPet.LETHAL_ACTIONS = 0;
        setPetState(newPet);
      }
    }
  }

  function checkForDanger() {
    // takes current values, checks if any of them are dangerously low
    // returns feedback message to the to user
    // if no death danger, checks for disbalance in points
    var currentValues = getCurrentValues();
    var items = [];
    for (var key in currentValues) {
      var value = currentValues[key];
      if (value <= THRESHOLDS.life) {
        items.push(key.toUpperCase());
      }
    }
    if (items.length > 0) {
      warning(`Do a better job with ${gameState.name}'s ${items}`);
    } else {
      checkForExcess();
    }
  }

  // FUNCTIONS TO CHECK FOR BALANCE IN PET LIFE AND HANDLE DISBALANCE :))

  function checkForExcess() {
    // find the largest value and find the index of it
    // Save key name and value of the largest value into variables
    // Calculate remainder sum and if conditions are met
    // Return the name of the key and remainder Sum
    var currentValues = getCurrentValues();
    var keys = Object.keys(currentValues);
    var keyValues = Object.values(currentValues);

    var largestValue = Math.max(...keyValues);
    var largestIndex = keyValues.indexOf(largestValue);
    var theMaxKey = keys[largestIndex];
    // var theMaxKeyValue = keyValues.splice(largestIndex, 1);
    var remainderSum = keyValues.reduce((a, b) => a + b, 0) - largestValue;

    if (
      largestValue >= THRESHOLDS.deductionPoint &&
      largestValue > remainderSum
    ) {
      deductPoints(theMaxKey, remainderSum);
    } else {
      // warning(`${pet.name} is doing fine!`);
    }
  }

  function deductPoints(theMaxKey, remainderSum) {
    // cuts the highest value if disbalance is found and communicates the cut to the user
    const newPet = { ...pet };
    newPet[theMaxKey] = newPet[theMaxKey] - remainderSum;
    setPetState(newPet);
    switch (theMaxKey) {
      case 'food':
        warning(
          `${gameState.name} was too fat, so it got a surgery of -${remainderSum} points!`
        );
        break;
      case 'happiness':
        warning(
          `${gameState.name} was too happy. Devs just could not stand that and made them miserable by deducting ${remainderSum} points!`
        );
        break;
      case 'energy':
        warning(
          `${gameState.name} had too much energy. A special pill reduced energy by ${remainderSum} points!`
        );
        break;
    }
  }

  function tooPerfect() {
    // GAME OVER if all values > 33, pet dies if all values are equal at any point in the game
    var outcome = 0;
    var currentValues = getCurrentValues();
    var keyValues = Object.values(currentValues);

    // traverses values array to see if all values are above a game win threshold
    function isAboveWinThreshold(value) {
      return value >= 100;
    }

    if (keyValues[0] === keyValues[1] && keyValues[1] === keyValues[2]) {
      warning(
        `${gameState.name} got too balanced and healthy. The Order does not like perfection, so we killed ${gameState.name}. Sorry not sorry...`
      );
      outcome = 1;
    } else if (keyValues.every(isAboveWinThreshold) === true) {
      warning(
        `${gameState.name} exceeded the sum of 250 points and thus defeated the First Order! CONGRATULATIONS! Thanks for playing :)`
      );
      outcome = 2;
    }
    return outcome;
  }

  // MAIN ACTIONS AFFECTING PET VALUES

  function executeAction(action_key, props) {
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
      const newPet = { ...pet };
      newPet.food = valuesAfter.food;
      newPet.happiness = valuesAfter.happiness;
      newPet.energy = valuesAfter.energy;
      setPetState(newPet);
      checkForDanger();
    } else {
      preventDeath(action_key);
    }
    return tooPerfect();
  }

  // FUNCTIONS TO CREATE BEAST FOR BATTLE AND BATTLE

  function beast() {
    //function creating the beast for the battle with max being the half of the sum of the current values of the pet
    var currentValues = getCurrentValues();
    var values = Object.values(currentValues);
    var max_number = values.reduce((a, b) => a + b, 0) / 2;
    var beastValues = [0, 0, 0];
    for (var i = 0; i < beastValues.length; i++) {
      var number = Math.ceil(Math.random() * max_number);
      beastValues[i] = number;
    }
    return beastValues;
  }

  function battle() {
    // pet vs beast battle function
    var battleOutcome;
    var beastValues = beast();
    var petSum = pet.food + pet.happiness + pet.energy;
    var beastSum = beastValues.reduce((a, b) => a + b, 0);

    if (petSum < beastSum) {
      warning(
        `${gameState.name} LOST to the Order ${petSum} to ${beastSum} and went to heaven...`
      );
      battleOutcome = 0;
    } else {
      warning(
        `${gameState.name} WON the battle ${petSum} to ${beastSum}. Amazing!`
      );

      battleOutcome = 1;
    }
    return battleOutcome;
  }
  return { battle, executeAction, warning };
}

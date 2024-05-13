import Pet from './Pet';

const pet = new Pet('Alfonso', 20, 20, 60);

export function play() {
  return executeAction(pet.POSSIBILITIES.play, 'play');
}

export function feed() {
  return executeAction(pet.POSSIBILITIES.feed, 'feed');
}

export function sleep() {
  return executeAction(pet.POSSIBILITIES.sleep, 'sleep');
}

// HELPER FUNCTIONS
this.message;

function warning(message) {
  console.log(message);
}

function getRandom(array) {
  //Takes an array
  //Returns a random item from that array
  var index = Math.floor(Math.random() * array.length);
  return array[index];
}

function getRandomValues(POSSIBILITIES) {
  //for example: this.POSSIBILITIES.play
  //Takes an object in which each key is a list of numbers
  //Iterates through each key and creates a new object where each key contains one random number from each list
  var random_values = {};
  for (var key in POSSIBILITIES) {
    var item_array = POSSIBILITIES[key];
    var random_number = getRandom(item_array);
    random_values[key] = random_number;
  }
  return random_values;
}

function getCurrentValues() {
  // get object with current values
  return {
    food: this.food,
    happiness: this.happiness,
    energy: this.energy,
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
    if (value <= pet.THRESHOLDS.death) {
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
      message = "\n!!!!!!!!! Didn't PLAY as it would kill your porg !!!!!!!!!";
      pet.LETHAL_ACTIONS++;
      break;
    case 'feed':
      message = "\n!!!!!!!!! Didn't FEED as it would kill your porg !!!!!!!!!";
      pet.LETHAL_ACTIONS++;
      break;
    case 'sleep':
      message = "\n!!!!!!!!! Didn't SLEEP as it would kill your porg !!!!!!!!!";
      pet.LETHAL_ACTIONS++;
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
    var theMinKeyValue = keyValues.splice(smallestIndex, 1);
    var secondSmallestValue = Math.min(...keyValues);

    if (secondSmallestValue < this.THRESHOLDS.life) {
      switch (theMinKey) {
        case 'food':
          pet.food += pet.food;
          warning(
            '\n^*^*^*^* Low on numbers? No problem! Your pet just got FOOD boost! ^*^*^*^*'
          );
          pet.LETHAL_ACTIONS = 0;
          break;
        case 'happiness':
          pet.happiness += pet.happiness;
          warning(
            '\n^*^*^*^* Low on numbers? No problem! Your pet just got HAPPINESS boost! ^*^*^*^*'
          );
          pet.LETHAL_ACTIONS = 0;
          break;
        case 'energy':
          pet.energy += pet.energy;
          warning(
            '\n^*^*^*^* Low on numbers? No problem! Your pet just got ENERGY boost! ^*^*^*^*'
          );
          pet.LETHAL_ACTIONS = 0;
          break;
      }
    } else {
      warning("Why don't you try another action?");
      pet.LETHAL_ACTIONS = 0;
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
    if (value <= pet.THRESHOLDS.life) {
      items.push(key.toUpperCase());
    }
  }
  if (items.length > 0) {
    warning(`Owner! Do better with ${pet.name}'s ${items}`);
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
  var currentValues = this.getCurrentValues();
  var keys = Object.keys(currentValues);
  var keyValues = Object.values(currentValues);

  var largestValue = Math.max(...keyValues);
  var largestIndex = keyValues.indexOf(largestValue);
  var theMaxKey = keys[largestIndex];
  var theMaxKeyValue = keyValues.splice(largestIndex, 1);
  var remainderSum = keyValues.reduce((a, b) => a + b, 0);

  if (
    largestValue >= pet.THRESHOLDS.deductionPoint &&
    largestValue > remainderSum
  ) {
    deductPoints(theMaxKey, remainderSum);
  } else {
    warning(`${pet.name} is doing fine!`);
  }
}

function deductPoints(theMaxKey, remainderSum) {
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
        `${pet.name} was too happy. Gods just could not stand that and made him more miserable by deducting ${remainderSum} points!`
      );
      break;
    case 'energy':
      warning(
        `${pet.name} had too much energy. A special pill reduced energy by ${remainderSum} points!`
      );
      break;
  }
}

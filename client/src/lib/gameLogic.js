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

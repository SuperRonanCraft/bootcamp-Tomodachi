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

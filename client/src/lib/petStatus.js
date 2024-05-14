export function getRating(pet) {
  const energy = pet.energy;
  const hunger = pet.hunger;
  const happiness = pet.happiness;
  //Status stuff
  let status = RATING.HAPPY;
  if (hunger <= 10) status = RATING.HUNGRY;
  if (happiness <= 10 && hunger >= 30) status = RATING.SAD;
  if (energy <= 15 && hunger < 30) status = RATING.UPSET;
  if (energy <= 15 && happiness > 50) status = RATING.TIRED;

  return status;
}

export const RATING = {
  HAPPY: 'Happy',
  SAD: 'Sad',
  TIRED: 'Tired',
  UPSET: 'Upset',
  HUNGRY: 'Hungry',
};

export const STATUS = {
  EATING: 'Eating',
  PLAYING: 'Playing',
  SLEEPING: 'Sleeping',
  IDLE: 'Idle',
};

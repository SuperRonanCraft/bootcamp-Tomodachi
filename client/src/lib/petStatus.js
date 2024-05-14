export function getRating({ energy, food, happiness }) {
  //Status stuff
  let status = RATING.HAPPY;
  if (food <= 15 && food < happiness && food < energy) status = RATING.HUNGRY;
  else if (happiness <= 15 && happiness < energy) status = RATING.SAD;
  else if (energy <= 15) status = RATING.TIRED;
  if (energy <= 15 && happiness < 30) status = RATING.UPSET;
  if (energy - happiness > 20) status = RATING.UPSET;
  if (happiness - food > 20 && food < 20) status = RATING.HUNGRY;
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

import emj_almostDead from '../assets/almostDead.json';
import emj_happy from '../assets/happy.json';
import emj_dead from '../assets/dead.json';
import emj_sleeping from '../assets/sleep.json';
import emj_tired from '../assets/almostDead.json';
import emj_hungry from '../assets/hungry.json';

export function getEmotion({ energy, food, happiness }) {
  //Status stuff
  let emotion = EMOTION.HAPPY;
  if (food <= 15 && food < happiness && food < energy) return EMOTION.HUNGRY;
  else if (happiness <= 15 && happiness < energy) return EMOTION.SAD;
  else if (energy <= 15) return EMOTION.TIRED;
  if (energy <= 15 && happiness < 30) emotion = EMOTION.UPSET;
  if (energy - happiness > 20) emotion = EMOTION.UPSET;
  if (happiness - food > 20 && food < 20) emotion = EMOTION.HUNGRY;
  return emotion;
}

export function getEmoji(emotion) {
  switch (emotion) {
    case EMOTION.HAPPY:
      return emj_happy;
    case EMOTION.SAD:
      return emj_dead;
    case EMOTION.TIRED:
      return emj_sleeping;
    case EMOTION.UPSET:
      return emj_tired;
    case EMOTION.HUNGRY:
      return emj_hungry;
  }
}

export const EMOTION = {
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
  DEAD: 'Dead',
};

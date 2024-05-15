import Lottie from 'lottie-react';
import emj_almostDead from '../../assets/almostDead.json';
import emj_happy from '../../assets/happy.json';
import emj_dead from '../../assets/dead.json';
import emj_sleeping from '../../assets/sleep.json';
import emj_tired from '../../assets/almostDead.json';
import { Card, CardContent } from '@/components/ui/card';
import { useGameContext } from '../../context/GameContext';
import { RATING, STATUS, getRating } from '../../lib/petStatus';
import { useEffect, useState } from 'react';
import { timeLeft } from '../../lib/useGameLoop';

export default function Emoji() {
  const { petState } = useGameContext();
  const emoji = getEmoji(petState);

  return (
    <Card className="dark:border-primary dark:border-4 dark:shadow-primary dark:shadow-lg shadow-2xl bg-inherit relative">
      <CardContent className="pt-6">
        <Lottie animationData={emoji} />
      </CardContent>
      <p className="absolute top-0 right-6 text-lg">{getTimeLeft(petState)}</p>
    </Card>
  );
}

function getTimeLeft(pet) {
  const _timeLeft = timeLeft(pet);

  const minutes = Math.floor(_timeLeft / 60);
  let seconds = _timeLeft % 60;
  if (minutes <= 0 && seconds <= 0) return 'DEAD!';
  if (seconds < 10) {
    if (seconds == 0) seconds = '00';
    else seconds = `0${seconds}`;
  }
  return `${minutes}:${seconds}`;
}

function getEmoji(pet) {
  const status = pet.status;
  switch (status) {
    case STATUS.DEAD:
      return emj_dead;
    default:
      switch (getRating(pet)) {
        case RATING.HAPPY:
          return emj_happy;
        case RATING.SAD:
          return emj_dead;
        case RATING.TIRED:
          return emj_sleeping;
        case RATING.UPSET:
          return emj_tired;
        case RATING.HUNGRY:
          return emj_almostDead;
      }
  }
}

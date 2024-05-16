import Lottie from 'lottie-react';

import { Card, CardContent } from '@/components/ui/card';
import { useGameContext } from '../../context/GameContext';
import { timeLeft } from '../../lib/useGameLoop';

export default function Emoji({ emoji, petState }) {
  return (
    <div className="flex justify-center items-center rounded-md md:h-[494px] md:w-[494px] aspect-square dark:border-primary dark:border-4 dark:shadow-primary dark:shadow-lg shadow-2xl bg-inherit relative">
      <Lottie animationData={emoji} className="h-[200px] md:h-[300px]" />

      {petState && (
        <p className="absolute top-0 right-6 text-lg">
          {getTimeLeft(petState)}
        </p>
      )}
    </div>
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

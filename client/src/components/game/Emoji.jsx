import Lottie from 'lottie-react';

import { timeLeft } from '../../lib/useGameLoop';
import { Card, CardContent } from '../ui/card';
import { getTimeLeft } from '../../lib/Game';

export default function Emoji({ emoji, petState, page = 'game', isDead }) {
  if (page === 'game') {
    return (
      <div className="flex justify-center items-center rounded-md md:h-[494px] md:w-[494px] aspect-square dark:border-primary dark:border-4 dark:shadow-primary dark:shadow-lg shadow-2xl bg-inherit relative">
        <Lottie animationData={emoji} className="h-[200px] md:h-[300px]" />

        {petState && (
          <p className="absolute top-0 right-6 text-lg">
            {getTimeLeft(timeLeft(petState))}
          </p>
        )}
      </div>
    );
  }

  return (
    <Card className="dark:border-primary dark:border-4 dark:shadow-primary dark:shadow-lg shadow-2xl bg-inherit relative">
      <CardContent className="pt-6">
        <Lottie animationData={emoji} />
      </CardContent>
    </Card>
  );
}

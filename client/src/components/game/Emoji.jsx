import Lottie from 'lottie-react';

import { Card, CardContent } from '../ui/card';

export default function Emoji({ emoji, petState, page = 'game', isDead }) {
  if (page === 'game') {
    return (
      <div className="flex justify-center items-center rounded-md md:h-[550px] md:w-[550px] aspect-square dark:border-primary dark:border-4 dark:shadow-primary dark:shadow-lg shadow-2xl bg-inherit relative">
        <Lottie animationData={emoji} className="h-[200px] md:h-[300px]" />
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

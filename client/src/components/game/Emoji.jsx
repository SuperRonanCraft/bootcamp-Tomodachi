import Lottie from 'lottie-react';
import emj_almostDead from '../../assets/almostDead.json';
import emj_happy from '../../assets/happy.json';
import emj_dead from '../../assets/dead.json';
import emj_sleeping from '../../assets/sleep.json';
import emj_tired from '../../assets/almostDead.json';
import { Card, CardContent } from '@/components/ui/card';
import { usePetContext } from '../../context/PetContext';
import { RATING, getRating } from '../../lib/petStatus';

export default function Emoji() {
  const { petState } = usePetContext();
  const emoji = getEmoji(petState);
  return (
    <Card className="dark:border-primary dark:border-4 dark:shadow-primary dark:shadow-lg shadow-2xl bg-inherit">
      <CardContent className="pt-6">
        <Lottie animationData={emoji} />
      </CardContent>
    </Card>
  );
}

function getEmoji(pet) {
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

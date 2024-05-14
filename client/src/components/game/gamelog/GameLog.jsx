import Lottie from 'lottie-react';
import happy from '../../assets/happy.json';
import { Card, CardContent } from '@/components/ui/card';

export default function GameLog() {
  return (
    <Card className="dark:border-primary dark:border-4 dark:shadow-primary dark:shadow-lg shadow-2xl bg-inherit">
      <CardContent className="pt-6">
        <Lottie animationData={happy} />
      </CardContent>
    </Card>
  );
}

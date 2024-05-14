import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Food from './status/Food';
import Happiness from './status/Happiness';
import Energy from './status/Energy';
import { useGameContext } from '../../context/GameContext';
import { getRating } from '../../lib/petStatus';

export default function Status() {
  const { petState } = useGameContext();
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>{petState ? petState.name : 'Pet Name'}</CardTitle>
        <CardDescription>Pet Status {getRating(petState)}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col justify-between gap-2">
        <Food />
        <Happiness />
        <Energy />
      </CardContent>
    </Card>
  );
}

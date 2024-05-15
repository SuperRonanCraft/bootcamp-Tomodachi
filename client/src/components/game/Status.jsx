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
  const { petState, gameState } = useGameContext();
  return (
    <Card className="col-span-3 md:col-span-2">
      <CardHeader className="flex flex-row justify-between">
        <CardTitle>{gameState.name} </CardTitle>

        <CardDescription className="text-right">
          <p>Emotion: {getRating(petState)}</p>
          <p>Status: {petState.status}</p>
          <p>Multiplier x{gameState.tickMultiplier}</p>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col justify-between gap-2">
        <Food />
        <Happiness />
        <Energy />
      </CardContent>
    </Card>
  );
}

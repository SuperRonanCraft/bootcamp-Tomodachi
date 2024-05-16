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
import { getEmotion } from '../../lib/petStatus';
import { getTimeLeft } from '../../lib/Game';

export default function Status() {
  const { petState, gameState } = useGameContext();
  return (
    <Card className="col-span-3 md:col-span-2">
      <CardHeader className="flex flex-row justify-between">
        <CardTitle>{gameState.name}</CardTitle>

        <CardDescription className="text-right">
          <>Emotion: {getEmotion(petState)}</>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col justify-between gap-2">
        <Food food={petState.food} />
        <Happiness happiness={petState.happiness} />
        <Energy energy={petState.energy} />
        <p className="text-center">Time Alive</p>
        <p className="text-center">{getTimeLeft(petState.timeAlive)}</p>
      </CardContent>
    </Card>
  );
}

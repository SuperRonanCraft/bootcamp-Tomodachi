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
import usePetContext from '../../context/PetContext';

export default function Status() {
  const { petState } = usePetContext();
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>{petState?.name}</CardTitle>
        <CardDescription>Pet Status (idk if we want this)</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col justify-between gap-2">
        <Food />
        <Happiness />
        <Energy />
      </CardContent>
    </Card>
  );
}

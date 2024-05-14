import { Drumstick } from 'lucide-react';
import StatusBar from './StatusBar';
import { useGameContext } from '@/context/GameContext.jsx';

export default function Food() {
  const {
    petState: { food },
  } = useGameContext();
  return <StatusBar icon={<Drumstick />} value={food} tooltip="Food" />;
}

import { Sparkles } from 'lucide-react';
import StatusBar from './StatusBar';
import { useGameContext } from '@/context/GameContext.jsx';

export default function Happiness() {
  const {
    petState: { happiness },
  } = useGameContext();
  return (
    <StatusBar icon={<Sparkles />} value={happiness} tooltip="Happiness" />
  );
}

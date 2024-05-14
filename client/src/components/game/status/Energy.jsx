import { Zap } from 'lucide-react';
import StatusBar from './StatusBar';
import { useGameContext } from '@/context/GameContext.jsx';

export default function Energy() {
  const {
    petState: { energy },
  } = useGameContext();
  return <StatusBar icon={<Zap />} value={energy} tooltip="Energy" />;
}

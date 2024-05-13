import { Zap } from 'lucide-react';
import StatusBar from './StatusBar';
import { usePetContext } from '@/context/PetContext.jsx';

export default function Energy() {
  const {
    petState: { energy },
  } = usePetContext();
  return <StatusBar icon={<Zap />} value={energy} tooltip="Energy" />;
}

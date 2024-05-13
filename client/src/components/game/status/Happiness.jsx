import { Sparkles } from 'lucide-react';
import StatusBar from './StatusBar';
import { usePetContext } from '@/context/PetContext.jsx';

export default function Happiness() {
  const {
    petState: { happiness },
  } = usePetContext();
  return (
    <StatusBar icon={<Sparkles />} value={happiness} tooltip="Happiness" />
  );
}

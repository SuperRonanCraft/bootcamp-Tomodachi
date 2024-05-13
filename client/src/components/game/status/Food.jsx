import { Drumstick } from 'lucide-react';
import StatusBar from './StatusBar';
import { usePetContext } from '@/context/PetContext.jsx';

export default function Food() {
  const {
    petState: { food },
  } = usePetContext();
  return <StatusBar icon={<Drumstick />} value={food} tooltip="Food" />;
}

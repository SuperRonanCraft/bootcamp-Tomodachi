import { Drumstick } from 'lucide-react';
import StatusBar from './StatusBar';

export default function Food({ food }) {
  return (
    <StatusBar
      icon={<Drumstick />}
      value={food}
      tooltip="Food"
      indicatorClass="bg-orange-500"
    />
  );
}

import { UtensilsCrossed } from 'lucide-react';
import StatusBar from './StatusBar';

export default function Food({ food }) {
  return (
    <StatusBar
      icon={<UtensilsCrossed />}
      value={food}
      tooltip="Food"
      indicatorClass="bg-orange-500"
    />
  );
}

import { Zap } from 'lucide-react';
import StatusBar from './StatusBar';

export default function Energy({ energy }) {
  return (
    <StatusBar
      icon={<Zap />}
      value={energy}
      tooltip="Energy"
      indicatorClass="bg-blue-500"
    />
  );
}

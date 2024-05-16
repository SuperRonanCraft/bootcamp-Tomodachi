import { Sparkles } from 'lucide-react';
import StatusBar from './StatusBar';

export default function Happiness({ happiness }) {
  return (
    <StatusBar icon={<Sparkles />} value={happiness} tooltip="Happiness" />
  );
}

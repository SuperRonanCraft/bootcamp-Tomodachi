import { Gamepad2 } from 'lucide-react';
import StatusBar from './StatusBar';

export default function Happiness({ happiness }) {
  return (
    <StatusBar icon={<Gamepad2 />} value={happiness} tooltip="Happiness" />
  );
}
``;

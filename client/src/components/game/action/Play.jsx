import ActionButton from './ActionButton';
import { Gamepad2 } from 'lucide-react';

export default function Play() {
  // call the game logic hook here and add onclick to buttons (for alain)
  return (
    <ActionButton
      onClick={() => console.log('test')}
      text="Play"
      icon={<Gamepad2 />}
    />
  );
}

import ActionButton from './ActionButton';
import { Moon } from 'lucide-react';

export default function Sleep() {
  // call the game logic hook here and add onclick to buttons (for alain)
  return (
    <ActionButton
      onClick={() => console.log('test')}
      text="Sleep"
      icon={<Moon />}
    />
  );
}

import { UtensilsCrossed } from 'lucide-react';
import ActionButton from './ActionButton';

export default function Feed() {
  // call the game logic hook here and add onclick to buttons (for alain)

  return (
    <ActionButton
      onClick={() => console.log('test')}
      text="Feed"
      icon={<UtensilsCrossed />}
    />
  );
}

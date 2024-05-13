import { UtensilsCrossed } from 'lucide-react';
import ActionButton from './ActionButton';
import useGameLogic from '../../../lib/useGameHook';

export default function Feed() {
  const { feed } = useGameLogic();

  // call the game logic hook here and add onclick to buttons (for alain)

  return <ActionButton onClick={feed} text="Feed" icon={<UtensilsCrossed />} />;
}

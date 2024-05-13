import { Button } from '@/components/ui/button';
import useGameLogic from '../../../lib/useGameHook';

export default function Feed() {
  const { feed } = useGameLogic();

  // call the game logic hook here and add onclick to buttons (for alain)
  return (
    <Button size="sm" onClick={feed}>
      Feed
    </Button>
  );
}

import useGameHook from '../../../lib/useGameHook';
import ActionButton from './ActionButton';
import { Gamepad2 } from 'lucide-react';

export default function Play(props) {
  const { play } = useGameHook();
  // call the game logic hook here and add onclick to buttons (for alain)
  return (
    <ActionButton onClick={play} text="Play" icon={<Gamepad2 />} {...props} />
  );
}

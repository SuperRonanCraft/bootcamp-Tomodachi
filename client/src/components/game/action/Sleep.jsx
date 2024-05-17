import useGameHook from '../../../lib/useGameHook';
import ActionButton from './ActionButton';
import { Moon } from 'lucide-react';

export default function Sleep(props) {
  const { sleep } = useGameHook();
  // call the game logic hook here and add onclick to buttons (for alain)
  return (
    <ActionButton onClick={sleep} text="Sleep" icon={<Moon />} {...props} />
  );
}

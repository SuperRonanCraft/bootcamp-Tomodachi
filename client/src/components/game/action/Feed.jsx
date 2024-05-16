import { UtensilsCrossed } from 'lucide-react';
import ActionButton from './ActionButton';
import useGameHook from '../../../lib/useGameHook';

export default function Feed(props) {
  const { feed } = useGameHook();

  function handleFeed() {
    feed();
  }

  return (
    <>
      <div className="relative">
        <ActionButton
          onClick={handleFeed}
          text="Feed"
          icon={<UtensilsCrossed />}
          {...props}
        />
      </div>
    </>
  );
}

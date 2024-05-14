import { BeerOff, UtensilsCrossed, X } from 'lucide-react';
import ActionButton from './ActionButton';
import { useState } from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import useGameHook from '../../../lib/useGameHook';

export default function Feed() {
  const { feed } = useGameHook();

  // call the game logic hook here and add onclick to buttons (for alain)
  const [foodCount, setFoodCount] = useState(10);

  function handleFeed() {
    if (foodCount <= 0) {
      toast.error('No food', {
        description: 'Please wait to replenish food',
        icon: <BeerOff />,
        cancel: {
          label: (
            <Button size="icon" variant="ghost">
              <X className="w-6 h-6 text-foreground" />
            </Button>
          ),
          onClick: () => {},
        },
        cancelButtonStyle: {
          backgroundColor: 'inherit',
        },
      });
      return;
    }
    feed();
    setFoodCount((prev) => prev - 1);
  }

  return (
    <>
      <div className="relative">
        <div className="absolute flex justify-center items-center -top-2 -right-2 rounded-full h-6 w-6 bg-accent">
          <p className="text-xs">{foodCount}</p>
        </div>
        <ActionButton
          onClick={handleFeed}
          text="Feed"
          icon={<UtensilsCrossed />}
        />
      </div>
    </>
  );
}

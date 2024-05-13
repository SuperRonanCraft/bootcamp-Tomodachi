import { Button } from '@/components/ui/button';

export default function Sleep() {
  // call the game logic hook here and add onclick to buttons (for alain)
  return (
    <Button
      size="sm"
      onClick={() => {
        console.log('add the game logic function here');
      }}
    >
      Sleep
    </Button>
  );
}

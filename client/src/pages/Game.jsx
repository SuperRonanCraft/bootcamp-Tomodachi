import PetProvider from '../context/PetContext';
import GameTestValues from '../components/GameTestValues';

export default function Game() {
  return (
    <PetProvider>
      <GameTestValues />
    </PetProvider>
  );
}

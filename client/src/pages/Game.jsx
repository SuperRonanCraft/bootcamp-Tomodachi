import PetProvider from '../context/PetContext';
import GameTestValues from '../components/GameTestValues';
import GameDashboard from '../components/game/GameDashboard';

export default function Game() {
  return (
    <PetProvider>
      <GameDashboard />
      <GameTestValues />
    </PetProvider>
  );
}

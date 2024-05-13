import PetProvider from '../context/PetContext';
import GameDashboard from '../components/game/GameDashboard';

export default function Game() {
  return (
    <PetProvider>
      <GameDashboard />
    </PetProvider>
  );
}

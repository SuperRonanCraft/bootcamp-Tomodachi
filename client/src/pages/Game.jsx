import GameProvider from '../context/GameContext';
import GameDashboard from '../components/game/GameDashboard';

export default function Game() {
  return (
    <GameProvider>
      <GameDashboard />
    </GameProvider>
  );
}

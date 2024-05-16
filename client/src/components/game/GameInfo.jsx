import { getEmoji } from '../../lib/petStatus';
import Emoji from '../../components/game/Emoji';
export default function GameInfo({ name, energy, food, happiness, status }) {
  return (
    <div className="grid grid-cols-4 gap-4 w-1/2 mx-auto">
      <div>
        <Emoji emotion={getEmoji({ status, energy, food, happiness })} />
      </div>
      <p>{energy}</p>
      <p>{food}</p>
      <p>{happiness}</p>
    </div>
  );
}

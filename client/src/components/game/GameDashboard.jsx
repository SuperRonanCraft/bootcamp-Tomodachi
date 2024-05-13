import Emoji from './Emoji';
import Status from './Status';

export default function GameDashboard() {
  return (
    <div className="flex flex-col gap-4 w-fit mx-auto justify-center items-center">
      <Emoji />
      <Status />
    </div>
  );
}

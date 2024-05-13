import Action from './action/Action';
import Emoji from './Emoji';
import Status from './Status';

export default function GameDashboard() {
  return (
    <div className="flex flex-col gap-4 w-fit mx-auto h-screen justify-center items-center">
      <Emoji />
      <div className="grid grid-cols-3 gap-4 w-full">
        <Status />
        <Action />
      </div>
    </div>
  );
}

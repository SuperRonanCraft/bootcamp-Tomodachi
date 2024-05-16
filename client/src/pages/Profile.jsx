import auth from '../utils/auth';
import ChangeUsername from '../components/ChangeUsername';
import CreateGame from '../components/CreateGame';
import DisplayGames from '../components/game/DisplayGames';

const Profile = () => {
  return (
    <div className="">
      <div className="text-center">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl text-center my-8 bg-gradient-to-r from-violet-600 to-rose-400 text-transparent bg-clip-text mt-32">
          Welcome {auth.getProfile().data.username} to Your Portfolio
        </h1>
        {/* Changing Username */}
        <ChangeUsername
          variant="outline"
          className="rounded-lg border drop-shadow-md hover:drop-shadow-xl dark:border-primary dark:border-3 dark:shadow-primary dark:shadow-md m-8"
        />
        <DisplayGames />
      </div>
    </div>
  );
};
export default Profile;

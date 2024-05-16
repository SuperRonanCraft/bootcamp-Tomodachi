import auth from '../utils/auth';
import ChangeUsername from '../components/ChangeUsername';
import DisplayGames from '../components/game/DisplayGames';

const ProfileDisplayer = ({ user }) => {
  return (
    <div className="">
      <div className="text-center">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl text-center my-8 bg-gradient-to-r from-violet-600 to-rose-400 text-transparent bg-clip-text mt-32">
          {auth.getProfile().data._id !== user._id
            ? `Welcome to ${user.username}'s Profile`
            : `Welcome ${auth.getProfile().data.username} to Your Profile`}
        </h1>
        {/* Changing Username */}
        {!user && (
          <ChangeUsername
            variant="outline"
            className="rounded-lg border drop-shadow-md hover:drop-shadow-xl dark:border-primary dark:border-3 dark:shadow-primary dark:shadow-md m-8"
          />
        )}
        <DisplayGames user={user} />
      </div>
    </div>
  );
};
export default ProfileDisplayer;

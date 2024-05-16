import { Button } from '@/components/ui/button';
import auth from '../utils/auth';
import ChangeUsername from '../components/ChangeUsername';

// import NewGameForm from '../components/NewGameForm';
const Profile = () => {
  return (
    <>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl text-center my-8 bg-gradient-to-r from-violet-600 to-rose-400 text-transparent bg-clip-text mt-32">
        Welcome {auth.getProfile().data.username} to Your Portfolio
      </h1>
      <ChangeUsername
        variant="outline"
        className="rounded-lg border drop-shadow-md hover:drop-shadow-xl dark:border-primary dark:border-3 dark:shadow-primary dark:shadow-md m-8"
      />
      {/* <NewGameForm /> */}
      <Button
        variant="outline"
        className="rounded-lg border drop-shadow-md hover:drop-shadow-xl dark:border-primary dark:border-3 dark:shadow-primary dark:shadow-md m-8"
      >
        Create a New Tomodachi
      </Button>
      <Button
        variant="outline"
        className="rounded-lg border drop-shadow-md hover:drop-shadow-xl dark:border-primary dark:border-3 dark:shadow-primary dark:shadow-md m-8"
      >
        Your Tomodachis
        {/* preview of each emoji and there bars */}
        {/* i want a Carousel */}
      </Button>

      <Button
        variant="outline"
        className="rounded-lg border drop-shadow-md hover:drop-shadow-xl dark:border-primary dark:border-3 dark:shadow-primary dark:shadow-md m-8"
      >
        Delete a Game
      </Button>
    </>
  );
};
export default Profile;

// change username
// delete a game
// dashboard saying how long you've been with us

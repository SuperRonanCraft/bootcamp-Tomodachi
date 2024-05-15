import { Link } from 'react-router-dom';
import { ModeToggle } from '../ModeToggle';

export default function Nav() {
  return (
    <div>
      <main>
        {/* Position the nav bar absolutely with left, right, and top set to 0 */}
        <nav className="bg-blue-500 absolute left-0 right-0 top-0 p-4 bg-white shadow-md p-4">
          {/* Use flex to align items and justify-between to space out the links and theme toggle */}
          <ul className="flex items-center justify-between w-full">
            <div className="flex space-x-4"></div>
            <li>
              <Link to="/landing">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/leaderboard">Leaderboard</Link>
            </li>
            <li className="absolute right-0 z-10 mt-2 w-48">
              <Link to="/signup"> Sign up </Link>
              <Link to="/login"> Login </Link>
            </li>
          </ul>
          <ModeToggle />
        </nav>
      </main>
    </div>
  );
}

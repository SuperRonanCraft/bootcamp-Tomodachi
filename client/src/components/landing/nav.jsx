import { Link } from 'react-router-dom';
import { ModeToggle } from '../ModeToggle';

export default function Nav() {
  return (
    <div>
      <main>
        {/* Add Tailwind CSS classes for primary color background and */}
        <nav>
          <ul className="flex space-x-4 m-4">
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

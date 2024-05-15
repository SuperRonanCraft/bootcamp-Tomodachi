import { Link } from 'react-router-dom';
import { ModeToggle } from '../ModeToggle';

export default function Nav() {
  return (
    <div>
      <main>
        {/* Position the nav bar absolutely with left, right, and top set to 0 */}
        <nav className="absolute left-0 right-0 top-0 p-4 bg-white shadow-md w-full">
          {/* Use flex to align items and justify-between to space out the links and theme toggle */}
          <ul className="flex items-center justify-between w-full">
            {/* Group links in a flex container with horizontal spacing */}
            <div className="flex space-x-4">
              <li>
                <Link to="/landing" className="text-black">Home</Link>
              </li>
              <li>
                <Link to="/profile" className="text-black">Profile</Link>
              </li>
              <li>
                <Link to="/leaderboard" className="text-black">Leaderboard</Link>
              </li>
            </div>
            {/* Empty spacer to push Sign Up and Log In links to the right */}
            <div className="flex-grow" />
            {/* Place Sign Up and Log In links to the right side */}
            <div className="flex space-x-4">
              <li>
                <Link to="/signup" className="text-black">Sign up</Link>
              </li>
              <li>
                <Link to="/login" className="text-black">Login</Link>
              </li>
            </div>
            {/* Place ModeToggle to the right side */}
            <div>
              <ModeToggle />
            </div>
          </ul>
        </nav>
      </main>
    </div>
  );
}
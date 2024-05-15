import { Link } from 'react-router-dom';
import { ModeToggle } from '../ModeToggle';
import AuthService from '../../utils/auth';
import { Button } from '../ui/button';

export default function Nav() {
  return (
    <div>
      <main>
        {/* Position the nav bar absolutely with left, right, and top set to 0 */}
        <nav className="absolute left-0 right-0 top-0 p-4 bg-foreground shadow-md w-full">
          {/* Use flex to align items and justify-between to space out the links and theme toggle */}
          <ul className="flex items-center justify-between w-full">
            {/* Group links in a flex container with horizontal spacing */}
            <div className="flex gap-4">
              <li>
                <Link to="/landing" className="text-background">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/leaderboard" className="text-background">
                  Leaderboard
                </Link>
              </li>
            </div>
            {/* Empty spacer to push Sign Up and Log In links to the right */}
            <div className="flex-grow" />
            {/* Place Sign Up and Log In links to the right side */}
            <div className="flex gap-4 items-center">
              {AuthService.loggedIn() ? (
                <>
                  <li>
                    <Link to="/profile" className="text-background">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Button onClick={AuthService.logout}>Logout</Button>
                  </li>
                </>
              ) : (
                <>
                  <li className="ml-1">
                    <Link to="/signup" className="text-background">
                      Sign up
                    </Link>
                  </li>
                  <li className="ml-1">
                    <Link to="/login" className="text-background">
                      Login
                    </Link>
                  </li>
                </>
              )}
              <ModeToggle />
            </div>
            {/* Place ModeToggle to the right side */}
          </ul>
        </nav>
      </main>
    </div>
  );
}

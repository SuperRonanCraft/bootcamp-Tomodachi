import { Link } from 'react-router-dom';
import { ModeToggle } from './ModeToggle';

export default function Nav() {
  return (
    <div>
      <main>
        <nav>
          <ul className="flex flex-row">
            <li>
              <Link to="/landing">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/leaderboard">Leaderboard</Link>
            </li>
          </ul>
          <ModeToggle />
        </nav>
      </main>
    </div>
  );
}

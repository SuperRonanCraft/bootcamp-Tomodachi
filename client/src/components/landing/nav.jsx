import { Link, useLocation } from 'react-router-dom';
import { ModeToggle } from '../ModeToggle';
import AuthService from '../../utils/auth';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { Menu } from 'lucide-react';
import { useEffect, useState } from 'react';
import NavItem from './NavItem';

export default function Nav() {
  const [sheetOpen, setSheetOpen] = useState(false);

  const location = useLocation();
  useEffect(() => {
    setSheetOpen(false);
  }, [location]);

  const navLoggedIn = [
    { title: 'Play', link: '/' },
    { title: 'Home', link: '/landing' },
    { title: 'Leaderboard', link: '/leaderboard' },
  ];

  return (
    <div>
      <main>
        {/* Position the nav bar absolutely with left, right, and top set to 0 */}
        <nav className="absolute left-0 right-0 top-0 p-4 bg-foreground shadow-md w-full">
          {/* Use flex to align items and justify-between to space out the links and theme toggle */}
          <ul className="flex items-center justify-between w-full">
            <div className="flex gap-4">
              {navLoggedIn.map((item) => (
                <NavItem key={item.link} {...item} />
              ))}
            </div>
            {/* Group links in a flex container with horizontal spacing */}
            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="shrink-0 md:hidden"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>

              <SheetContent side="left">
                <nav className="grid gap-6 text-lg font-medium">
                  {navLoggedIn.map((item) => (
                    <NavItem key={item.link} {...item} />
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
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

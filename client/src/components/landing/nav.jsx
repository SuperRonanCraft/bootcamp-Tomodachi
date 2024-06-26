import { useLocation } from 'react-router-dom';
import { ModeToggle } from '../ModeToggle';
import auth from '../../utils/auth';
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

  const loc = useLocation();

  // console.log(loc);
  const navItems = [
    { title: 'Home', link: '/landing' },

    { title: 'Leaderboard', link: '/leaderboard' },
    {
      title: 'Play',
      link: auth.loggedIn() ? '/play' : '/login',
      show:
        loc.pathname === '/landing' ||
        loc.pathname === '/leaderboard' ||
        loc.pathname === '/profile' ||
        loc.pathname === '/signup',
    },
  ];
  return (
    <div className="fixed left-0 right-0 top-0 z-10">
      <main>
        {/* Position the nav bar absolutely with left, right, and top set to 0 */}
        <nav className="p-2 md:pl-8 bg-foreground shadow-md w-full">
          {/* Use flex to align items and justify-between to space out the links and theme toggle */}

          <ul className="flex items-center justify-between w-full">
            <div className="hidden flex-col font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
              {navItems.map((item) => {
                if (item.show || item.show === undefined)
                  return <NavItem key={item.link} {...item} />;
                else <></>;
              })}
            </div>
            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <Button size="icon" className="shrink-0 md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>

              <SheetContent side="left">
                <nav className="grid gap-6 text-lg font-medium">
                  {navItems.map((item) => {
                    if (item.show || item.show === undefined)
                      return (
                        <NavItem key={item.link} {...item} isSheet={true} />
                      );
                    else <></>;
                  })}
                </nav>
              </SheetContent>
            </Sheet>
            {/* Group links in a flex container with horizontal spacing */}

            {/* Empty spacer to push Sign Up and Log In links to the right */}
            <div className="flex-grow" />
            {/* Place Sign Up and Log In links to the right side */}
            <div className="flex gap-4 items-center font-medium">
              {auth.loggedIn() ? (
                <>
                  <NavItem link={'/profile'} title={'Profile'} />
                  <Button onClick={auth.logout} variant="logout">
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <NavItem link={'/signup'} title={'Sign Up'} />
                  <NavItem link={'/login'} title={'Login'} />
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

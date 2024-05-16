import { Link, useLocation } from 'react-router-dom';
import { SheetClose } from '../ui/sheet';

// eslint-disable-next-line react/prop-types
function NavItem({ title, link, isSheet = false }) {
  let url = useLocation().pathname;
  // console.log(url, link);
  return (
    // className={`${window.location.pathname === link ? 'active' : ''}`}

    <Link
      to={link}
      className={`md:text-base ${
        url === link
          ? 'active text-red-500'
          : `${isSheet ? 'text-foreground' : 'text-secondary'}`
      }
      } transition-all duration-300 ease-in-out`}
    >
      {title ? title : link}
    </Link>
  );
}

export default NavItem;

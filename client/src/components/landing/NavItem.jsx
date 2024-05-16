import { Link, useLocation } from 'react-router-dom';
import { SheetClose } from '../ui/sheet';

// eslint-disable-next-line react/prop-types
function NavItem({ title, link }) {
  let url = useLocation().pathname;
  // console.log(url, link);
  return (
    // className={`${window.location.pathname === link ? 'active' : ''}`}

    <Link
      to={link}
      className={`md:text-base ${url === link ? 'active' : ''} text-background`}
    >
      {title ? title : link}
    </Link>
  );
}

export default NavItem;

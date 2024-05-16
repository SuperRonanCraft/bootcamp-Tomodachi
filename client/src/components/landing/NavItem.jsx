import { Link, useLocation } from 'react-router-dom';

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
          ? 'active text-primary'
          : `${isSheet ? 'text-foreground' : 'text-secondary'}`
      }
      } transition-all duration-300 ease-in-out hover:text-primary/80`}
    >
      {title ? title : link}
    </Link>
  );
}

export default NavItem;

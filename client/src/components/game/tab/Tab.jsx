import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function Tab({ name, link }) {
  return (
    <Button variant="outline">
      <Link to={link}>{name}</Link>
    </Button>
  );
}

import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function Tab({ name, gameId }) {
  const { gameId: paramsId } = useParams();

  const isSelected = gameId === paramsId;

  return (
    <Button variant={`${isSelected ? '' : 'outline'}`}>
      <Link to={`/${gameId}`}>{name}</Link>
    </Button>
  );
}

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';

import NewGameForm from '@/components/NewGameForm';
import auth from '../../utils/auth';
import { Navigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../../utils/queries';

export default function EmptyGame() {
  const loggedIn = auth.loggedIn();
  if (!loggedIn) return <Navigate to={'/landing'} />;

  const { loading, data } = useQuery(QUERY_USER, {
    variables: { userId: auth.getProfile().data._id },
  });

  if (loading) return <h1>Loading...</h1>;

  if (data.me.gameData.length > 0)
    return <Navigate to={`/${data.me.gameData[0]._id}`} replace />;
  return <Navigate to={'/profile'} />;
}

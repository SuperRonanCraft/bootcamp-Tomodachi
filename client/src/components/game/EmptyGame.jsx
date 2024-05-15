import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';

import NewGameForm from '@/components/NewGameForm';
import AuthService from '../../utils/auth';
import { Navigate } from 'react-router-dom';

export default function EmptyGame() {
  if (AuthService.loggedIn()) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Card className="min-w-[400px]">
          <CardHeader>
            <CardTitle>You have no games</CardTitle>
            <CardDescription>Create a new Game</CardDescription>
          </CardHeader>
          <CardContent>
            <NewGameForm />
          </CardContent>
        </Card>
      </div>
    );
  } else {
    return <Navigate to={'/landing'} />;
  }
}

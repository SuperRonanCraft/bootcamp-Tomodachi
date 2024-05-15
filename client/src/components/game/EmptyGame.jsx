import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';

import { Input } from '@/components/ui/input';

import { Button } from '@/components/ui/button';

import { useMutation } from '@apollo/client';

import { CREATE_GAME_DATA } from '@/utils/mutations';
import { QUERY_USER } from '@/utils/queries';

export default function EmptyGame() {
  const [addGame, { loading }] = useMutation(CREATE_GAME_DATA, {
    refetchQueries: [QUERY_USER, 'User'],
  });

  function handleAddGame() {}

  return (
    <div className="flex justify-center items-center h-screen">
      <Card>
        <CardHeader>
          <CardTitle>You have no games</CardTitle>
          <CardDescription>Click the button to create a game</CardDescription>
        </CardHeader>
        <CardContent>
          <Label>Name</Label>
          <Input />
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={handleAddGame}>
            Press Me!
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

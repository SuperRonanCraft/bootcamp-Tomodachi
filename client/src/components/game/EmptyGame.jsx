import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';

import { Button } from '@/components/ui/button';

export default function EmptyGame() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card>
        <CardHeader>
          <CardTitle>You have no games</CardTitle>
          <CardDescription>Click the button to create a game</CardDescription>
        </CardHeader>
        <CardFooter>
          <Button className="w-full">Press Me!</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

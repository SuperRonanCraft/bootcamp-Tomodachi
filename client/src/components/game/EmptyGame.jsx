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

import NewGameForm from '@/components/NewGameForm';

export default function EmptyGame() {
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
}

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Progress } from '@/components/ui/progress';

export default function Status() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Pet Name</CardTitle>
        <CardDescription>Pet Status (idk if we want this)</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <Progress value={20} />
        <Progress value={50} />
        <Progress value={80} />
      </CardContent>
    </Card>
  );
}

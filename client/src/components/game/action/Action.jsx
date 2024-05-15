import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import Feed from '@/components/game/action/Feed';
import Play from '@/components/game/action/Play';
import Sleep from '@/components/game/action/Sleep';

export default function Action() {
  return (
    <Card className="col-span-3 md:col-span-1">
      <CardHeader>
        <CardTitle>Actions</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <Feed />
        <Play />
        <Sleep />
      </CardContent>
    </Card>
  );
}

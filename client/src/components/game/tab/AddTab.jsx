import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

import NewGameForm from '@/components/NewGameForm';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export default function AddTab() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon" variant="outline">
          <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a new game</DialogTitle>
          <DialogDescription>
            Type the name of your new Tomodachi below
          </DialogDescription>
        </DialogHeader>
        <NewGameForm />
      </DialogContent>
    </Dialog>
  );
}

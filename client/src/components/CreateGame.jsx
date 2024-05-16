import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import NewGameForm from '../components/NewGameForm';
import { useState } from 'react';

const ChangeUsername = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="rounded-lg border drop-shadow-md hover:drop-shadow-xl dark:border-primary dark:border-3 dark:shadow-primary dark:shadow-md m-8"
        >
          Create New Tomodachi
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a new game</DialogTitle>
          <DialogDescription>
            Type the name of your new Tomodachi below
          </DialogDescription>
        </DialogHeader>
        <NewGameForm setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
};

export default ChangeUsername;

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { UPDATE_USER } from '../utils/mutations';
import auth from '../utils/auth';
import { useMutation } from '@apollo/client';
import { useState } from 'react';

const ChangeUsername = () => {
  const [open, setOpen] = useState(false);
  const [updateUsername] = useMutation(UPDATE_USER);
  const submitHandler = () => {
    const currentUsernameField = document.getElementById('currentName').value;
    const newUsernameField = document.getElementById('newUsername').value;
    // console.log(
    //   auth.getProfile().data.username,
    //   currentUsernameField,
    //   newUsernameField
    // );
    if (auth.getProfile().data.username !== currentUsernameField) {
      return;
    }
    setOpen(false);
    const data = {
      id: auth.getProfile().data._id,
      username: newUsernameField,
    };
    // console.log(data);
    updateUsername({
      variables: data,
    });
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="rounded-lg border drop-shadow-md hover:drop-shadow-xl dark:border-primary dark:border-3 dark:shadow-primary dark:shadow-md m-8"
        >
          Edit Username
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit username</DialogTitle>
          <DialogDescription>
            Make changes to your username here. Click save when you are done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Current Username
            </Label>
            <Input id="currentName" placeholder="name" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              New Username
            </Label>
            <Input
              id="newUsername"
              placeholder="new username"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={submitHandler}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ChangeUsername;

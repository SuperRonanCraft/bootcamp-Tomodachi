import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { CREATE_GAME_DATA } from '@/utils/mutations';
import { QUERY_USER } from '@/utils/queries';
import { useMutation } from '@apollo/client';
import auth from '@/utils/auth';

const formSchema = z.object({
  name: z
    .string()
    .min(1, {
      message: 'Name must be at least 1 character',
    })
    .max(12, {
      message: 'Name has to be under 12 characters',
    }),
});

export default function NewGameForm({ setOpen }) {
  const [createGameData, { loading }] = useMutation(CREATE_GAME_DATA, {
    refetchQueries: [{ query: QUERY_USER }],
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
    },
  });

  function onSubmit({ name }) {
    // console.log(name, auth.getProfile().data._id);
    createGameData({ variables: { name, userId: auth.getProfile().data._id } });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Tomodachi Name" {...field} />
              </FormControl>
              <FormDescription>This is name of your tomodachi</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" onClick={() => setOpen(false)}>
          Click Me!
        </Button>
      </form>
    </Form>
  );
}

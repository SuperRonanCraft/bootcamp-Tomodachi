import { useState } from 'react';
import { useMutation } from '@apollo/client';
import AuthService from '../utils/auth';
import React from 'react';
import { LOGIN } from '../utils/mutations';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
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

const formSchema = z.object({
  username: z.string().min(3, {
    message: 'Username must be at least 3 characters.',
  }),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters.',
  }),
});

const LoginForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const [loginUser, { loading, error }] = useMutation(LOGIN);

  const onSubmit = async (formData) => {
    try {
      const { data } = await loginUser({
        variables: formData,
      });

      console.log(formData);
      AuthService.login(data.login.token);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  //A react form for the user to fill out that we will export from this page
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="gap-8 mx-8 w-[600px] flex flex-col"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Username" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              {form.formState.errors.username && (
                <FormMessage>
                  {form.formState.errors.username.message}
                </FormMessage>
              )}
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Password" {...field} />
              </FormControl>
              <FormDescription>This is your password.</FormDescription>
              {form.formState.errors.password && (
                <FormMessage>
                  {form.formState.errors.password.message}
                </FormMessage>
              )}
            </FormItem>
          )}
        />
        <div className="flex justify-center">
          <Button className="w-[200px] " type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </Button>
        </div>
        {error && <p>Error: {error.message}</p>}
      </form>
    </Form>
  );
};

export default LoginForm;

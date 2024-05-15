'use client';

import { useState } from 'react';
import { useMutation } from '@apollo/client';
import AuthService from './utils/auth';
import React from 'react';
import { SIGN_UP_USER } from './utils/mutations';
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

const SignUpForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const [signUpUser, { loading, error }] = useMutation(SIGN_UP_USER);

  const handleFormSubmit = async (formData) => {
    try {
      const { data } = await signUpUser({
        variables: formData,
      });

      console.log(data);
      AuthService.login(data.addUser.token);
    } catch (error) {
      console.error('Sign up error:', error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default SignUpForm;

import { cn } from '@/lib/utils';

export default function Block({ className, ...props }) {
  return (
    <div
      className={cn('border rounded-md p-6 flex items-center', className)}
      {...props}
    />
  );
}

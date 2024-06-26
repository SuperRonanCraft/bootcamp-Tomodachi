import { Button } from '@/components/ui/button';

export default function ActionButton({
  onClick,
  text,
  icon,
  isDead,
  ...props
}) {
  return (
    <Button
      className={`group w-full ${isDead ? 'opacity-60' : ''}`}
      onClick={onClick}
      {...props}
    >
      <div className="relative hidden md:block">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100 group-hover:rotate-[360deg] group-hover:opacity-0 transition">
          {icon}
        </div>
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition">
          {text}
        </p>
      </div>
      <p className="block md:hidden">{text}</p>
    </Button>
  );
}

import { Progress } from '@/components/ui/progress';

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { useEffect, useState } from 'react';

export default function StatusBar({ icon, value, tooltip, indicatorClass }) {
  const [showJuice, setShowJuice] = useState(false);
  const [prevValue, setPrevValue] = useState(value);

  useEffect(() => {
    setShowJuice(true);
    const showTimeout = setTimeout(() => {
      setShowJuice(false);
    }, 500);

    const valueTimeout = setTimeout(() => {
      setPrevValue(value);
    }, 600);

    return () => {
      clearTimeout(showTimeout);
      clearTimeout(valueTimeout);
    };
  }, [value]);

  const juiceNum = value - prevValue;

  return (
    <div className="flex flex-row items-center gap-3 relative">
      <Tooltip>
        <TooltipTrigger>{icon}</TooltipTrigger>
        <TooltipContent side="left">
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>

      <Progress value={value} indicatorClass={indicatorClass} />

      <p
        className={`absolute -right-2 -top-2 font-semibold ${
          juiceNum >= 0 ? 'text-green-500' : 'text-red-500'
        } opacity-0 scale-100 ${
          showJuice && 'opacity-100 scale-150'
        } transition`}
      >
        {juiceNum >= 0 ? '+' + juiceNum : juiceNum}
      </p>
    </div>
  );
}

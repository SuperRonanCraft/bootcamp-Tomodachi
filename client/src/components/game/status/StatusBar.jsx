import { Progress } from '@/components/ui/progress';

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export default function StatusBar({ icon, value, tooltip, indicatorClass }) {
  return (
    <div className="flex flex-row items-center gap-3">
      <Tooltip>
        <TooltipTrigger>{icon}</TooltipTrigger>
        <TooltipContent side="left">
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>

      <Progress value={value} indicatorClass={indicatorClass} />
    </div>
  );
}

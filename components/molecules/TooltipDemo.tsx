import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export type TooltipData = {
  buttonText: string;
  tooltipText: string | React.ReactNode;
  tooltipClass?: string;
  buttonClass?: string;
  side?: "top" | "right" | "bottom" | "left";
};

function TooltipDemo({ tooltipData }: { tooltipData: TooltipData }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className={tooltipData.buttonClass} asChild>
          <Button variant="outline">{tooltipData.buttonText}</Button>
        </TooltipTrigger>
        <TooltipContent
          side={tooltipData.side}
          className={tooltipData.tooltipClass}
        >
          <p>{tooltipData.tooltipText}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
export default TooltipDemo;

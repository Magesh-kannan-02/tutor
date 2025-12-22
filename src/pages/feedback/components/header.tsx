import { ArrowLeftIcon } from "@/assets";
import { cn } from "@/lib/utils";

interface FeedbackHeaderProps {
  className?: string;
  onBack: () => void;
}

export const FeedbackHeader = ({ className, onBack }: FeedbackHeaderProps) => {
  return <div className={cn(className,"flex cursor-pointer py-2.5 items-center w-[100%]")}>
    <button onClick={onBack}>

    <ArrowLeftIcon  />
    </button>
  </div>;
};

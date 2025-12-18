import { cn } from "@/lib/utils";
import TickImg from "@/assets/images/greenTick.png";
interface TickContentProps {
  className?: string;
  text?: string;
  textClassName?: string;
}

export const TickContent = ({ className, text, textClassName }: TickContentProps) => {
  return (
    <div className={cn(className, "flex flex-col items-center gap-[1rem]")}>
      <img src={TickImg} alt="tick" />
      <p className={cn(textClassName, "text-body5 px-4 text-center  font-sans text-secondary-150")}>{text}</p>
    </div>
  );
};

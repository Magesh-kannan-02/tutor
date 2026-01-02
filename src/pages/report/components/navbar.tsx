import { ArrowLeftIcon } from "@/assets";
import { cn } from "@/lib/utils";

export interface NavBarProps {
  id?: string;
  title?: string;
  onBack?: () => void;
  baseclassName?: string;
  textclassName?: string;
  iconClassName?: string;
}

export const ReportNavbar = ({
  id,
  title,
  onBack,
  baseclassName,
  textclassName,
  iconClassName,
  ...rest
}: NavBarProps) => {
  return (
    <div
      id={id}
      className={cn(
        "relative flex items-center w-full h-[20px]  pb-1",
        baseclassName
      )}
      {...rest}
    >
      {/* Left Arrow */}
      <button
        onClick={onBack}
        className={cn(
          "absolute left-0 flex items-center",
          iconClassName
        )}
      >
        <ArrowLeftIcon />
      </button>

      {/* Center Title */}
      <p
        className={cn(
          "mx-auto font-sans font-semibold text-body4 !text-content1-foreground text-center",
          textclassName
        )}
      >
        {title}
      </p>
    </div>
  );
};

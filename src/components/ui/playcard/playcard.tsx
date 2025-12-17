import { cn } from "@/lib/utils";
import { iconMapping } from "@/utils";

interface WordscardProps {
  title?: string;
  className?: string;
  titleClassname?: string;
  iconClassname?: string;
  imageClassname?: string;

  icontype?: string;     
  iconName?: string;

  onClick?: () => void;  
  iconPosition?: "start" | "end";  
}

export const Playcard = ({
  title = "Words per minute",
  className,
  titleClassname,
  iconClassname,
  icontype,
  imageClassname,
  iconName = "",
  onClick,
  iconPosition = "end",            
}: WordscardProps) => {

  const Icon = icontype ? iconMapping[icontype] : null;

  const IconElement = Icon ? (
    Icon.type === "svg" ? (
      <div className={cn("w-7 h-7 grid place-items-center", iconClassname)}>
        <Icon.icon />
      </div>
    ) : Icon.type === "image" ? (
      <img
        src={Icon.icon as string}
        alt={iconName}
        className={cn("w-7 h-7 object-contain", imageClassname)}
      />
    ) : null
  ) : null;

  return (
    <div
      onClick={() => onClick?.()}
      className={cn(
        "w-full rounded-xl px-5 py-3",
        "bg-transparent border border-content2 backdrop-blur-2xl",
        "flex items-center",
        className
      )}
    >
      <div className="flex items-center justify-between w-full">

        {/* ICON ON START */}
        {iconPosition === "start" && (
          <div className="flex-shrink-0 mr-4">{IconElement}</div>
        )}

        {/* TITLE */}
        <div className="flex-1 min-w-0">
          <div
            className={cn("truncate text-sm text-content1-foreground", titleClassname)}
          >
            {title}
          </div>
        </div>

        {/* ICON ON END */}
        {iconPosition === "end" && (
          <div className="flex-shrink-0 ml-4">{IconElement}</div>
        )}

      </div>
    </div>
  );
};

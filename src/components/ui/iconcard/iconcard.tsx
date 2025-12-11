import { cn } from "@/lib/utils";
import { Card } from "../card/card";
import { iconMapping } from "@/utils";


interface IconcardProps {
  id?: string; // unique id
  icontype?: string; // icon type
  className?: string; // custom class name
  iconName?: string; // icon class name
  textClassName?: string; // text class name
  handleCardClick?: () => void; // card click handler
  isactive?: boolean; // active state
}


export const Iconcard = ({
  id = "",
  icontype,
  className,
  iconName = "",
  textClassName = "",
  handleCardClick,
}: IconcardProps) => {
  const Icon = iconMapping[icontype || ""] || null;
  return (
    <Card
      id={id}
      onClick={handleCardClick}
      className={cn(
        "flex items-center gap-[1rem] cursor-pointer justify-center flex-col py-[2rem]",
        className
      )}
    >
      {Icon?.type === "svg" && <span><Icon.icon/></span>}
      {Icon?.type === "image" && (
        <img src={Icon.icon as string} alt={iconName} />
      )}

      <p
        className={cn(
          " !text-[1.25rem] !text-content1-foreground text-body",
          textClassName
        )}
      >
        {iconName}
      </p>
    </Card>
  );
};

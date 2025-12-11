import { cn } from "@/lib/utils";
import { Card } from "../card/card";
import { iconMapping } from "@/utils";

interface LevelcardProps {
  id?: string; // unique id
  className?: string; // base class name for card
  handleClick?: () => void; // card click handler
  titleclassName?: string; // text class name
  descriptionclassName?: string; // description class name
  title?: string; // title text
  description?: string; // description text
  level?: 'beginner' | 'intermediate' | 'advanced' | 'upper-intermediate'; // level type
  icon?:React.ReactNode
}

export const Levelcard = ({
  id = "",
  className = "",
  handleClick,
  titleclassName = "",
  descriptionclassName = "",
  title = "",
  description = "",
  level = "beginner",
}: LevelcardProps) => {
  const LevelIcon = iconMapping?.[level];
  return (
    <Card
      id={id}
      onClick={handleClick}
      className={cn("flex items-center p-[1rem] justify-between", className)}
    >
      <div className={cn("flex flex-col gap-[1rem]")}>
        <p className={cn("!text-[1.25rem] !text-content1-foreground font-sans text-body",titleclassName)}>{title}</p>
        <p className={cn(" !text-content1-foreground font-sans text-body",descriptionclassName)}>{description}</p>
      </div>
      <div>
        {LevelIcon?.type === "svg" && <LevelIcon.icon />}
        {LevelIcon?.type === "image" && <img src={LevelIcon.icon} alt="icon" />}
      </div>
    </Card>
  );
};

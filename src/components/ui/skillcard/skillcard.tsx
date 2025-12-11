import { Checkbox } from "@/components";
import { Card } from "../card/card";

import { cn } from "@/lib/utils";
import { iconMapping } from "@/utils";

interface SkillcardProps {
  id?: string; // unique identifier for the skill card
  icontype?: string; // type of icon to display
  title?: string; // title of the skill
  isactive?: boolean; // whether the skill is active or not
  handleClick?: () => void; // click handler function
  activeClassName?: string; // class name for active state
   
}

export const Skillcard = ({
  id = "",
  icontype = "",
  title = "",
  isactive = false,
  handleClick,
  
  activeClassName = "backdrop-blur-[6.25rem] bg-content1-foreground/30",
}: SkillcardProps) => {
  const Icon = iconMapping?.[icontype || ""] || null;
  return (
    <Card id={id} className={cn("p-[1rem]  cursor-pointer  border-[0.5px]",{
      [activeClassName]: isactive,
    })}  onClick={handleClick} >
      <div className="flex flex-col  gap-y-[2.063rem] w-full">

      <div className="flex justify-between w-full">
        {Icon?.type === "svg" && <span><Icon.icon/></span>}
        {Icon?.type === "image" && (
          <img src={Icon.icon as string} alt={"icon"} />
        )}
        <span className="mb-2">
          <Checkbox checked={isactive} className="data-[state=checked]:bg-primary-50 data-[state=checked]:!border-primary-50" iconClassName={cn({
            'text-content1-foreground': isactive,
          })} onClick={handleClick} />
        </span>

      </div>
      <p className={cn("!text-body  !text-content1-foreground")}>{title}</p>
      </div>
    </Card>
  );
};

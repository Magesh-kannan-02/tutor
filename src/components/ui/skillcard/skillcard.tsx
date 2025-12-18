import { Checkbox } from "@/components";
import { Card } from "../card/card";

import { cn } from "@/lib/utils";
import { iconMapping } from "@/utils";
import { cva } from "class-variance-authority";

interface SkillcardProps {
  id?: string; // unique identifier for the skill card
  icontype?: string; // type of icon to display
  title?: string; // title of the skill
  isactive?: boolean; // whether the skill is active or not
  handleClick?: () => void; // click handler function
  activeClassName?: string; // class name for active state
  className?:string; // base class name
  activevariant?:  "default"; // active variants when it is active
  textclassName?: string; // text class name
  checkboxBaseclassName?:string // base class name for checkbox
  checkboxIconClassName?:string // icon class name for checkbox
  imgIconClassName?:string // classname for img icon
  svgIconClassName?:string // classname for svg icon
  allowAnimation?:boolean // to allow clickable animation

   
}
const activeVariants = cva("", {
  variants: {
    variant: {
      default: "backdrop-blur-[6.25rem] bg-content1-foreground/30",
       
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export const Skillcard = ({
  id = "",
  icontype = "",
  title = "",
  isactive = false,
  className='',
  handleClick,
  activeClassName = "backdrop-blur-[6.25rem] bg-content1-foreground/30",
  activevariant = "default",
  textclassName='',
  checkboxBaseclassName='',
  checkboxIconClassName='',
  imgIconClassName='',
  svgIconClassName='',
  allowAnimation=true,
  ...rest
  
}: SkillcardProps) => {
  const Icon = iconMapping?.[icontype || ""] || null;
  return (
    <Card id={id} allowAnimation={allowAnimation} className={cn("p-[1rem]  cursor-pointer  border-[0.5px]",{
      [activeClassName]: isactive,
      
    },className, isactive && activeVariants({variant:activevariant}),)}  onClick={handleClick} {...rest} >
      <div className="flex flex-col justify-between gap-y-[2.063rem] w-full">

      <div className="flex justify-between w-full">
        {Icon?.type === "svg" && <span><Icon.icon className={cn(svgIconClassName)} /></span>}
        {Icon?.type === "image" && (
          <img src={Icon.icon as string} alt={"icon"} className={cn(imgIconClassName)} />
        )}
        <span className="mb-2">
          <Checkbox checked={isactive} className={cn("data-[state=checked]:bg-primary-50 data-[state=checked]:!border-primary-50",checkboxBaseclassName)} iconClassName={cn({
            'text-content1-foreground': isactive,
          },checkboxIconClassName)} onClick={handleClick} />
        </span>

      </div>
      <p className={cn("!text-body  !text-content1-foreground",textclassName)}>{title}</p>
      </div>
    </Card>
  );
};

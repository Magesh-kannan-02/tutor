import { cn } from "@/lib/utils";
import { Card } from "../card/card";
import { iconMapping } from "@/utils";
import { cva } from "class-variance-authority";

interface LevelcardProps {
  id?: string; // unique id
  className?: string; // base class name for card
  handleClick?: () => void; // card click handler
  titleclassName?: string; // text class name
  descriptionclassName?: string; // description class name
  title?: string; // title text
  description?: string; // description text
  level?: 'beginner' | 'intermediate' | 'advanced' | 'upperIntermediate'; // level type
  isactive?:boolean // active state
  icon?:React.ReactNode
  activevariant?: 'default' // active variants when it is active
  activeClassName?: string; // active class name
  imgIconClassName?: string; // classname for img icon
  svgIconClassName?: string; // classname for svg icon
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

export const Levelcard = ({
  id = "",
  className = "",
  handleClick,
  titleclassName = "",
  descriptionclassName = "",
  title = "",
  description = "",
  level = "beginner",
  isactive=false,
  activevariant='default',
  imgIconClassName = "",
  svgIconClassName = "",
  activeClassName='',allowAnimation=true,

  ...rest
}: LevelcardProps) => {
  const LevelIcon = iconMapping?.[level];
  return (
    <Card
      id={id}
      allowAnimation={allowAnimation}
      onClick={handleClick}
      className={cn("flex items-center cursor-pointer p-[1rem] justify-between",{
                [activeClassName]:isactive
      }, isactive && (activeVariants({variant:activevariant})) , className)} 
      {...rest}
    >
      <div className={cn("flex flex-col gap-[1rem]")}>
        <p className={cn("!text-[1.25rem] !text-content1-foreground font-sans text-body",titleclassName)}>{title}</p>
        <p className={cn(" !text-content1-foreground font-sans text-body leading-[140%]",descriptionclassName)}>{description}</p>
      </div>
      <div>
        {LevelIcon?.type === "svg" && <LevelIcon.icon className={cn(svgIconClassName)} />}
        {LevelIcon?.type === "image" && <img src={LevelIcon.icon} alt="icon"   className={cn(imgIconClassName)}/>}
      </div>
    </Card>
  );
};

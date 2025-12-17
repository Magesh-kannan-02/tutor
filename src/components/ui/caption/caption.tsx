import { cn } from "@/lib/utils"
import { Card } from "../card/card"
import { CaptionIcon } from "@/assets"

interface CaptionProps{
    id?:string // unique id
    className?:string // base class for card
    textClassName?:string // classname for text
    title?:string // text 
    status?:boolean // whether it is active or not
    handleClick?:()=>void // handle click 
    isactive?:boolean // active state
    activeClassName?:string // active class name
    allowAnimation?:boolean // to allow clickable animation
}
export const Caption = ({
    id,
    className,
    textClassName,
    title='Live Captions',
    status=true,
    handleClick,
    isactive=false,
    activeClassName='',
    allowAnimation=true,
    ...rest
}:CaptionProps) => {
  return (
    <Card id={id} allowAnimation={allowAnimation} onClick={handleClick} className={cn("rounded-[1.25rem] cursor-pointer flex items-center justify-between py-[0.5rem] pl-[0.625rem] pr-[1.063rem]  border-none w-full",{
      [activeClassName]:isactive
    },className)} {...rest}>
        <div className="flex items-center gap-x-[0.75rem]">
             <CaptionIcon />
            <p className={cn("font-sans !text-[0.875rem] font-medium !text-content1-foreground",textClassName)}>{title}</p>
        </div>
        <p className="font-sans !text-[0.875rem] font-medium !text-content1-foreground">{status?'On':'Off'}</p>
         
    </Card>
  )
}



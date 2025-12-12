import { cn } from "@/lib/utils";

interface InfocardProps {
  id?: string; // unique id
  className?: string; // base class name for card
  title: string; // title text
  textclassName?: string; // text class name
  handleClick?: () => void; // card click handler
}

export const Infocard = ({ id, className, title, textclassName, handleClick,...rest }: InfocardProps) => {
  return <div id={id} className={cn("bg-primary-100 rounded-[0.625rem] w-[100%] py-[1.25rem] px-[1.625rem] flex items-center justify-center",className)} onClick={handleClick} {...rest}>
    <p className={cn("text-body  text-center font-sans font-semibold text-content1 leading-[100%] text-[1rem]", textclassName)}>{title}</p>
     
  </div>;
};

import React from "react";
import { Card } from "../card/card";
import { Chip } from "@/components";
import { PlayIcon } from "@/assets";
import { cn } from "@/lib/utils";

interface GrammarCardProps {
  id?: string; // unique card ID
  title: string; // main title text
  message: string; // message content text
  explanation?: string; // explanation text below
  className?: string; // wrapper custom class
  titleClassName?: string; // custom class for title
  messageClassName?: string; // custom class for message
  explanationClassName?: string; // custom class for explanation text
  onPlayAudio?: () => void; // callback for audio button
  icon?: React.ReactNode; // icon before title
  messageIcon?: React.ReactNode; // icon before message
  allowAnimation?: boolean; // enables animation for card
  label?: string; // default chip label
  activelabelname?: string; // chip label when active
  messageIconclassName?: string; // custom class for message icon
  chipclassName?: string; // custom class for chip wrapper
  chiptextClassName?: string; // custom class for chip text
}

export const GrammarCard = ({
  id = "",
  title,
  message,
  explanation,
  className = "",
  titleClassName = "",
  messageClassName = "",
  explanationClassName = "",
  onPlayAudio,
  icon,
  messageIcon,
  label = "Play your Audio",
  activelabelname = "Playing...",
  allowAnimation = false,
  messageIconclassName = "",
  chipclassName = "",
  chiptextClassName = "",
  ...rest
}: GrammarCardProps) => {
  // state to track audio play status
  const [isPlaying, setIsPlaying] = React.useState(false);

  // handle audio click
  const handlePlayAudio = () => {
    onPlayAudio?.();
    setIsPlaying((prev) => !prev);
  };

  return (
    <Card
      id={id}
      allowAnimation={allowAnimation} // card animation enabled
      className={cn(
        "rounded-[0.625rem] h-fit !bg-transparent text-white border-[0.5px] border-content1-100 p-[1rem] flex flex-col justify-start w-full",
        className
      )}
      {...rest}
    >
      <div className="flex flex-col items-start gap-[1rem]">
        {/* Title section */}
        <p className={cn("!text-h6 text-content1-foreground", titleClassName)}>
          {icon && <span className="mr-1">{icon}</span>}
          {title}
        </p>

        {/* Message + icon section */}
        <div className="flex items-center gap-[0.7rem] mb-[1.25rem]">
          {messageIcon && (
            <span className={cn(messageIconclassName)}>{messageIcon}</span>
          )}
          <span className={cn("!text-body5 font-semibold", messageClassName)}>
            {message}
          </span>
        </div>
      </div>

      {/* Audio play chip */}
      <Chip
        startContent={isPlaying ? <PlayIcon /> : <PlayIcon />} // always same icon
        text={isPlaying ? activelabelname : label} // shows active/normal label
        handleClick={handlePlayAudio} // click handler
        allowAnimation
        className={cn("mb-[1.563rem]", chipclassName)}
        textClassName={cn(
          "font-sans !font-medium !text-[0.875rem] text-secondary-150",
          chiptextClassName
        )}
        variant={"outline"}
      />

      {/* Explanation section */}
      {explanation && (
        <div className="flex flex-col items-start gap-[0.5rem]">
          <p className="text-h6 !text-content1-foreground font-sans">
            Explanation
          </p>
          <p
            className={cn(
              "text-h6 text-secondary-150 font-sans leading-tight",
              explanationClassName
            )}
          >
            {explanation}
          </p>
        </div>
      )}
    </Card>
  );
};

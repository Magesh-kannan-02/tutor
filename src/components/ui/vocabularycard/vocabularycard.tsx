import React from "react";
import { ArrowRightIcon, ArrowUpIcon, PlayIcon } from "@/assets";
import { AccordionComponent, Chip } from "@/components";
import { cn } from "@/lib/utils";

/* ---------------- Interfaces ---------------- */

interface TriggerProps {
  level: string;
  word: string;
  optionalWord: string;
  className?: string;
}

interface ChipItem {
  label: string;
  activeLabel: string;
  isActive?: boolean;
  audioUrl?: string;
  handleClick?: () => void;
}

interface VocabularyCardProps {
  value: string;  // unique id
  level: string;// grade eg A1
  word: string; //  eg good 
  optionalWord: string; // correct word or optional word
  chips: ChipItem[]; // chips data
  className?: string;// base class name
  triggerClassName?: string; // trigger classname
  contentClassName?: string; // content classname
  chipClassName?: string;// chip class name
  chipTextClassName?: string; // chip text class
}
interface ContentProps {
  chips: ChipItem[];
  onChipClick: (index: number) => void; // chip handler
  chipClassName?: string;
  chipTextClassName?: string;
}

/* ---------------- Trigger ---------------- */

function Trigger({ level, word, optionalWord, className }: TriggerProps) {
  return (
    <div className={cn("grid grid-cols-5 items-center", className)}>
      <p className="col-span-1 text-h6 !text-content1-foreground leading-normal ">
        {level}
      </p>
      <p className="col-span-1 text-h6 !text-content1-foreground leading-normal">
        {word}
      </p>
      <p className="col-span-1 text-h6 !text-content1-foreground leading-normal text-start col-start-4 items-center ">
        {optionalWord}
      </p>
    </div>
  );
}

/* ---------------- Content ---------------- */

function Content({
  chips,
  onChipClick,
  chipClassName,
  chipTextClassName,
}: ContentProps) {
  return (
    <div className="w-[75%] flex flex-wrap gap-[0.75rem]">
      {chips?.map((chip, index) => {
        const isActive = chip?.isActive || false;

        return (
          <Chip
            key={index}
            startContent={isActive ? <PlayIcon /> : <PlayIcon />}
            text={isActive ? chip.activeLabel : chip.label}
            handleClick={() => onChipClick(index)}
            allowAnimation
            variant="outline"
            className={cn("", chipClassName)}
            textClassName={cn(
              "font-sans !font-medium !text-[0.875rem] text-secondary-150",
              chipTextClassName
            )}
          />
        );
      })}
    </div>
  );
}

/* ---------------- Main Component ---------------- */

export function VocabularyCard({
  value,
  level,
  word,
  optionalWord,
  chips,
  className,
  triggerClassName,
  contentClassName,
  chipClassName,
  chipTextClassName,
}: VocabularyCardProps) {
  const [chipList, setChipList] = React.useState<ChipItem[]>(chips);
  React.useEffect(() => {
    setChipList(chips);
  }, [chips]);

  const handleChipClick = (index: number) => {
    setChipList((prev) =>
      prev.map((chip, i) => {
        if (i !== index) return chip;

        chip?.handleClick?.();

        if (chip?.audioUrl) {
          const audio = new Audio(chip?.audioUrl);
          audio.play();
        }

        return { ...chip, isActive: !chip?.isActive };
      })
    );
  };

  return (
    <AccordionComponent
      type="single"
      collapsible
      noBorder
      openIcon={<ArrowRightIcon />}
      closeIcon={<ArrowUpIcon />}
      className={cn(
        "rounded-[0.625rem] h-fit  text-white border-[0.5px] border-content1-100",
        className
      )}
      triggerClassName={cn(
        "px-[1rem] data-[state=open]:border-b-0 py-[1.563rem]",
        triggerClassName
      )}
      contentClassName={cn("p-[1rem]", contentClassName)}
      items={[
        {
          value,
          trigger: (
            <Trigger
              level={level}
              word={word}
              optionalWord={optionalWord}
              className={triggerClassName}
            />
          ),
          content: (
            <Content
              chips={chipList}
              onChipClick={handleChipClick}
              chipClassName={chipClassName}
              chipTextClassName={chipTextClassName}
            />
          ),
        },
      ]}
    />
  );
}

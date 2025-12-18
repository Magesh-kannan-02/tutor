import { Levelcard } from "@/components";
import { cn } from "@/lib/utils";
import diamondImg from "@/assets/images/diamond.png";
import { useOnboardingStore } from "@/store/onboarding";
import type { EnglishLevel } from "@/store/onboarding/types";

interface SelectLevelProps {
  onNext?: () => void;
}

export const SelectLevel = ({ onNext }: SelectLevelProps) => {
  const {
    levels,
    englishLevel,
    setEnglishLevel,
  } = useOnboardingStore();

  const handleSelect = (id: EnglishLevel) => {
    setEnglishLevel(id);
    setTimeout(() => {
      onNext?.();
    }, 250);
  };

  return (
    <div className="flex flex-col items-center gap-6 pb-10 py-5 px-4">
      <p className="text-[1.75rem] font-semibold text-content1-foreground text-center max-w-[20rem] mb-5">
        What’s your English level right now?
      </p>

      <div className="flex flex-col gap-4 w-full">
        {levels.map((level) => {
          const isActive = englishLevel === level.id;

          return (
            <Levelcard
              key={level.id}
              title={level.label}
              level={level.id}
              description={level.description}
              handleClick={() => handleSelect(level.id)}
              imgIconClassName="w-16"
              className={cn(
                "cursor-pointer transition-all bg-content1-foreground/15",
                isActive && "bg-content1-foreground/30"
              )}
            />
          );
        })}
      </div>

      <div className="flex items-center gap-1 w-full justify-end pr-10">
        <img src={diamondImg} alt="diamond" className="w-6" />
        <p className="font-semibold text-content1-foreground">+ 120 XP</p>
      </div>
    </div>
  );
};

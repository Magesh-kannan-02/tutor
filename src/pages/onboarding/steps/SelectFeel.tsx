import { Iconcard, Infocard } from "@/components";
import { cn } from "@/lib/utils";
import { useOnboardingStore } from "@/store/onboarding";
import type { FeelOption } from "@/store/onboarding/types";

interface SelectFeelProps {
  onNext?: () => void;
}

export const SelectFeel = ({ onNext }: SelectFeelProps) => {
  const { feelOptions, feelSameWay, setFeelSameWay } = useOnboardingStore();

  const handleSelect = (id: FeelOption) => {
    setFeelSameWay(id);

    setTimeout(() => {
      onNext?.();
    }, 200);
  };

  return (
    <div className="flex flex-col items-center gap-7 py-5 px-4">
      <p className="text-[1.75rem] font-semibold text-content1-foreground max-w-[17rem] text-center">
        Do you feel the same way?
      </p>

      <Infocard
        title="I understand in my mind, but struggle to say it out loud."
        className="px-[2.7rem]"
      />

      <div className="flex flex-col gap-4 w-full pb-10">
        {feelOptions.map((item) => (
          <Iconcard
            key={item.id}
            iconName={item.label}
            icontype={item.icon}
            imgIconClassName="w-10"
            handleCardClick={() => handleSelect(item.id)}
            className={cn(
              "py-10 cursor-pointer transition-all bg-content1-foreground/15",
              feelSameWay === item.id && "bg-content1-foreground/20"
            )}
          />
        ))}
      </div>
    </div>
  );
};

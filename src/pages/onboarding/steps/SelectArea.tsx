import { Featurecard } from "@/components";
import { cn } from "@/lib/utils";
import { useOnboardingStore } from "@/store/onboarding";

interface SelectAreaProps {
  onNext?: () => void;
}

export const SelectArea = ({ onNext }: SelectAreaProps) => {
  const { workAreas, workArea, setWorkArea } = useOnboardingStore();

  const handleSelect = (value: string) => {
    setWorkArea(value);
    setTimeout(() => onNext?.(), 250);
  };

  return (
    <div className="flex flex-col h-screen px-4 py-5 overflow-hidden">
      {/* Header */}
      <div className="flex flex-col items-center gap-7">
        <p className="text-[1.75rem] font-semibold text-content1-foreground text-center max-w-[12rem]">
          What area do you work in?
        </p>
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto mt-6">
        <div className="flex flex-col gap-4">
          {workAreas.map((item) => {
            const isActive = workArea === item.label;

            return (
              <Featurecard
                key={item.label}
                textContent={item.label}
                icontype={item.icon}
                iconClassName={item.iconClass}
                allowendendContent={false}
                isactive={isActive}
                handleClick={() => handleSelect(item.label)}
                changeIconColor={false}
                className={cn(
                  "py-[1rem] px-[1rem] cursor-pointer transition-all bg-content1-foreground/15",
                  isActive && "bg-content1-foreground/30"
                )}
                innerclassName="!gap-5"
                textclassName="!text-content1-foreground !text-[1rem]"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};


import { Featurecard } from "@/components";
import { cn } from "@/lib/utils";
import { useOnboardingStore } from "@/store/onboarding";
import type { AgeGroup } from "@/store/onboarding/types";

interface SelectAgeProps {
  onNext?: () => void;
}

export const SelectAge = ({ onNext }: SelectAgeProps) => {
  const { ageGroups, ageGroup, setAgeGroup } = useOnboardingStore();

  const handleSelect = (id: AgeGroup) => {
    setAgeGroup(id);

    // small delay feels natural
    setTimeout(() => {
      onNext?.();
    }, 200);
  };

  return (
    <div className="flex flex-col items-center gap-2 pb-16 px-4 w-full">
      <p className="text-[1.75rem] font-semibold text-content1-foreground">
        Pick your age group 👇
      </p>

      <p className="text-secondary-150 text-sm max-w-[18.5rem] text-center mb-10">
        No judgments, just better recommendations for you.
      </p>

      <div className="flex flex-col gap-4 w-full max-w-sm">
        {ageGroups.map((age) => (
          <Featurecard
            key={age.id}
            textContent={age.label}
            allowendendContent={false}
            isactive={ageGroup === age.id}
            handleClick={() => handleSelect(age.id)}
            className={cn(
              "cursor-pointer transition-all backdrop-blur-md bg-content1-foreground/15",
              ageGroup === age.id && "bg-content1-foreground/30"
            )}
          />
        ))}
      </div>
    </div>
  );
};

import { Iconcard } from "@/components";
import { cn } from "@/lib/utils";
import { useOnboardingStore } from "@/store/onboarding";
import type { Gender } from "@/store/onboarding/types";

interface SelectGenderProps {
  onNext?: () => void;
}

export const SelectGender = ({ onNext }: SelectGenderProps) => {
  const { genders, gender, setGender } = useOnboardingStore();

  const handleSelect = (id: Gender) => {
    setGender(id);

    setTimeout(() => {
      onNext?.();
    }, 200);
  };

  return (
    <div className="flex flex-col items-center gap-2 pb-16 py-5 px-4">
      <p className="text-[1.75rem] font-semibold text-content1-foreground">
        What is your gender?
      </p>

      <p className="text-secondary-150 text-sm max-w-[18.5rem] text-center mb-10">
        This helps us personalize your experience.
      </p>

      {genders.map((item) => (
        <Iconcard
          key={item.id}
          iconName={item.label}
          icontype={item.icon}
          handleCardClick={() => handleSelect(item.id)}
          className={cn(
            "cursor-pointer bg-content1-foreground/15 mb-3",
            gender === item.id && "bg-content1-foreground/30"
          )}
        />
      ))}
    </div>
  );
};

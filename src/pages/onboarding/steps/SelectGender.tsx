import { useState } from "react";
import { Iconcard } from "@/components";
import { cn } from "@/lib/utils";

interface SelectGenderProps {
  onNext: () => void;
}

const GENDERS = [
  { id: "male", label: "Male", icon: "male" },
  { id: "female", label: "Female", icon: "female" },
];

export const SelectGender = ({ onNext }: SelectGenderProps) => {
  const [selectedGender, setSelectedGender] = useState<string | null>(null);

  const handleSelect = (id: string) => {
    setSelectedGender(id);

    // smooth UX
    setTimeout(() => {
      onNext();
    }, 250);
  };

  return (
    <div className="flex flex-col items-center gap-2 pb-16">
      <p className="text-[1.75rem] font-semibold text-content1-foreground">
        What is your gender?
      </p>

      <p className="text-secondary-150 text-sm max-w-[18.5rem] text-center mb-10">
        This helps us personalize your experience.
      </p>
        {GENDERS.map((gender) => (
          <Iconcard
            key={gender.id}
            iconName={gender.label}
            icontype={gender.icon}
            handleCardClick={() => handleSelect(gender.id)}
            className={cn(
              "cursor-pointer bg-content1-foreground/15 mb-3",
              selectedGender === gender.id &&
                "bg-content1-foreground/20"
            )}
          />
        ))}
    </div>
  );
};

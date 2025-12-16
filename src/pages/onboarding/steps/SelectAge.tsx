import { useState } from "react";
import { Featurecard } from "@/components";
import { cn } from "@/lib/utils";

const AGE_GROUPS = [
  { id: "<24", label: "<24" },
  { id: "25-34", label: "25 - 34" },
  { id: "35-44", label: "35 - 44" },
  { id: "45-54", label: "45 - 54" },
  { id: "55-64", label: "55 - 64" },
  { id: "65+", label: "65+" },
];

interface SelectAgeProps {
  onNext: () => void;
}

export const SelectAge = ({ onNext }: SelectAgeProps) => {
  const [selectedAge, setSelectedAge] = useState<string | null>(null);

  const handleSelect = (id: string) => {
    setSelectedAge(id);

    // small delay feels natural
    setTimeout(() => {
      onNext();
    }, 250);
  };

  return (
    <div className="flex flex-col items-center gap-2 pb-16">
      <p className="text-[1.75rem] font-semibold text-content1-foreground">
        Pick your age group 👇
      </p>

      <p className="text-secondary-150 text-sm max-w-[18.5rem] text-center mb-10">
        No judgments, just better recommendations for you.
      </p>

      <div className="flex flex-col gap-4 w-full max-w-sm">
        {AGE_GROUPS.map((age) => (
          <Featurecard
            key={age.id}
            textContent={age.label}
            allowendendContent={false}
            isactive={selectedAge === age.id}
            handleClick={() => handleSelect(age.id)}
            className={cn(
              "cursor-pointer transition-all backdrop-blur-md bg-content1-foreground/15",
              selectedAge === age.id &&
                "bg-content1-foreground/20"
            )}
          />
        ))}
      </div>
    </div>
  );
};

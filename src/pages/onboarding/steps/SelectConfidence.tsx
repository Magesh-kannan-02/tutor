import { useState } from "react";
import { Button, Featurecard } from "@/components";
import { cn } from "@/lib/utils";

const CONFIDENCE_ISSUES = [
  "I freeze up",
  "I struggle to explain myself",
  "People don’t understand my accent",
  "I mess up grammar",
  "I reply too slowly",
  "None of the above",
];

interface SelectConfidenceProps {
  onNext?: () => void;
}

export const SelectConfidence = ({ onNext }: SelectConfidenceProps) => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const toggleSkill = (value: string) => {
    // Special rule: "None of the above"
    if (value === "None of the above") {
      setSelectedSkills(["None of the above"]);
      return;
    }

    setSelectedSkills((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : prev
            .filter((v) => v !== "None of the above")
            .concat(value)
    );
  };

  return (
    <div className="flex flex-col items-center gap-5">
      <p className="text-[1.75rem] font-semibold text-content1-foreground text-center max-w-[22rem]">
        What’s holding you back from confident English?
      </p>

      <p className="text-secondary-150 text-sm max-w-[18.5rem] text-center mb-4">
        Choose everything that applies
      </p>

      <div className="flex flex-col gap-4 w-full mb-14">
        {CONFIDENCE_ISSUES.map((item) => {
          const isActive = selectedSkills.includes(item);

          return (
            <Featurecard
              key={item}
              textContent={item}
              handleClick={() => toggleSkill(item)}
              allowendendContent
              isactive={isActive}
              changeIconColor={false}
              className={cn(
                "py-[1.1rem] px-[1rem] cursor-pointer bg-content1-foreground/15 gap-x-0",
                isActive && "bg-content1-foreground/30"
              )}
              innerclassName="!gap-[0.75rem]"
              textclassName="!text-content1-foreground !text-[1rem]"
              checkboxClassName="data-[state=checked]:bg-primary-50 data-[state=checked]:border-primary-50"
              checkboxIndicatorClassName="text-content1-foreground"
            />
          );
        })}
      </div>

      {selectedSkills.length > 0 && (
        <Button
          buttonText="Continue"
          variant="secondary"
          textClassName="text-xl text-content1 font-medium"
          baseClassName="!py-7 w-full mt-4"
          onClick={onNext}
        />
      )}
    </div>
  );
};
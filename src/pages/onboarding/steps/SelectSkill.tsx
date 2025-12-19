import { Skillcard, Button } from "@/components";
import { cn } from "@/lib/utils";
import { useOnboardingStore } from "@/store/onboarding";

interface SelectSkillProps {
  onNext?: () => void;
}

export const SelectSkill = ({ onNext }: SelectSkillProps) => {
  const {
    skills,
    selectedSkills,
    toggleSkill,
  } = useOnboardingStore();

  return (
    <div className="flex flex-col h-screen px-4 overflow-hidden">
      <div className="flex flex-col items-center gap-14">
        <p className="text-[1.75rem] font-semibold text-content1-foreground max-w-[17rem] text-center">
          What English skill do you want to boost?
        </p>
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto mt-10">
        <div
          className={cn(
            "grid grid-cols-2 gap-4 w-full auto-rows-fr pb-10"
          )}
        >
          {skills.map((skill) => (
            <Skillcard
              key={skill.id}
              title={skill.title}
              icontype={skill.icon}
              imgIconClassName="w-12 h-12"
              isactive={selectedSkills.includes(skill.id)}
              handleClick={() => toggleSkill(skill.id)}
              className="h-full cursor-pointer transition-all bg-content1-foreground/15"
            />
          ))}
        </div>
      </div>

      {/* Continue button */}
      <div className="sticky bottom-0  pt-2 pb-3">
        {selectedSkills.length > 0 && (
          <Button
            buttonText="Continue"
            variant="secondary"
            textClassName="text-xl text-content1 font-medium"
            baseClassName="!py-7 w-full"
            onClick={onNext}
          />
        )}
      </div>
    </div>
  );
};


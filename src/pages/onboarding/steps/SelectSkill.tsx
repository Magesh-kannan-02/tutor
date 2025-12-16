import { useState } from "react";
import { Skillcard, Button } from "@/components";
import { cn } from "@/lib/utils";

const SKILLS = [
  { id: "speaking", title: "Build confidence in speaking", icon: "think" },
  { id: "pronunciation", title: "Pronounce words clearly", icon: "mouth" },
  { id: "vocabulary", title: "Grow your vocabulary", icon: "arm" },
  { id: "grammar", title: "Fix grammar mistakes", icon: "writing" },
  { id: "listening", title: "Understand native speakers better", icon: "ear" },
  { id: "writing", title: "Write with ease", icon: "notes" },
];

interface SelectSkillProps {
  onNext?: () => void;
}

export const SelectSkill = ({ onNext }: SelectSkillProps) => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const toggleSkill = (id: string) => {
    setSelectedSkills((prev) =>
      prev.includes(id)
        ? prev.filter((skill) => skill !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="flex flex-col items-center gap-16">
      <p className="text-[1.75rem] font-semibold text-content1-foreground max-w-[17rem] text-center">
        What English skill do you want to boost?
      </p>

      {/* Grid */}
      <div className={cn("grid grid-cols-2 gap-4 w-full min-w-sm auto-rows-fr items-stretch",selectedSkills.length === 0 && 'pb-16')}>
        {SKILLS.map((skill) => (
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

      {/* Continue button */}
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
  );
};

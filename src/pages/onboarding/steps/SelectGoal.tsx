
import { Featurecard, RevealOnScroll } from "@/components";
import { cn } from "@/lib/utils";
import { useOnboardingStore } from "@/store/onboarding";
import type { Goal } from "@/store/onboarding/types";

interface SelectGoalProps {
  onNext?: () => void;
}

export const SelectGoal = ({ onNext }: SelectGoalProps) => {
  const { goalOptions, dailyGoal, setDailyGoal } = useOnboardingStore();

  const handleSelect = (id: Goal) => {
    setDailyGoal(id);

    // small delay feels natural
    setTimeout(() => {
      onNext?.();
    }, 200);
  };

  return (
    <div className="flex flex-col items-center gap-2 px-4 w-full py-4 ">
      <RevealOnScroll>
        <p className="text-body3 font-semibold text-content1-foreground pb-2 text-center">
          Set your daily practice goal.
        </p>
      </RevealOnScroll>
      <RevealOnScroll delay={0.1} y={16}>
        <p className="text-secondary-150 text-h6 text-center mb-6 ">
          Pick what fits your schedule — we’ll handle the rest.
        </p>
      </RevealOnScroll>

      <div className="flex flex-col gap-4 py-4 w-full">
        {goalOptions?.map((goal, index) => (
          <RevealOnScroll key={goal} delay={0.15 + index * 0.06} y={20}>
            <Featurecard
              textContent={`${goal} min`}
              allowendendContent={false}
              isactive={dailyGoal === goal}
              handleClick={() => handleSelect(goal)}
              className={cn(
                "cursor-pointer transition-all backdrop-blur-md bg-content1-foreground/15 pl-2",
                dailyGoal === goal && "bg-content1-foreground/30"
              )}
            />
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
};

import { Button, Featurecard } from "@/components";
import { cn } from "@/lib/utils";
import { useOnboardingStore } from "@/store/onboarding";

interface SelectConfidenceProps {
  onNext?: () => void;
}

export const SelectConfidence = ({ onNext }: SelectConfidenceProps) => {
  const {
    confidenceIssuesOptions,
    confidenceIssues,
    setConfidenceIssues,
  } = useOnboardingStore();

  const toggleIssue = (value: string) => {
    if (value === "None of the above") {
      setConfidenceIssues(["None of the above"]);
      return;
    }

    if (confidenceIssues.includes(value)) {
      setConfidenceIssues(confidenceIssues.filter((v) => v !== value));
    } else {
      setConfidenceIssues(
        confidenceIssues.filter((v) => v !== "None of the above").concat(value)
      );
    }
  };

  return (
    <div className="flex flex-col h-screen px-4 py-4 overflow-hidden">
      {/* Header */}
      <div className="flex flex-col items-center gap-4">
        <p className="text-[1.75rem] font-semibold text-content1-foreground text-center max-w-[22rem]">
          What’s holding you back from confident English?
        </p>

        <p className="text-secondary-150 text-sm max-w-[18.5rem] text-center">
          Choose everything that applies
        </p>
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto mt-6">
        <div className="flex flex-col gap-4">
          {confidenceIssuesOptions.map((item) => {
            const isActive = confidenceIssues.includes(item);

            return (
              <Featurecard
                key={item}
                textContent={item}
                handleClick={() => toggleIssue(item)}
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
      </div>

      {/* Footer */}
      <div className="sticky bottom-0 bg-background-200 pt-4">
        {confidenceIssues.length > 0 && (
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


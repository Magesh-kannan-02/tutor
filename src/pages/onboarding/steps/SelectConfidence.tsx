import { Button, Featurecard, RevealOnScroll } from "@/components";
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
    <div className="flex flex-col justify-between  min-h-full">
      {/*CONTENT */}
      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col items-center gap-6 px-4 pt-4 ">
           <RevealOnScroll>

          <p className="text-body3 font-semibold text-content1-foreground text-center  leading-9">
            What’s holding you back from confident English?
          </p>
           </RevealOnScroll>
            <RevealOnScroll delay={0.1} y={16}>

          <p className="text-secondary-150 text-h6  text-center">
            Choose everything that applies
          </p>
            </RevealOnScroll>

          <div className="flex flex-col gap-4 w-full">
            {confidenceIssuesOptions?.map((item,index) => {
              const isActive = confidenceIssues.includes(item);

              return (
                <RevealOnScroll
                  key={item}
                  delay={0.15 + index * 0.05}
                  y={20}
                >

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
                    checkboxClassName="data-[state=checked]:bg-primary-50 data-[state=checked]:border-primary-50 ml-2"
                    checkboxIndicatorClassName="text-content1-foreground"
                  />
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </div>

      {/* STICKY FOOTER */}
      {confidenceIssues.length > 0 && (
        <div className="sticky bottom-0 bg-background-200 px-4 pb-2 pt-5
            [mask-image:linear-gradient(to_bottom,transparent,black_15px,black)]
            [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_15px,black)]">
          <Button
            buttonText="Continue"
            variant="secondary"
            textClassName="text-body5 !text-content1 font-medium"
            baseClassName="!py-7 w-full transition-transform duration-75  ease-out active:scale-[0.97]"
            onClick={onNext}
          />
        </div>
      )}
    </div>
  );
};



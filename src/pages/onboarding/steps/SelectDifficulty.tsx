import { Button, Featurecard, RevealOnScroll } from "@/components";
import { cn } from "@/lib/utils";
import { useOnboardingStore } from "@/store/onboarding";

interface SelectDifficultyProps {
  onNext?: () => void;
}

export const SelectDifficulty = ({ onNext }: SelectDifficultyProps) => {
  const {
    difficultyOptions,
    difficultyFactors,
    toggleDifficultyFactor,
  } = useOnboardingStore();

  return (
    <div className="flex flex-col justify-between  min-h-full">
      {/*  CONTENT */}
      <div className="flex-1 overflow-y-auto px-4  pt-5">
        <div className="flex flex-col items-center gap-4 ">
            <RevealOnScroll>

          <p className="text-body3 font-semibold text-content1-foreground text-center px-4 mb-6 leading-8">
            What makes learning English difficult for you?
          </p>
            </RevealOnScroll>

          <div className="flex flex-col gap-4 w-full">
            {difficultyOptions?.map((item,index) => {
              const isActive = difficultyFactors.includes(item.label);

              return (
                <RevealOnScroll
                    key={item.label}
                  delay={0.15 + index * 0.05}
                  y={20}
                >

                  <Featurecard
                   
                    textContent={item.label}
                    icontype={item.icon}
                    iconClassName={item.iconClass}
                    allowendendContent
                    isactive={isActive}
                    handleClick={() => toggleDifficultyFactor(item.label)}
                    changeIconColor={false}
                    className={cn(
                      "py-[1rem] px-[1rem] cursor-pointer transition-all gap-0 bg-content1-foreground/15",
                      isActive && "bg-content1-foreground/30"
                    )}
                    innerclassName="!gap-5"
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
      {difficultyFactors.length > 0 && (
        <div className="sticky bottom-0 bg-background-200 pt-5 pb-2 px-4
            [mask-image:linear-gradient(to_bottom,transparent,black_15px,black)]
            [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_15px,black)]">
          <Button
            buttonText="Continue"
            variant="secondary"
            textClassName="text-body5 !text-content1 font-medium"
            baseClassName="!py-7 w-full transition-transform duration-75 ease-out active:scale-[0.97]"
            onClick={onNext}
          />
        </div>
      )}
    </div>
  );
};



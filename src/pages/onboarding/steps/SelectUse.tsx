import { Button, Featurecard, RevealOnScroll } from "@/components";
import { cn } from "@/lib/utils";
import { useOnboardingStore } from "@/store/onboarding";

interface SelectUseProps {
  onNext?: () => void;
}

export const SelectUse = ({ onNext }: SelectUseProps) => {
  const { useCaseOptions, englishUseCases, toggleUseCase } =
    useOnboardingStore();

  return (
    <div className="h-full relative overflow-hidden">
      
      {/* CONTENT */}
      <div className="h-full overflow-y-auto pb-28">
        <div className="flex flex-col items-center gap-6 px-4 pt-4">
          <RevealOnScroll>

          <p className="text-body3 font-semibold text-content1-foreground text-center px-6 leading-9">
            When do you usually use English?
          </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1} y={16}>

          <p className="text-secondary-150 text-h6 px-6 text-center">
            Pick everything that matches you
          </p>
          </RevealOnScroll>

          <div className="flex flex-col gap-4 w-full">
            {useCaseOptions?.map((item,index) => {
              const isActive = englishUseCases.includes(item.label);

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
                    handleClick={() => toggleUseCase(item.label)}
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
      {englishUseCases.length > 0 && (
        <div className="absolute w-full bottom-0 pt-5 pb-2 bg-background-200 backdrop-blur-md px-4 
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



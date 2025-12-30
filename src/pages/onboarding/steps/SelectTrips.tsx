import { Button, Featurecard, RevealOnScroll } from "@/components";
import { cn } from "@/lib/utils";
import { useOnboardingStore } from "@/store/onboarding";

interface SelectTripsProps {
  onNext?: () => void;
}

export const SelectTrips = ({ onNext }: SelectTripsProps) => {
  const { tripOptions, selectedTrips, toggleTrip } = useOnboardingStore();

  return (
    <div className="h-full relative overflow-hidden">
      <div className="h-full overflow-y-auto px-4 pb-28 pt-4 ">
        <div className="flex flex-col items-center">
            <RevealOnScroll>

          <p className="text-body3 font-semibold text-content1-foreground text-center mb-10 leading-8">
            What trips you up the most in conversations?
          </p>
            </RevealOnScroll>

          <div className="flex flex-col gap-4 pb-6 w-full">
            {tripOptions?.map((item,index) => {
              const isActive = selectedTrips.includes(item.label);

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
                    handleClick={() => toggleTrip(item.label)}
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
      {selectedTrips.length > 0 && (
        <div className="absolute w-full bottom-0 bg-background-200 pt-5 pb-2 px-4 w-full 
            [mask-image:linear-gradient(to_bottom,transparent,black_25px,black)]
            [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_25px,black)]">
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



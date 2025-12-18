import { Button, Featurecard } from "@/components";
import { cn } from "@/lib/utils";
import { useOnboardingStore } from "@/store/onboarding";

interface SelectTripsProps {
  onNext?: () => void;
}

export const SelectTrips = ({ onNext }: SelectTripsProps) => {
  const { tripOptions, selectedTrips, toggleTrip } = useOnboardingStore();

  return (
    <div className="flex flex-col h-screen px-4 py-4 overflow-hidden">
      {/* Header */}
      <div className="flex flex-col items-center">
        <p className="text-[1.75rem] font-semibold text-content1-foreground text-center max-w-[22rem] mb-6">
          What trips you up the most in conversations?
        </p>
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto">
        <div className="flex flex-col gap-4 pb-10">
          {tripOptions.map((item) => {
            const isActive = selectedTrips.includes(item.label);

            return (
              <Featurecard
                key={item.label}
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
                checkboxClassName="data-[state=checked]:bg-primary-50 data-[state=checked]:border-primary-50"
                checkboxIndicatorClassName="text-content1-foreground"
              />
            );
          })}
        </div>
      </div>

      {/* Footer */}
      {selectedTrips.length > 0 && (
        <div className="sticky bottom-0 bg-background-200 pt-4">
          <Button
            buttonText="Continue"
            variant="secondary"
            textClassName="text-xl text-content1 font-medium"
            baseClassName="!py-7 w-full"
            onClick={onNext}
          />
        </div>
      )}
    </div>
  );
};


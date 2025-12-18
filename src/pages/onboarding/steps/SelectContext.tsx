import { Button, Chip, CircularTimer, Dropdown } from "@/components";
import aiCallImg from "@/assets/images/aiCall.png";
import aiCallBlackImg from "@/assets/images/aiCallBlack.png";
import { cn } from "@/lib/utils";
import { useOnboardingStore } from "@/store/onboarding";

interface SelectContextProps {
  onNext?: () => void;
}

export const SelectContext = ({ onNext }: SelectContextProps) => {
  const {
    contextChips,
    contextCategories,
    contextCategory,
    selectedContext,
    setContextCategory,
    setSelectedContext,
  } = useOnboardingStore();

  return (
    <div className="flex flex-col items-center h-full justify-between gap-20">
      {/* Top content */}
      <div className="flex flex-col items-center gap-6 mt-6">
        {/* AI orb */}
        <div className="relative w-24 h-24">
          <img
            src={aiCallImg}
            alt="AI"
            className="absolute inset-0 w-full h-full object-contain"
          />
          <img
            src={aiCallBlackImg}
            alt="AI overlay"
            className="absolute inset-0 w-full h-full object-contain"
          />
        </div>

        {/* Description */}
        <div className="text-sm text-secondary-150 font-semibold text-center">
          <p>3 minutes call with AI tutor</p>
          <p>to assess your English in the chosen context</p>
        </div>

        {/* Timer */}
        <CircularTimer duration={180} size={150} strokeWidth={5} stop />
      </div>

      {/* Bottom controls */}
      <div className="flex flex-col gap-8 w-full pb-4">
        {/* Context select */}
        <div className="flex flex-col gap-4">
          <p className="text-xl text-content1-foreground text-center font-bold">
            Select your context
          </p>

          <Dropdown
            placeholder="Career Training"
            className="px-4"
            triggerClassName="bg-content1-foreground/15"
            options={contextCategories}
            value={contextCategory}
            onChange={setContextCategory}
          />

          {/* Chips */}
          <div className="flex gap-3 justify-start w-full overflow-x-auto overflow-y-hidden">
            {contextChips.map((chip, i) => {
              const isActive = selectedContext === chip;

              return (
                <Chip
                  key={chip}
                  text={chip}
                  isactive={isActive}
                  handleClick={() => setSelectedContext(chip)}
                  allowAnimation
                  className={cn(
                    "cursor-pointer flex-shrink-0",
                    i === 0 && "ml-4"
                  )}
                />
              );
            })}
          </div>
        </div>

        {/* Call button */}
        <div className="px-4">
          <Button
            buttonText="Call"
            variant="secondary"
            textClassName="text-xl text-content1 font-medium"
            baseClassName="!py-7 w-full"
            onClick={onNext}
          />
        </div>
      </div>
    </div>
  );
};

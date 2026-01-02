import { Button, Chip, CircularTimer, Dropdown, RevealOnScroll } from "@/components";
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
    <div className="flex flex-col min-h-full gap-12">
      
      {/* TOP CONTENT */}
      <div className="flex flex-col items-center gap-5 mt-4">
           <RevealOnScroll >
        <div className="relative h-24">

          
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
         </RevealOnScroll>
            <RevealOnScroll delay={0.08} y={14}>

        <div className="text-h6 text-secondary-150 font-semibold text-center">
          <p>3 minutes call with AI tutor</p>
          <p>to assess your English in the chosen context</p>
        </div>
            </RevealOnScroll>
              <RevealOnScroll delay={0.16} y={14}>
            <div className="pt-4 flex justify-center">

        <CircularTimer  duration={180} size={150} strokeWidth={5} stop />
            </div>
              </RevealOnScroll>
      </div>

      {/* BOTTOM CONTROLS */}
      <div className="flex flex-col gap-8 w-full mt-auto">
        <div className="flex flex-col gap-4">
             <RevealOnScroll>

          <p className="text-body4 text-content1-foreground text-center font-bold">
            Select your context
          </p>
             </RevealOnScroll>
            <RevealOnScroll delay={0.08} y={12}>

          <Dropdown
            placeholder="Career Training"
            className="px-4"
            triggerClassName="bg-content1-foreground/15"
            options={contextCategories}
            value={contextCategory}
            onChange={setContextCategory}
          />
            </RevealOnScroll>

          <div className="flex gap-3 overflow-x-auto">
            {contextChips.map((chip, i) => (
             

                <Chip
                    key={i}
                  text={chip}
                  isactive={selectedContext === chip}
                  handleClick={() => setSelectedContext(chip)}
                  allowAnimation
                  className={cn("flex-shrink-0 ", i === 0 && "ml-4")}
                />
               
            ))}
          </div>
        </div>

        <div className="px-4 sticky bg-background-200 bottom-0 pt-4 pb-2 
            [mask-image:linear-gradient(to_bottom,transparent,black_15px,black)]
            [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_15px,black)]">
          <Button
            buttonText="Call"
            variant="secondary"
            textClassName="text-body5 !text-content1 font-medium"
            baseClassName="!py-7 w-full transition-transform duration-75 ease-out active:scale-[0.97]"
            onClick={onNext}
          />
        </div>
      </div>
    </div>
  );
};
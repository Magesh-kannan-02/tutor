
import { Featurecard, RevealOnScroll } from "@/components";
import { cn } from "@/lib/utils";
import { useOnboardingStore } from "@/store/onboarding";


interface SelectCorrectionProps {
  onNext?: () => void;
}

export const SelectCorrection = ({ onNext }: SelectCorrectionProps) => {
  const { correctionOptions, correctionStyle, setCorrectionStyle } = useOnboardingStore();

  const handleSelect = (style: string) => {
    setCorrectionStyle(style);

    // small delay feels natural
    setTimeout(() => {
      onNext?.();
    }, 200);
  };

  return (
    <div className="flex flex-col items-center gap-4 px-4 w-full py-5 ">
      <RevealOnScroll>
        <p className="text-body3 font-semibold text-content1-foreground pb-2 text-center max-w-[260px] mx-auto leading-8">
          What’s your preferred correction style?
        </p>
      </RevealOnScroll>

      <div className="flex flex-col gap-4 py-4 w-full">
        {correctionOptions?.map((style, index) => (
          <RevealOnScroll key={style} delay={0.15 + index * 0.06} y={20}>
            <Featurecard
              textContent={style}
              allowendendContent={false}
              isactive={correctionStyle === style}
              handleClick={() => handleSelect(style)}
              className={cn(
                "cursor-pointer transition-all backdrop-blur-md bg-content1-foreground/15 pl-2",
                correctionStyle === style && "bg-content1-foreground/30"
              )}
            />
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
};

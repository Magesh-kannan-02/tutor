import { Featurecard, RevealOnScroll } from "@/components";
import { cn } from "@/lib/utils";
import { useOnboardingStore } from "@/store/onboarding";


interface SelectFluentlyProps {
  onNext?: () => void;
}

export const SelectFluently = ({ onNext }: SelectFluentlyProps) => {
  const { fluentlyOptions, fluentlySource, setFluentlySource } = useOnboardingStore();

  const handleSelect = (source: string) => {
    setFluentlySource(source);

    // small delay feels natural
    setTimeout(() => {
      onNext?.();
    }, 200);
  };

  return (
    <div className="flex flex-col items-center gap-4 px-4 w-full py-5 ">
      <RevealOnScroll>
        <p className="text-body3 font-semibold text-content1-foreground pb-2 text-center max-w-[260px] mx-auto leading-8">
          Where did you first discover Fluently?
        </p>
      </RevealOnScroll>

      <div className="flex flex-col gap-4 py-4 w-full">
        {fluentlyOptions?.map((option, index) => (
          <RevealOnScroll key={option.label} delay={0.15 + index * 0.06} y={20}>
            <Featurecard
              textContent={option.label}
              icontype={option.icon}
              iconClassName="w-10"
              allowendendContent={false}
              isactive={fluentlySource === option.label}
              handleClick={() => handleSelect(option.label)}
              className={cn(
                "cursor-pointer transition-all backdrop-blur-md bg-content1-foreground/15 p-3",
                fluentlySource === option.label && "bg-content1-foreground/30"
              )}
            />
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
};

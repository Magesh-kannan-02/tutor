import { Button, FocusArea, RevealOnScroll } from "@/components";

interface LevelUpProps {
  onNext?: () => void; //next page
}

export const LevelUp = ({ onNext }: LevelUpProps) => {
  return (
    <div className="flex flex-col justify-between min-h-full">
      <div className="flex flex-col items-center gap-2 px-4 w-full pt-5">
        <RevealOnScroll>
          <p className="text-body3 font-semibold text-content1-foreground pb-2 text-center">
            Ready to level up?
          </p>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1} y={16}>
          <p className="text-secondary-150 text-h6 text-center mb-6 ">
            You know your weak spots — now it’s time to turn them into strengths.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2} y={16}>
          <FocusArea

            items={[
              {
                icontype: 'microphone',
                iconName: 'MicrophoneIcon',
                title: "Pronunciation",
                subtitle: "sound clearer",
              },
              {
                icontype: 'pen',
                iconName: 'MicrophoneIcon',
                title: "Grammar",
                subtitle: "use stronger words",
              },
              {
                icontype: 'vocabulary',
                iconName: 'MicrophoneIcon',
                title: "Vocabulary",
                subtitle: "build better sentences",
              },
              {
                icontype: 'fluency',
                iconName: 'MicrophoneIcon',
                title: "Fluency",
                subtitle: "speak smoothly",
              },
            ]}
          />
        </RevealOnScroll>
      </div>
      <div
        className="sticky bottom-0 bg-background-200 backdrop-blur-md pt-5 pb-2 px-4 w-full
          [mask-image:linear-gradient(to_bottom,transparent,black_15px,black)]
          [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_15px,black)]"
      >
        <Button
          buttonText="Continue"
          variant="secondary"
          textClassName="text-body5 !text-content1 font-medium"
          baseClassName="!py-7 w-full transition-transform duration-75 ease-out active:scale-[0.97]"
          onClick={onNext}
        />
      </div>
    </div>
  );
};

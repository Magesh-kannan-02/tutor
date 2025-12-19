import bigGraph from "@/assets/images/bigGraph.png";
import { Button } from "@/components";
import { useOnboardingStore } from "@/store/onboarding";

interface DidYouKnowProps {
  onNext?: () => void;
}

export const DidYouKnow = ({ onNext }: DidYouKnowProps) => {
  const { statsValue } = useOnboardingStore();

  return (
    <div className="flex flex-col h-full items-center justify-between py-4 px-4">
      {/* Center content */}
      <div className="flex flex-col items-center text-center">
        {/* Title */}
        <p className="text-[1.75rem] font-semibold text-content1-foreground mb-10">
          Did you know?
        </p>

        {/* Graph Icon */}
        <img
          src={bigGraph}
          alt="Graph"
          className="w-36 h-36 mb-10"
        />

        {/* Big outlined text */}
        <p
          className="text-6xl font-black leading-[1] bg-transparent text-center pb-4"
          style={{
            WebkitTextStroke: "2px transparent",
            backgroundImage: "linear-gradient(180deg, #FFFFFF 0%, #010101 80%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
          }}
        >
          {statsValue} out of 10
        </p>

        {/* Description */}
        <p className="text-xl text-content1-foreground max-w-[16rem] font-semibold mb-3">
          learners freeze <br /> in real conversations.
        </p>

        {/* Highlight */}
        <p className="text-[1.40rem] font-bold text-primary-200 mt-3 mb-16">
          That’s normal and fixable.
        </p>
      </div>

      {/* Continue button */}
      <Button
        buttonText="Continue"
        variant="secondary"
        textClassName="text-xl text-content1 font-medium"
        baseClassName="!py-7 w-full mt-4"
        onClick={onNext}
      />
    </div>
  );
};

import { Button } from "@/components";
import { useOnboardingStore } from "@/store/onboarding";

interface PercentageProps {
  onNext?: () => void;
}

export const Percentage = ({ onNext }: PercentageProps) => {
  const { percentage, workArea } = useOnboardingStore();

  return (
    <div className="flex flex-col h-full justify-between items-center text-center py-5 px-4">
      {/* Center content */}
      <div className="flex-1 flex flex-col justify-start items-center">
        {/* Big outlined percentage */}
        <svg width="100%" height="180" viewBox="0 0 400 180">
          <defs>
            <linearGradient id="strokeGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#010101" />
            </linearGradient>
          </defs>

          <text
            x="50%"
            y="75%"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="transparent"
            stroke="url(#strokeGradient)"
            strokeWidth="1"
            fontSize="160"
            fontWeight="900"
            fontFamily="DM Sans"
          >
            {percentage}%
          </text>
        </svg>

        {/* Description */}
        <p className="mt-4 text-[1.75rem] text-content1-foreground">
          Professionals in
        </p>

        <p className="text-[1.75rem] font-semibold text-primary-100">
          {workArea ?? "Technology & Engineering"}
        </p>
      </div>

      {/* Continue button */}
      <Button
        buttonText="Continue"
        variant="secondary"
        textClassName="text-xl text-content1 font-medium"
        baseClassName="!py-7 w-full"
        onClick={onNext}
      />
    </div>
  );
};

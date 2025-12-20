import { BackgroundBlur } from "@/assets";
import { Button, Inputprompt } from "@/components";
import { RootLayout } from "@/layouts";
import { FeedbackHeader } from "./components/header";
import { EmailContent } from "./components/emailContent";

import { useFlowStore } from "@/store/flow";
import { useFeedBackStore } from "@/store/feedback";
import React from "react";

export const Verification = () => {
  const back = useFlowStore((state) => state.back);
  const next = useFlowStore((state) => state.next);

  const personalInfo = useFeedBackStore((state) => state.personalInfo);
  const updatePersonalInfo = useFeedBackStore(
    (state) => state.updatePersonalInfo
  );

  const [timeLeft, setTimeLeft] = React.useState(30);
  React.useEffect(() => {
    if (timeLeft === 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);
  const code = useFeedBackStore((state) => state.personalInfo.verficationCode);
  const handleVerify = () => {
    next();
  };

  return (
    <RootLayout containerClassName="relative  overflow-hidden py-[0.8rem] px-[1rem] flex flex-col bg-content1">
      {/* Backgrounds */}
      <BackgroundBlur
        className="absolute -left-96 -top-28 pointer-events-none"
        size={700}
      />
      <BackgroundBlur
        className="absolute -bottom-48 -right-96 pointer-events-none"
        size={600}
      />

      {/* Header */}
      <FeedbackHeader onBack={back} />

      {/* Content */}
      <div className="w-full flex-1 overflow-y-auto my-auto [mask-image:linear-gradient(to_bottom,transparent,black_24px,black_calc(100%-24px),transparent)]
    [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_24px,black_calc(100%-24px),transparent)]">
        <EmailContent
          text="Verify your email 💌"
          description="We’ve sent a 4-digit code to "
          email={personalInfo.email ?? ""}
        />

        <div className="flex flex-col my-[2rem] gap-[1.5rem] items-center">
          <Inputprompt
            inputClassName="!bg-secondary-250 rounded-[0.5rem]"
            label="Enter Code"
            placeholder="Enter your Code"
            type="text"
            value={code}
            onChange={(code) => updatePersonalInfo("verficationCode", code)}
          />

          <p className="text-h6 font-sans text-secondary-150">
            Didn’t get it? Resend in{" "}
            <span>00:{timeLeft.toString().padStart(2, "0")}</span>
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-4 w-full mt-auto">
        <Button
          buttonText="Verify & Continue"
          variant="secondary"
          onClick={handleVerify}
          disabled={(code?.length || 0) < 4}
          textClassName="text-h5 !text-content1 font-medium font-sans"
        />
      </div>
    </RootLayout>
  );
};

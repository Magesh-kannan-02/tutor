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

  const [code, setCode] = React.useState(personalInfo.verficationCode ?? "");
  const [timeLeft, setTimeLeft] = React.useState(30);
  React.useEffect(() => {
    if (timeLeft === 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleVerify = () => {
    updatePersonalInfo("verficationCode", code);
    next();
  };

  return (
    <RootLayout containerClassName="relative h-screen overflow-hidden py-[0.8rem] px-[1rem] flex flex-col bg-content1">
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
      <div className="w-full">
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
            onChange={setCode}
          />

          <p className="text-h6 font-sans text-secondary-150">
            Didn’t get it? Resend in  <span>00:{timeLeft.toString().padStart(2, "0")}</span>
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-4 w-full mt-auto">
        <Button
          buttonText="Verify & Continue"
          variant="secondary"
          onClick={handleVerify}
          disabled={!code}
          textClassName="!text-[1.125rem] text-content1 font-medium font-sans"
        />
      </div>
    </RootLayout>
  );
};

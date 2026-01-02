import { Inputprompt } from "@/components";
import { Content } from "./components/contents";

import { useAccountStore } from "@/store/accounts";
import React from "react";

export const Verification = () => {
  const personalInfo = useAccountStore((state) => state.personalInfo);
  const updatePersonalInfo = useAccountStore(
    (state) => state.updatePersonalInfo
  );

  const personalInfoErrors = useAccountStore(
    (state) => state.personalInfoErrors
  );

  const [timeLeft, setTimeLeft] = React.useState(30);
  React.useEffect(() => {
    if (timeLeft === 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);
  const code = useAccountStore((state) => state.personalInfo.verficationCode);

  return (
    <div className="w-full">
      {/* Content */}

      <Content
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
          error={personalInfoErrors.verficationCode}
          onChange={(code) => updatePersonalInfo("verficationCode", code)}
        />

        <p className="text-h6 font-sans text-secondary-150">
          Didn’t get it? Resend in{" "}
          <span>00:{timeLeft.toString().padStart(2, "0")}</span>
        </p>
      </div>
    </div>
  );
};

import { BackgroundBlur } from "@/assets";
import { Button, Inputprompt } from "@/components";
import { RootLayout } from "@/layouts";
import { FeedbackHeader } from "./components/header";

import { useFlowStore } from "@/store/flow";
import { EmailContent } from "./components/emailContent";
import { useFeedBackStore } from "@/store/feedback";

export const PersonalDetails = () => {
  const back = useFlowStore((state) => state.back);
  const next = useFlowStore((state) => state.next);
  const personalInfo = useFeedBackStore((state) => state.personalInfo);

  const updatePersonalInfo = useFeedBackStore(
    (state) => state.updatePersonalInfo
  );

  return (
    <RootLayout
      containerClassName={`relative h-screen overflow-hidden  py-[0.8rem] px-[1rem] flex flex-col bg-content1`}
    >
      {/* Backgrounds */}
      <BackgroundBlur
        className="absolute -left-96 -top-28 pointer-events-none"
        size={700}
      />
      <BackgroundBlur
        className="absolute -bottom-48 -right-96 pointer-events-none"
        size={600}
      />
      {/* header */}
      <FeedbackHeader onBack={back} />

      {/* Content */}

      <div className="w-[100%]">
        <EmailContent
          text="Let’s stay in touch ✉️"
          description="Enter your email to get progress updates, level insights, and personalized English tips."
        />
        <div className="flex flex-col my-[2rem] gap-[1.5rem]">
          <Inputprompt
            inputClassName="!bg-secondary-250 rounded-[0.5rem]"
            label="Your Name"
            placeholder="Enter your name"
            type="text"
            value={personalInfo.name ?? ""}
            onChange={(value) => updatePersonalInfo("name", value)}
          />

          <Inputprompt
            inputClassName="!bg-secondary-250 rounded-[0.5rem]"
            label="Your Email"
            placeholder="Enter Your Email"
            type="email"
            value={personalInfo.email ?? ""}
            onChange={(value) => updatePersonalInfo("email", value)}
          />
        </div>
      </div>

      {/* Footer */}
      <div className="pt-4 w-full  mt-auto ">
        <Button
          buttonText={"Send Verification Code"}
          variant="secondary"
          onClick={next}
          disabled={!personalInfo.email || !personalInfo.name}
          textClassName="!text-[1.125rem] text-content1 font-medium font-sans"
        />
      </div>
    </RootLayout>
  );
};

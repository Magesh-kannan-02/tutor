import { Inputprompt } from "@/components";
import { Content } from "./components/Content";
import { useAccountStore } from "@/store/accounts";

export const PersonalDetails = () => {
  const personalInfo = useAccountStore((state) => state.personalInfo);
  const updatePersonalInfo = useAccountStore(
    (state) => state.updatePersonalInfo
  );

  return (
    <div className="w-full">
      <Content
        text={"Let’s stay in touch ✉️"}
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
  );
};

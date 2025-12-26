import { Content } from "./components/Content";
import LockImg from "@/assets/images/lock.png";
import { Inputprompt } from "@/components";
import { useFeedBackStore } from "@/store/feedback";

export const CreatePassword = () => {
  const { personalInfo, updatePersonalInfo,personalInfoErrors } = useFeedBackStore();
  return (
    <div className="flex flex-col gap-[2rem]  items-center justify-center">
      <Content
        image={LockImg}
        text="Create your password"
        description="Enter a strong password to secure your account."
      />

      <Inputprompt
        label="Password"
        placeholder="Enter password"
        type="password"
        error={personalInfoErrors.password}
        inputClassName="bg-secondary-250 rounded-[0.5rem]"
        value={personalInfo.password}
        onChange={(value) => updatePersonalInfo("password", value)}
        confirm
        confirmError={personalInfoErrors.confirm_password}
        confirmValue={personalInfo.confirm_password}
        onConfirmChange={(value) =>
          updatePersonalInfo("confirm_password", value)
        }
        showStrength
        mode="full"
      />
    </div>
  );
};

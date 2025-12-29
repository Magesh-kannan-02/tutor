import { Content } from "./components/Content";
import LockImg from "@/assets/images/lock.png";
import { Inputprompt } from "@/components";
import { useAccountStore } from "@/store/accounts";
interface CreatePasswordProps {
  id?: string;
  hasConfirm?: boolean;
  showStrength?: boolean;
  label?: string;
  title?: string;
  placeholder?: string;
  description?: string;
  field?: string;
}
export const CreatePassword = ({
  id,
  field = "password",
  hasConfirm = true,
  showStrength = true,
  label = "Password",
  placeholder = "Enter password",
  title = "Create your password",
  description = "Enter a strong password to secure your account.",
}: CreatePasswordProps) => {
  const { personalInfo, updatePersonalInfo, personalInfoErrors } =
    useAccountStore();
  return (
    <div
      id={id}
      className="flex flex-col gap-[2rem]  items-center justify-center"
    >
      <Content image={LockImg} text={title} description={description} />

      <Inputprompt
        label={label}
        placeholder={placeholder}
        labelClassName=" !text-body text-secondary-150"
        confirmLabelClassName=" !text-body text-secondary-150"
        type="password"
        error={personalInfoErrors[field as keyof typeof personalInfo]}
        inputClassName="bg-secondary-250 rounded-[0.5rem] !placeholder:text-h6 placeholder:text-secondary-150"
        value={personalInfo[field as keyof typeof personalInfo]}
        onChange={(value) => updatePersonalInfo(field, value)}
        confirm={hasConfirm}
        confirmInputClassName="bg-secondary-250 rounded-[0.5rem] !placeholder:text-h6 placeholder:text-secondary-150"
        confirmError={personalInfoErrors.confirm_password}
        confirmValue={personalInfo.confirm_password}
        onConfirmChange={(value) =>
          updatePersonalInfo("confirm_password", value)
        }
        showStrength={showStrength}
        mode="full"
      />
    </div>
  );
};

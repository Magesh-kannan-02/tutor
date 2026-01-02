import { Content } from "./components/contents";
import LockImg from "@/assets/images/lock.png";
import { Inputprompt, RevealOnScroll } from "@/components";
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
    <RevealOnScroll y={20} delay={0.05}>

    <div
      id={id}
      className="flex flex-col gap-[2rem]  items-center justify-center"
    >
      <RevealOnScroll y={-12} delay={0.08}>

      <Content image={LockImg} text={title} description={description} />
      </RevealOnScroll>
     <RevealOnScroll y={20} delay={0.18}>

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
     </RevealOnScroll>
    </div>
    </RevealOnScroll>
  );
};

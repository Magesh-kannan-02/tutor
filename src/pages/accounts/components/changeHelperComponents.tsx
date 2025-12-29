import { Inputprompt } from "@/components";

interface ChangeHelperComponentsProps {
  id?: string;
  label?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  error?: string;
  onChange?: (value: string) => void;
}
export const ChangeHelperComponents = ({
  id,
  label,
  placeholder,
  type,
  value,
  error,
  onChange,
}: ChangeHelperComponentsProps) => {
  return (
    <Inputprompt
      inputClassName="bg-secondary-250 rounded-[0.5rem]  placeholder:text-secondary-150 placeholder:!text-body"
      labelClassName="!text-body text-secondary-150"
      id={id}
      label={label}
      placeholder={placeholder}
      type={type}
      value={value}
      error={error}
      onChange={(value) => onChange?.(value)}
    />
  );
};

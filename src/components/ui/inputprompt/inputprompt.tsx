import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";
import { SoundIcon, EyeOffIcon } from "@/assets";

interface InputpromptProps {
  id?: string;
  label?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (v: string) => void;

  confirm?: boolean;
  confirmValue?: string;
  onConfirmChange?: (v: string) => void;

  showStrength?: boolean;
  mode?: "single" | "full";

  className?: string;
  labelClassName?: string;
  inputClassName?: string;
  iconClassName?: string;

  outerClassName?: string; 
  mainLabelClassName?: string;
  mainInputClassName?: string;
  mainIconClassName?: string;

  confirmLabelClassName?: string;
  confirmInputClassName?: string;
  confirmIconClassName?: string;

  strengthWrapperClassName?: string;
  strengthTitleClassName?: string;
  strengthBarsClassName?: string;
  strengthSegmentOnClassName?: string;
  strengthSegmentOffClassName?: string;
}

export const Inputprompt = ({
  id,
  label,
  placeholder = "",
  type = "text",
  value = "",
  onChange,

  confirm = false,
  confirmValue = "",
  onConfirmChange,

  showStrength = false,
  mode = "single",

  className,
  labelClassName,
  inputClassName,
  iconClassName,

  outerClassName,
  mainLabelClassName,
  mainInputClassName,
  mainIconClassName,

  confirmLabelClassName,
  confirmInputClassName,
  confirmIconClassName,

  strengthWrapperClassName,
  strengthTitleClassName,
  strengthBarsClassName,
  strengthSegmentOnClassName,
  strengthSegmentOffClassName,
}: InputpromptProps) => {
  // independent visibility toggles
  const [visibleMain, setVisibleMain] = useState(false);
  const [visibleConfirm, setVisibleConfirm] = useState(false);

  const isPassword = type === "password";

  const mainType = isPassword ? (visibleMain ? "text" : "password") : type;
  const confirmType = isPassword ? (visibleConfirm ? "text" : "password") : "password";

  // password strength meter
  const strength = useMemo(() => {
    if (!showStrength || mode === "single") return 0;
    const s = value ?? "";
    let score = 0;
    if (s.length >= 6) score++;
    if (/[a-z]/.test(s) && /[A-Z]/.test(s)) score++;
    if (/\d/.test(s) || /[^A-Za-z0-9]/.test(s)) score++;
    return Math.min(3, score);
  }, [value, showStrength, mode]);

  return (
    <div className={cn("w-full", outerClassName ?? className)}>
      {/* MAIN LABEL */}
      {label && (
        <label
          className={cn(
            "block mb-3 text-sm text-secondary-150",
            labelClassName,
            mainLabelClassName
          )}
        >
          {label}
        </label>
      )}

      {/* PASSWORD / MAIN INPUT */}
      <div className="relative">
        <input
          id={id}
          type={mainType}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          placeholder={placeholder}
          className={cn(
            "w-full rounded-xl px-4 py-3 bg-transparent backdrop-blur-2xl border border-content2 text-sm text-content1-foreground",
            inputClassName,
            mainInputClassName
          )}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setVisibleMain(!visibleMain)}
            className={cn("absolute right-3 top-1/2 -translate-y-1/2", iconClassName, mainIconClassName)}
            aria-label={visibleMain ? "Hide password" : "Show password"}
          >
            {visibleMain ?  <SoundIcon /> : <EyeOffIcon /> }
          </button>
        )}
      </div>

      {/* FULL MODE (Confirm password + strength) */}
      {mode === "full" && isPassword && (
        <>
          {/* CONFIRM PASSWORD BLOCK */}
          {confirm && (
            <div className="mt-4">
              {/* Confirm password label */}
              <label
                className={cn(
                  "block mb-3 text-sm text-secondary-150",
                  confirmLabelClassName
                )}
              >
                Confirm Password
              </label>

              <div className="relative">
                <input
                  type={confirmType}
                  value={confirmValue}
                  onChange={(e) => onConfirmChange?.(e.target.value)}
                  placeholder="Confirm your password"
                  className={cn(
                    "w-full rounded-xl px-4 py-3 bg-transparent backdrop-blur-2xl border border-content2 text-sm text-content1-foreground",
                    inputClassName,
                    confirmInputClassName
                  )}
                />

                <button
                  type="button"
                  onClick={() => setVisibleConfirm(!visibleConfirm)}
                  className={cn("absolute right-3 top-1/2 -translate-y-1/2", iconClassName, confirmIconClassName)}
                  aria-label={visibleConfirm ? "Hide password" : "Show password"}
                >
                  {visibleConfirm ? <SoundIcon /> : <EyeOffIcon />}
                </button>
              </div>
            </div>
          )}

          {/* STRENGTH BAR */}
          {showStrength && (
            <div className={cn("mt-4", strengthWrapperClassName)}>
              <div className={cn("text-sm text-secondary-150 mb-2", strengthTitleClassName)}>Strength</div>

              <div className={cn("flex gap-2", strengthBarsClassName)}>
                {[1, 2, 3].map((n) => (
                  <div
                    key={n}
                    className={cn(
                      "h-1 flex-1 rounded-full",
                      n <= strength ? (strengthSegmentOnClassName ?? "bg-success") : (strengthSegmentOffClassName ?? "bg-success-100")
                    )}
                  />
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Inputprompt;

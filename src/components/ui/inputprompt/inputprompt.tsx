import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";
import {  EyeOffIcon } from "@/assets";
import { Input } from "../input/input";
import { EyeIcon } from "lucide-react";

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

  error?: string;
  confirmError?: string;

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
  errorClassName?: string;
  confirmErrorClassName?: string;
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

  error,
  confirmError,

  className,
  labelClassName,
  inputClassName,
  iconClassName,

  outerClassName,
  mainLabelClassName,
  mainInputClassName,
  mainIconClassName,
  errorClassName,

  confirmErrorClassName,

  confirmLabelClassName,
  confirmInputClassName,
  confirmIconClassName,

  strengthWrapperClassName,
  strengthTitleClassName,
  strengthBarsClassName,
  strengthSegmentOnClassName,
  strengthSegmentOffClassName,
}: InputpromptProps) => {
  const [visibleMain, setVisibleMain] = useState(false);
  const [visibleConfirm, setVisibleConfirm] = useState(false);

  const isPassword = type === "password";

  const mainType = isPassword ? (visibleMain ? "text" : "password") : type;
  const confirmType = visibleConfirm ? "text" : "password";

  const strength = useMemo(() => {
    if (!showStrength || mode === "single") return 0;
    let score = 0;
    if (value.length >= 6) score++;
    if (/[a-z]/.test(value) && /[A-Z]/.test(value)) score++;
    if (/\d|[^A-Za-z0-9]/.test(value)) score++;
    return Math.min(3, score);
  }, [value, showStrength, mode]);

  return (
    <div className={cn("w-full", outerClassName ?? className)}>
      {/* MAIN LABEL */}
      {label && (
        <label
          className={cn(
            "block mb-3 text-h6 text-secondary-150",
            labelClassName,
            mainLabelClassName
          )}
        >
          {label}
        </label>
      )}

      {/* MAIN INPUT */}
      <div className="relative">
        <Input
          id={id}
          type={mainType}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          placeholder={placeholder}
          className={cn(
            "rounded-xl px-4 py-3 bg-content1-foreground/15 backdrop-blur-2xl  h-12 border-[1.5px] text-h6 text-content1-foreground",
            "focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-content1-foreground",
            error ? "border-danger focus-visible:ring-danger" : "border-content2",
            inputClassName,
            mainInputClassName
          )}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setVisibleMain(!visibleMain)}
            className={cn(
              "absolute right-3 top-1/2 -translate-y-1/2",
              iconClassName,
              mainIconClassName
            )}
          >
            {visibleMain ? <EyeIcon className="text-content1-foreground" />: <EyeOffIcon />}
          </button>
        )}
      </div>

      {/* MAIN ERROR */}
      {error && (
        <p className={cn("mt-2 pl-1 text-xs text-danger", errorClassName)}>{error}</p>
      )}

      {/* FULL MODE */}
      {mode === "full" && isPassword && (
        <>
          {/* CONFIRM INPUT */}
          {confirm && (
            <div className="mt-4">
              <label
                className={cn(
                  "block mb-3 text-h6 text-secondary-150",
                  confirmLabelClassName
                )}
              >
                Confirm Password
              </label>

              <div className="relative">
                <Input
                  type={confirmType}
                  value={confirmValue}
                  onChange={(e) => onConfirmChange?.(e.target.value)}
                  placeholder="Confirm your password"
                  className={cn(
                    "rounded-xl px-4 py-3 bg-content1-foreground/15 backdrop-blur-2xl h-12 border-[1.5px] text-h6 text-content1-foreground",
                    "focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-content1-foreground",
                    confirmError
                      ? "border-danger focus-visible:ring-danger"
                      : "border-content2",
                    inputClassName,
                    confirmInputClassName
                  )}
                />

                <button
                  type="button"
                  onClick={() => setVisibleConfirm(!visibleConfirm)}
                  className={cn(
                    "absolute right-3 top-1/2 -translate-y-1/2",
                    iconClassName,
                    confirmIconClassName
                  )}
                >
                  {visibleConfirm ? <EyeIcon className="text-content1-foreground" /> : <EyeOffIcon />}
                </button>
              </div>

              {/* CONFIRM ERROR */}
              {confirmError && (
                <p className={cn("mt-2 pl-1 text-xs text-danger", confirmErrorClassName)}>
                  {confirmError}
                </p>
              )}
            </div>
          )}

          {/* STRENGTH */}
          {showStrength && (
            <div className={cn("mt-4", strengthWrapperClassName)}>
              <div className={cn("text-h6 text-secondary-150 mb-2", strengthTitleClassName)}>
                Strength
              </div>

              <div className={cn("flex gap-2", strengthBarsClassName)}>
                {[1, 2, 3].map((n) => (
                  <div
                    key={n}
                    className={cn(
                      "h-1 flex-1 rounded-full",
                      n <= strength
                        ? strengthSegmentOnClassName ?? "bg-success"
                        : strengthSegmentOffClassName ?? "bg-success-100"
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

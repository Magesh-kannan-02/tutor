import { useState } from "react";
import { BackgroundBlur, LeftArrowIcon } from "@/assets";
import { SelectAge } from "./steps/SelectAge";
import { SelectGender } from "./steps/SelectGender";
import { ProgressBar } from "@/components";
import { SelectSkill } from "./steps/SelectSkill";
import { SelectConfidence } from "./steps/SelectConfidence";

export const Onboarding = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="bg-background-200 w-full h-screen py-5 px-4 overflow-y-auto flex flex-col gap-14">
    <BackgroundBlur
      size={400}
      className="fixed -top-5 -left-48 pointer-events-none"
    />
    <BackgroundBlur
      size={400}
      fillOpacity={0.2}
      className="fixed -bottom-20 -right-52 pointer-events-none"
    />

    <div className="relative z-10 flex gap-5 items-center pr-4">
      <span
        className="cursor-pointer"
        onClick={() => step > 1 && setStep(step - 1)}
      >
        <LeftArrowIcon />
      </span>
      <ProgressBar value={(step / 3) * 100} className="flex-1" />
    </div>

    {step === 1 && <SelectAge onNext={() => setStep(2)} />}
    {step === 2 && <SelectGender onNext={() => setStep(3)} />}
    {step === 3 && <SelectSkill onNext={() => setStep(4)} />}
    {step === 4 && <SelectConfidence onNext={() => setStep(5)} />}
  </div>

  );
};

import { useState } from "react";
import { BackgroundBlur, Logo } from "@/assets";
import { Button, Featurecard } from "@/components";

const FEATURES = [
  {
    id: "pronunciation",
    textContent: "Pronunciation",
    icontype: "microphone",
  },
  {
    id: "grammar",
    textContent: "Grammar",
    icontype: "pen",
  },
  {
    id: "vocabulary",
    textContent: "Vocabulary",
    icontype: "vocabulary",
  },
  {
    id: "fluency",
    textContent: "Fluency",
    icontype: "fluency",
  },
];

export const SelectTest = () => {
  const [activeFeature, setActiveFeature] = useState("grammar");

  return (
    <div className="bg-background-200 w-full h-full py-5 px-3 overflow-hidden">
      <BackgroundBlur size={400} className="fixed -top-5 -left-48" />
      <BackgroundBlur size={400} fillOpacity={0.2} className="fixed -bottom-20 -right-52" />
      <div className="flex flex-col gap-16">
        <div className="flex w-full justify-between items-center">
          <div className="flex items-center gap-2">
            <Logo />
            <p className="text-content1-foreground font-bold">Logo</p>
          </div>
          <Button
            buttonText="Login"
            textClassName="!text-body text-content1-foreground"
            baseClassName="rounded-[0.75rem] px-[1.531rem] py-[0.656rem] bg-gradient-to-b from-primary to-primary-foreground"
          />
        </div>

        <div className="flex justify-start items-center w-full flex-col gap-10 flex-1 ">
          <p className="text-content1-foreground font-black text-[1.75rem] max-w-[18.5rem] text-center">
            Pick what you’d like to{" "}
            <span className="text-primary-200">improve</span> first
          </p>
          <div className="flex justify-center items-center w-full flex-col gap-5">
            {FEATURES.map((feature) => (
              <Featurecard
                key={feature.id}
                textContent={feature.textContent}
                icontype={feature.icontype}
                isactive={activeFeature === feature.id}
                activevariant="solid"
                handleClick={() => setActiveFeature(feature.id)}
              />
            ))}
          </div>
        </div>
        <Button
          buttonText="Start improving"
          variant={"secondary"}
          textClassName="!text-[1.125rem] text-content1 font-medium font-sans"
          baseClassName="!py-7 "
        />
      </div>
    </div>
  );
};

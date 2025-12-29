import { BackgroundBlur, Logo } from "@/assets";
import { Button, Featurecard, RevealOnScroll } from "@/components";
import { RootLayout } from "@/layouts/withoutNavBar";
import { useSelectTestStore } from "@/store/select-test";
import { useNavigate } from "react-router-dom";

export const SelectTest = () => {
  const navigate = useNavigate();
  const { features, activeFeature, setActiveFeature } =
    useSelectTestStore();

  return (
    <RootLayout containerClassName="relative bg-content1 overflow-hidden px-4 py-4 w-full flex flex-col">
      {/* Background */}
      <BackgroundBlur
        size={400}
        className="absolute -top-5 -left-48 z-0 pointer-events-none"
      />
      <BackgroundBlur
        size={400}
        fillOpacity={0.3}
        className="absolute -bottom-20 -right-52 pointer-events-none"
      />

      {/* Header */}
      <div className="relative z-10 flex w-full justify-between items-center">
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

      <div className="relative z-10 flex-1 min-h-0 overflow-y-auto mt-8 w-full">
        <div className="flex flex-col items-center gap-10 pb-10 w-full">

          {/* Title  */}
           <RevealOnScroll>

          <p className="text-content1-foreground font-black text-body3  text-center">
            Pick what you’d like to{" "}
            <span className="text-primary-200">improve</span> first
          </p>
           </RevealOnScroll>

          {/* Feature cards */}
          <div className="flex flex-col gap-5 items-center w-full">
            {features?.map((feature,i) => (
                <RevealOnScroll key={feature.id} delay={0.15 + i * 0.05}
                  y={20}>

                  <Featurecard
                     
                    textContent={feature.textContent}
                    icontype={feature.icontype}
                    isactive={activeFeature === feature.id}
                    activevariant="solid"
                    handleClick={() => setActiveFeature(feature.id)}
                  />
                </RevealOnScroll>
            ))}
          </div>

        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 pt-4 w-full">
        <Button
          buttonText="Start improving"
          variant="secondary"
          textClassName="!text-[1.125rem] text-content1 font-medium font-sans"
          baseClassName="!py-7 w-full"
          onClick={() => navigate("/onboarding")}
        />
      </div>
    </RootLayout>
  );
};

import { BackgroundBlur, Logo } from "@/assets";
import { Button, Featurecard } from "@/components";
import { RootLayout } from "@/layouts";
import { useSelectTestStore } from "@/store/select-test";
import { useNavigate } from "react-router-dom";


export const SelectTest = () => {
  const navigate = useNavigate();
  const { features, activeFeature, setActiveFeature } =
    useSelectTestStore();

  return (
    <RootLayout>
      <div className="bg-background-200 w-full h-screen px-3 py-4 overflow-hidden flex flex-col">
        {/* Background */}
        <BackgroundBlur size={400} className="fixed -top-5 -left-48" />
        <BackgroundBlur
          size={400}
          fillOpacity={0.2}
          className="fixed -bottom-20 -right-52"
        />

        {/* Header */}
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

        {/* Title */}
        <p className="text-content1-foreground font-black text-[1.75rem] max-w-[18.5rem] text-center mx-auto mt-12">
          Pick what you’d like to{" "}
          <span className="text-primary-200">improve</span> first
        </p>

        <div className="flex-1 min-h-0 overflow-y-auto mt-10">
          <div className="flex flex-col gap-5 items-center pb-10">
            {features.map((feature) => (
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

        {/* Footer CTA */}
        <div className="pt-4">
          <Button
            buttonText="Start improving"
            variant="secondary"
            textClassName="!text-[1.125rem] text-content1 font-medium font-sans"
            baseClassName="!py-7 w-full"
            onClick={() => navigate("/onboarding")}
          />
        </div>
      </div>
    </RootLayout>
  );
};


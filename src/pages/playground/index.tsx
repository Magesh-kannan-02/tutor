
import {
  Button,
  Caption,
  Checkbox,
  Chip,
  CircularProgress,
  CircularTimer,
  Dropdown,
  Featurecard,
  Iconcard,
  Infocard,
  Levelcard,
  ProgressBar,
  Skillcard,
} from "@/components";
import React from "react";



export const PlayGround = () => {
  const [fruit, setFruit] = React.useState("");
  
  
  return (
    <div className="h-full m-auto w-full gap-4 p-7 flex-col  bg-black  justify-center items-center flex">
      <Button
        buttonText="Login" 
        textClassName="!text-body text-content1-foreground"
        baseClassName="rounded-[0.75rem] px-[1.531rem] py-[0.656rem]  bg-gradient-to-b from-primary to-primary-foreground "
      />
      <Button
        buttonText="Continue"
        variant={"secondary"}
        textClassName="!text-[1.125rem] text-content1 font-medium font-sans"
      />
      <Checkbox />
      {/*     
       <Card className="absolute left-[8rem] top-7 w-[370px] h-[78px]"> Hello World </Card> */}

      <Featurecard
        textContent="Pronunciation"
        icontype="microphone"
        isactive
        activevariant="solid"
      />
      <Featurecard textContent="<24" allowendendContent={false} />
      <Iconcard iconName="Female" icontype="female"  />
      <Skillcard title="Build confidence in speaking" icontype="female" isactive />
      <ProgressBar value={50} />
      <Featurecard
        textContent="People don’t understand my accent"
        className="py-[1.125rem] pl-[1.5rem] pr-[1.125rem]"
        textclassName=" !text-content1-foreground  !text-[1rem] text-body"
        allowStartIcon={false}
        checkboxClassName="data-[state=checked]:bg-primary-50 data-[state=checked]:border-primary-50"
        checkboxIndicatorClassName="text-content1-foreground"
        
      />

      <Featurecard
        textContent="Reading news/books"
        className="py-[0.875rem]  px-[1rem]"
        innerclassName="!gap-[0.75rem]"
        textclassName=" !text-content1-foreground  !text-[1rem] text-body"
        icontype="study"
        allowendendContent={true}
        checkboxClassName="data-[state=checked]:bg-primary-50 data-[state=checked]:border-primary-50"
        checkboxIndicatorClassName="text-content1-foreground"
        isactive
        changeIconColor={false}
      />
      <Infocard title="I understand in my mind, but struggle to say it out loud." />
      <Levelcard
         
        title="Beginner (A1-A2)"
        description="I can order food & handle basics."
      />
      <Chip text="Tour Guide" isactive />
      <Chip text="Medical Staff" />
     
     <Dropdown
    
  placeholder="Select"
  
  options={[
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Grapes", value: "grapes" },
    { label: "Apple", value: "appl" },
     
  ]}
  value={fruit}
  onChange={(val) => setFruit(val)}
/>
  <CircularTimer duration={20} size={140} strokeWidth={5} />
  <CircularProgress value={50} />
  <Caption />
  
    </div>
  );
};

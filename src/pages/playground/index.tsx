
import {
  
  Button,
  Caption,
  Checkbox,
  Chip,
  CircularProgress,
  CircularTimer,
  DrawerComponent,
  Dropdown,
  Featurecard,
  GrammarCard,
  Iconcard,
  Infocard,
  Levelcard,
  ProgressBar,
  Skillcard,
  VocabularyCard,
} from "@/components";

import React from "react";

export const PlayGround = () => {
  const [fruit, setFruit] = React.useState("");
  const [open, setOpen] = React.useState(false)
  const chipsData = [
  {
    label: "Play your Audio",
    activeLabel: "Helpful",
     
  },
  {
    label: "Beneficial",
    activeLabel: "Helpful",
     
  },
  {
    label: "Pleasant",
    activeLabel: "Enjoyable",
    
    
  },
  
];

  return (
    <div className="h-full m-auto w-full gap-4 p-7 flex-col bg-black  justify-center items-center flex">
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
      

      <Featurecard
        textContent="Pronunciation"
        icontype="microphone"
        isactive
        activevariant="solid"
      />
      <Featurecard textContent="<24" allowendendContent={false} />
      <Iconcard iconName="Female" icontype="female" />
      <Skillcard
        title="Build confidence in speaking"
        icontype="female"
        isactive
      />
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
      <GrammarCard
        title="Use the correct noun form:"
        message="I’m Working on it!"
        explanation="You can count apps or websites, but not software.Think of “software” as a whole category, not separate items."
        className="!bg-[#382F11] "
      />
      <VocabularyCard
  value="a1-good"
  level="A1"
  word="Good"
  optionalWord="Beneficial Pleasant"
  chips={chipsData}
  className="!bg-[#360F34]"
/>
     <Button
       
        buttonText="Open Drawer"
        textClassName="!text-body text-content1-foreground"
        handleOnClick={()=>setOpen(!open)}
        baseClassName="rounded-[0.75rem] px-[1.531rem] py-[0.656rem]  bg-gradient-to-b from-primary to-primary-foreground "
      />
     <DrawerComponent
     
       position="bottom"
         
      innerClassName="bg-secondary-200/10 backdrop-blur-xl border border-content1-100 "
      open={open}
     overlayClassName="fixed inset-x-0 mx-auto  bg-transparent "
      className=" !h-[480px] !mx-auto  "
      onOpenChange={setOpen}
     
       
    />
    </div>
  );
};

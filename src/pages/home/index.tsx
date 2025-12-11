import { useState } from "react";
import {
  Button,
  Caption,
  Checkbox,
  Chip,
  CircularProgress,
  CircularTimer,
  Drawer,
  Featurecard,
  Iconcard,
  Infocard,
  Inputprompt,
  Levelcard,
  ProgressBar,
  Skillcard,
  Wordscard,
} from "@/components";
import { Playcard } from "@/components/ui/playcard/playcard";
import { Avatarcard } from "@/components/atoms/avatarcard/avatarcard";

const Home = () => {
  const [drawerOpen, setDrawerOpen] = useState(false); 
  const [playing, setPlaying] = useState(false);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  return (
    <div className="h-full m-auto w-full bg-black gap-4 p-7 flex-col   justify-center items-center flex">
      <Button
        buttonText="Login"
        textClassName="!text-body text-content1-foreground"
        baseClassName="rounded-[0.75rem] px-[1.531rem] py-[0.656rem]  bg-gradient-to-b from-primary to-primary-foreground "
      />
      <Checkbox />
      {/*     
       <Card className="absolute left-[8rem] top-7 w-[370px] h-[78px]"> Hello World </Card> */}

      <Featurecard textContent="Pronunciation"  icontype="microphone"  />
      <Featurecard textContent="<24" allowendendContent={false} />
      <Iconcard iconName="Female" icontype="female" />
      <Skillcard title="Build confidence in speaking" icontype="female" />
      <ProgressBar value={70} />
      <Featurecard
        textContent="People don’t understand my accent"
        className="py-[1.125rem] pl-[1.5rem] pr-[1.125rem]"
        textclassName=" !text-content1-foreground  !text-[1rem] text-body"
        allowStartIcon={false}
        activeClassName="backdrop-blur-[6.25rem] bg-content1-foreground/30"
        checkboxClassName="data-[state=checked]:bg-primary-50 data-[state=checked]:border-primary-50"
        checkboxIndicatorClassName="text-content1-foreground"
      />

      <Featurecard
        textContent="Reading news/books"
        className="py-[0.875rem]  px-[1rem]"
        innerclassName="!gap-[0.75rem]"
        textclassName=" !text-content1-foreground  !text-[1rem] text-body"
        icontype="study"
        activeClassName="backdrop-blur-[6.25rem] bg-content1-foreground/30"
        allowendendContent={true}
        checkboxClassName="data-[state=checked]:bg-primary-50 data-[state=checked]:border-primary-50"
        checkboxIndicatorClassName="text-content1-foreground"
        isactive
        changeIconColor={false}
      />
      <Infocard title="I understand in my mind, but struggle to say it out loud." />
      <Levelcard  title="Beginner (A1–A2)" description="I can order food & handle basics."/>
      <Chip text="Tour Guide"  isactive  />
      <Chip text="Medical Staff"   />
      <CircularTimer duration={20} size={140} strokeWidth={5}  />
      <CircularProgress value={50} />
      <Caption />
      <Drawer
        open={drawerOpen}                      
        onClose={() => setDrawerOpen(false)}   
        header="Incorrect Verb Form"
        contentClassname="h-40 flex items-start justify-center"
        content={
          <div className="text-center text-lg text-content1-foreground">
            <span className="text-red-500">I </span>
            <span className="text-green-500 font-bold">I'm</span> working on it
          </div>
        }
      />
      <Wordscard
        icontype="snail"
        iconName="snail"
        caption="63 Words — Slow"
        description="You're doing great! Push your pace slightly to sound more natural and lively."
      />
      <Wordscard
        icontype="arm"
        iconName="arm"
        title="Grammar’s got a few tricks up its sleeve 😏"
        titleClassname="text-lg text-content1-foreground font-bold"
        caption="Let’s break them down and fix them fast."
        captionClassname="text-sm text-medium text-secondary-150"
      />
      
      <Playcard
        title="actually"
        icontype={playing ? "sound" : "play"} 
        iconName={playing ? "sound" : "play"}
        onClick={() => setPlaying(!playing)}   
      />

    <Inputprompt
      label="Your Name"
      placeholder="Enter your name"
      type="text"
      value={name}
      onChange={setName}
    />

    <Inputprompt
      label="Password"
      placeholder="Enter password"
      type="password"
      value={password}
      onChange={setPassword}      
    />

    <Inputprompt
      label="Password"
      placeholder="Enter password"
      type="password"
      value={password}
      onChange={setPassword}
      confirm
      confirmValue={confirmPassword}
      onConfirmChange={setConfirmPassword}
      showStrength
      mode="full"     
    />

    <Avatarcard icontype="avatar" imageClassname="w-[12rem] h-[11rem]" className="w-36 h-36 overflow-hidden"/>


    </div>
  );
};

export default Home;

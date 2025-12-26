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
  Inputprompt,
  Levelcard,
  ProgressBar,
  Skillcard,
  Wordscard,
  VocabularyCard,
  BroadProgressBar,
  SemiCircleProgress,
  FocusArea,
  QuickTip,
  RadarChart,
  Navbar,
  Switch,
  StreakProgressCalendar,
  SessionCard,
} from "@/components";

import { Avatarcard } from "@/components/atoms/avatarcard/avatarcard";
import { Playcard } from "@/components/ui/playcard/playcard";

import React, { useState } from "react";

export const PlayGround = () => {
  const [fruit, setFruit] = React.useState("");
  const [playing, setPlaying] = useState(false);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [open, setOpen] = React.useState(false);
  const [mode, setMode] = useState<"streak" | "xp">("streak");
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
        titleClassname="text-body5 text-content1-foreground font-bold"
        caption="Let’s break them down and fix them fast."
        captionClassname="text-h6 text-medium text-secondary-150"
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

      <GrammarCard
        title="Use the correct noun form:"
        message="I’m Working on it!"
        explanation="You can count apps or websites, but not software.Think of “software” as a whole category, not separate items."
         
      />
      <VocabularyCard
        value="a1-good"
        level="A1"
        word="Good"
        optionalWord="Beneficial Pleasant"
        chips={chipsData}
         
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
      <BroadProgressBar value={40}/>
      <SemiCircleProgress value={50} 
      content={
        <div className="text-content1-foreground">
          <p>50%</p>
          <p>high</p>
        </div>
      }/>
      <FocusArea
        items={[
          {
            icontype: 'microphone',
            iconName: 'MicrophoneIcon',
            title: "Pronunciation",
            subtitle: "sound clearer",
          },
          {
            icontype: 'pen',
            iconName: 'MicrophoneIcon',
            title: "Grammar",
            subtitle: "use stronger words",
          },
          {
            icontype: 'vocabulary',
            iconName: 'MicrophoneIcon',
            title: "Vocabulary",
            subtitle: "build better sentences",
          },
          {
            icontype: 'fluency',
            iconName: 'MicrophoneIcon',
            title: "Fluency",
            subtitle: "speak smoothly",
          },
        ]}
      />
      <QuickTip
        icontype="snail"
        iconName="snail tip"
        description={
          <>Instead of saying <span className="text-primary-200">‘very good’</span>, try <span className="text-primary-200">‘excellent’</span>.</>
        }
      />

      <div className="w-full max-w-[400px] h-[350px]">
        <RadarChart/>
      </div>

      <Navbar
        defaultActive="home"
        items={[
          {
            key: "home",
            label: "Home",
            icontype: "home",
          },
          {
            key: "practice",
            label: "Practice",
            icontype: "microphone",
          },
          {
            key: "profile",
            label: "Profile",
            icontype: "profile",
          },
        ]}
        onChange={(key) => console.log("Active:", key)}
      />

      <Switch
        options={[
          { label: "Streak", value: "streak" },
          { label: "XP", value: "xp" },
        ]}
        value={mode}
        onValueChange={setMode}
      />

      <StreakProgressCalendar
        title="🔥 Your Streak Progress"
        subtitle="Current streak"
        streak= '01'
        iconType="fire"
        grid={[
          [
            { id: "1", active: true },
            { id: "2" },
            { id: "3" },
            { id: "4" },
            { id: "5" },
            { id: "6" },
            { id: "7" },
          ],
          [
            { id: "8" },
            { id: "9" },
            { id: "10" },
            { id: "11" },
            { id: "12" },
            { id: "13" },
            { id: "14" },
          ],
          [
            { id: "15" },
            { id: "16" },
            { id: "17" },
            { id: "18" },
            { id: "19" },
            { id: "20" },
            { id: "21" },
          ],
          [
            { id: "22" },
            { id: "23" },
            { id: "24" },
            { id: "25" },
            { id: "26" },
            { id: "27" },
            { id: "28" },
          ],
          [
            { id: "29" },
            { id: "30" },
            { id: "31" },
            { id: "32" },
            { id: "33" },
            { id: "34" },
            { id: "35" },
          ],
        ]}
      />

      <SessionCard
        subtitle="Career Chat — Tour Guide"
        feedback="Great clarity, work on pacing."
        icontype="microphone"
        handleleftclick={() => console.log("Try Again")}
        handlerightclick={() => console.log("View Report")}
        leftButtonValue="Try Again"
        rightButtonValue="View Report"
      />
      

    </div>
  );
};

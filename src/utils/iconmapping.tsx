import { HomeIcon, MicrophoneIcon, ProfileIcon } from "@/assets";
import { PlayIcon } from "@/assets";
import { SoundIcon } from "@/assets";
import { FluencyIcon } from "@/assets";
import { PenIcon } from "@/assets";
import { VocabularyIcon } from "@/assets";
import femaleImg from "@/assets/images/female.png";
import StudyImg from "@/assets/images/study.png";
import BeginnerImg from "@/assets/images/beginner.png";
import SnailImg from "@/assets/images/snail.png";
import ArmImg from "@/assets/images/arm.png";
import AvatarImg from "@/assets/images/avatar.png";
import VirusImg from "@/assets/images/virus.png";
import TrophyImg from "@/assets/images/trophy.png";
import HappyImg from "@/assets/images/smile.png";
import SmileImg from "@/assets/images/decent.png";

import maleImg from "@/assets/images/male.png";
import thinkImg from "@/assets/images/think.png";
import writingImg from "@/assets/images/writing.png";
import notesImg from "@/assets/images/notes.png";
import earImg from "@/assets/images/ear.png";
import mouthImg from "@/assets/images/mouth.png";
import tickImg from "@/assets/images/tick.png";
import wrongImg from "@/assets/images/wrong.png";
import sadImg from "@/assets/images/sad.png";
import monkeyImg from "@/assets/images/monkey.png";
import messageImg from "@/assets/images/message.png";
import workingImg from "@/assets/images/working.png";
import earbudsImg from "@/assets/images/earbuds.png";
import computerImg from "@/assets/images/computer.png";
import graphImg from "@/assets/images/graph.png";
import graduateImg from "@/assets/images/graduate.png";
import toolsImg from "@/assets/images/tools.png";
import aimImg from "@/assets/images/aim.png";
import firstaidImg from "@/assets/images/firstaid.png";
import brushImg from "@/assets/images/brush.png";
import searchImg from "@/assets/images/search.png";
import brickImg from "@/assets/images/brick.png";
import sleepImg from "@/assets/images/sleep.png";
import overFearImg from "@/assets/images/overfear.png";
import fearImg from "@/assets/images/fear.png";
import brainImg from "@/assets/images/brain.png";
import coolImg from "@/assets/images/cool.png";
import timeImg from "@/assets/images/time.png";
import airImg from "@/assets/images/air.png";
import coupleImg from "@/assets/images/couple.png";
import bigGraphImg from "@/assets/images/bigGraph.png";
import diamondImg from "@/assets/images/diamond.png";
import intermediateImg from "@/assets/images/intermediate.png";
import upperIntermediateImg from "@/assets/images/upperIntermediate.png";
import advancedImg from "@/assets/images/advanced.png";

import FireImg from '@/assets/images/fire.png';
export type SVGIcon = React.ComponentType<{
  fill?: string;
  className?: string;
}>;

export const iconMapping: Record<
  string,
  { type: "svg"; icon: SVGIcon } | { type: "image"; icon: string }
> = {
  microphone: {
    type: "svg",
    icon: MicrophoneIcon,
  },
  female: {
    type: "image",
    icon: femaleImg,
  },
  study: {
    type: "image",
    icon: StudyImg,
  },
  beginner: {
    type: "image",
    icon: BeginnerImg,
  },
  snail: {
    type: "image",
    icon: SnailImg,
  },
  arm: {
    type: "image",
    icon: ArmImg,
  },
  play: {
    type: "svg",
    icon: PlayIcon,
  },
  sound: {
    type: "svg",
    icon: SoundIcon,
  },
  avatar: {
    type: "image",
    icon: AvatarImg,
  },
  pen: {
    type: "svg",
    icon: PenIcon,
  },
  vocabulary: {
    type: "svg",
    icon: VocabularyIcon,
  },
  fluency: {
    type: "svg",
    icon: FluencyIcon,
  },
  virus: {
    type: "image",
    icon: VirusImg,
  },
  cup: {
    type: "image",
    icon: TrophyImg,
  },
  super: {
    type: "image",
    icon: HappyImg,
  },
  decent: {
    type: "image",
    icon: SmileImg,
  },

  male: {
    type: "image",
    icon: maleImg,
  },
  think: {
    type: "image",
    icon: thinkImg,
  },
  mouth: {
    type: "image",
    icon: mouthImg,
  },
  writing: {
    type: "image",
    icon: writingImg,
  },
  ear: {
    type: "image",
    icon: earImg,
  },
  notes: {
    type: "image",
    icon: notesImg,
  },
  tick: {
    type: "image",
    icon: tickImg,
  },
  wrong: {
    type: "image",
    icon: wrongImg,
  },
  sad: {
    type: "image",
    icon: sadImg,
  },
  message: {
    type: "image",
    icon: messageImg,
  },
  earbuds: {
    type: "image",
    icon: earbudsImg,
  },
  working: {
    type: "image",
    icon: workingImg,
  },
  computer: {
    type: "image",
    icon: computerImg,
  },
  monkey: {
    type: "image",
    icon: monkeyImg,
  },
  graph: {
    type: "image",
    icon: graphImg,
  },
  graduate: {
    type: "image",
    icon: graduateImg,
  },
  tools: {
    type: "image",
    icon: toolsImg,
  },
  aim: {
    type: "image",
    icon: aimImg,
  },
  firstaid: {
    type: "image",
    icon: firstaidImg,
  },
  brush: {
    type: "image",
    icon: brushImg,
  },
  search: {
    type: "image",
    icon: searchImg,
  },
  time: {
    type: "image",
    icon: timeImg,
  },
  brick: {
    type: "image",
    icon: brickImg,
  },
  sleep: {
    type: "image",
    icon: sleepImg,
  },
  overfear: {
    type: "image",
    icon: overFearImg,
  },
  brain: {
    type: "image",
    icon: brainImg,
  },
  fear: {
    type: "image",
    icon: fearImg,
  },
  cool: {
    type: "image",
    icon: coolImg,
  },
  couple: {
    type: "image",
    icon: coupleImg,
  },
  air: {
    type: "image",
    icon: airImg,
  },
  bigGraph: {
    type: "image",
    icon: bigGraphImg,
  },
  diamond: {
    type: "image",
    icon: diamondImg,
  },
  intermediate: {
    type: "image",
    icon: intermediateImg,
  },
  upperIntermediate: {
    type: "image",
    icon: upperIntermediateImg,
  },
  advanced: {
    type: "image",
    icon: advancedImg,
  },
  home:{
      type:'svg',
      icon: HomeIcon
    },
    profile:{
      type:'svg',
      icon: ProfileIcon
    },
    fire:{
      type:'image',
      icon: FireImg
    }
};

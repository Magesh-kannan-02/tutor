import { MicrophoneIcon } from "@/assets";
import { PlayIcon } from "@/assets";
import { SoundIcon } from "@/assets";
import { FluencyIcon } from "@/assets";
import { PenIcon } from "@/assets";
import { VocabularyIcon } from "@/assets";
import femaleImg from "@/assets/images/female.png";
import StudyImg from "@/assets/images/study.png";
import BeginnerImg from "@/assets/images/beginner.png";
import SnailImg from "@/assets/images/snail.png";
import ArmImg from "@/assets/images/arm.png"
import AvatarImg from '@/assets/images/avatar.png';
import VirusImg from '@/assets/images/virus.png';
import TrophyImg from '@/assets/images/trophy.png';
import HappyImg from '@/assets/images/smile.png';
import SmileImg from '@/assets/images/decent.png';
import SadImg from '@/assets/images/sad.png';
export type SVGIcon = React.ComponentType<{ fill?: string ,className?:string}>;

export const iconMapping: Record<
  string,
  { type: "svg"; icon: SVGIcon } | { type: "image"; icon: string }
> ={
    microphone: {
    type: "svg",
    icon: MicrophoneIcon,
    },
    female:{
    type: "image",
    icon: femaleImg,
    },
    study:{
    type: "image",
    icon: StudyImg,
    },
    beginner:{
    type: "image",
    icon: BeginnerImg,
    },
    snail:{
      type: "image",
      icon: SnailImg
    },
    arm:{
      type: "image",
      icon: ArmImg
    },
    play:{
      type: "svg",
      icon: PlayIcon
    },
    sound:{
      type: "svg",
      icon: SoundIcon
    },
    avatar:{
      type:'image',
      icon: AvatarImg
    },
    pen:{
      type:'svg',
      icon: PenIcon
    },
    vocabulary:{
      type:'svg',
      icon: VocabularyIcon
    },
    fluency:{
      type:'svg',
      icon: FluencyIcon
    },
   virus:{
      type:'image',
      icon: VirusImg
    },
   cup:{
      type:'image',
      icon: TrophyImg
    },
   super:{
      type:'image',
      icon: HappyImg
    },
   decent:{
      type:'image',
      icon: SmileImg
    },
   sad:{
      type:'image',
      icon: SadImg
    },
    
}
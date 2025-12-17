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
    
}
import { MicrophoneIcon } from "@/assets";
import femaleImg from "@/assets/images/female.png";
import StudyImg from "@/assets/images/study.png";
import BeginnerImg from "@/assets/images/beginner.png";
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
    
}
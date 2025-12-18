import type { ReportState } from "../types";

export interface MetaData {
  title: string;
  value: number;
  description: string;
  gradientFrom: string;
  gradientTo: string;
  trackColor: string;
  bgColour: string;
}

export interface FrequencyItem {
  id: string;
  title: string;
  heading: string;
  description: string;
  iconType: string;
}

export interface FluencySliceTypes extends MetaData {
  data: FrequencyItem[];
  
}

export type FluencyState = FluencySliceTypes;

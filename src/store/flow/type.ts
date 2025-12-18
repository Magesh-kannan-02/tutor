import type { PageKey, StepKey } from "@/utils/constants";

interface FlowSlice  {
  stepIndex: number;
  pageIndex: number;

  next: () => void;
  back: () => void;
 goTo: <T extends StepKey>(step: T, page?: PageKey<T>) => void;
  reset: () => void;
};
export type FlowState=FlowSlice;
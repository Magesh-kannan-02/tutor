import type { StateCreator } from "zustand";
import type { FlowState } from "./type";
import { FLOW, type PageKey, type StepKey } from "@/utils/constants";

export const createFlowSlice: StateCreator<FlowState> = (set, get) => ({
  stepIndex: 0,
  pageIndex: 0,
  direction:"forward",

  next: () => {
    console.log(get().pageIndex, get().stepIndex);
     set({direction:"forward"})
    
    const { stepIndex, pageIndex } = get();
    const step = FLOW[stepIndex];

    if (pageIndex < step.pages.length - 1) {
      set({ pageIndex: pageIndex + 1 });
      return;
    }

    if (stepIndex < FLOW.length - 1) {
      set({ stepIndex: stepIndex + 1, pageIndex: 0 });
    }
  },

  back: () => {
    const { stepIndex, pageIndex } = get();
      set({direction:"back"})

    if (stepIndex === 0 && pageIndex === 0) return;

    if (pageIndex > 0) {
      set({ pageIndex: pageIndex - 1 });
      return;
    }

    const prev = FLOW[stepIndex - 1];
    set({
      stepIndex: stepIndex - 1,
      pageIndex: prev.pages.length - 1,
    });
  },

  goTo: <T extends StepKey>(stepKey: T, pageKey?: PageKey<T>) => {
    const stepIndex = FLOW.findIndex((s) => s.key === stepKey);
    if (stepIndex === -1) return;

    const step = FLOW[stepIndex];
    const pageIndex = pageKey ? step.pages.indexOf(pageKey as never) : 0;

    set({
      stepIndex,
      pageIndex,
    });
  },
  getCurrentStep: () => FLOW[get().stepIndex].key,

  getCurrentPage: () => {
    const { stepIndex, pageIndex } = get();
    return FLOW[stepIndex]?.pages[pageIndex];
  },

  reset: () => set({ stepIndex: 0, pageIndex: 0 }),
});

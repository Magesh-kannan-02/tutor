// onboarding.store.ts
import { type StateCreator } from "zustand";
import type { FeedbackState } from "./types";

export const createFeedbackSlice: StateCreator<FeedbackState> = (set) => ({
  currentfeedbackid: "",
  
  isButtonDisabled: false,
 

  updateFeedback: (id: string) => {
    set({ currentfeedbackid: id });
  },
  
  
});

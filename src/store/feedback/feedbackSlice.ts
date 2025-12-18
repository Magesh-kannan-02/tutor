// onboarding.store.ts
import { type StateCreator } from "zustand";
import type { FeedbackState } from "./types";

export const createFeedbackSlice: StateCreator<FeedbackState> = (set) => ({
  currentfeedbackid: "",
  personalInfo: {
    name: "",
    password: "",
    verficationCode: "",
  },

  updateFeedback: (id: string) => {
    set({ currentfeedbackid: id });
  },
  updatePersonalInfo: (key, value) =>
    set((state) => ({
      personalInfo: {
        ...state.personalInfo,
        [key]: value,
      },
    })),
  resetpersonalInfo: () => {
    set({
      personalInfo: {
        name: "",
        email: "",
        verficationCode: "",
      },
    });
  },
});

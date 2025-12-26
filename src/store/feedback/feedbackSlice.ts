// onboarding.store.ts
import { type StateCreator } from "zustand";
import type { FeedbackState } from "./types";

export const createFeedbackSlice: StateCreator<FeedbackState> = (set) => ({
  currentfeedbackid: "",
  personalInfo: {
    name: "",
    password: "",
    verficationCode: "",
    confirm_password: "",
  },
  isButtonDisabled: false,
  personalInfoErrors:{
    name: "",
    password: "",
    verficationCode: "",
    confirm_password: "",

  }
  ,

  updateFeedback: (id: string) => {
    set({ currentfeedbackid: id });
  },
  updateErrors: (key, value) =>
    set((state) => ({
      personalInfoErrors: {
        ...state.personalInfoErrors,
        [key]: value,
      },
    })),
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
        confirm_password: "",
        password: "",
      },
    });
  },
});

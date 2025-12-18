import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import type { OnboardingStore } from "./types";
import { createOnboardingSlice } from "./onboardingSlice";

export const useOnboardingStore = create<OnboardingStore>()(
  immer((...state) => ({
    ...createOnboardingSlice(...state),
  }))
);

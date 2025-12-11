import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { createAuthSlice } from "./authSlice";
import type { AuthSliceState } from "./types";

export const useAuthStore = create<AuthSliceState>()(
  immer((...state) => ({
    ...createAuthSlice(...state),
  }))
);

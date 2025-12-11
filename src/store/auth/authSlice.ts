import type { StateCreator } from "zustand";
import type { AuthSliceState } from "./types";

export const createAuthSlice: StateCreator<AuthSliceState> = (set,get) => ({
  token: null,
  setToken: (token: string) => set({ token }),
  logout: () => set({ token: null }),
});

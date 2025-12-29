import { create } from "zustand";
import { createAccountSlice } from "./accountSlice";
import type { AccountSliceState } from "./types";
type AccountState = AccountSliceState;

export const useAccountStore = create<AccountState>((...state) => ({
  ...createAccountSlice(...state),
}));

import type { StateCreator } from "zustand";
import type { GrammarState } from "./types";

const initialGrammarState: GrammarState = {
  title: {
    iconType: "",
    title: "",
    description: "",
  },
  data: [],
};
export const createGrammarSlice: StateCreator<GrammarState> = () => ({
  ...initialGrammarState,
});
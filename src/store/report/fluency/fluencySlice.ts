import type { StateCreator } from "zustand";
import type { FluencyState } from "./types";

export const createFluencySlice: StateCreator<FluencyState> = () => ({
  title: "Fluency",
  value: 0,
  description: "",
  gradientFrom: "#63FF7F",
  gradientTo: "#035C24",
  trackColor: "#1f3b28",
  bgColour: "bg-primary-250",
  data: [],
});

import type { StateCreator } from "zustand";
import type { VocabularyState } from "./types";


export const createVocabularySlice: StateCreator<VocabularyState> = () => ({
   data:[],
   score:0,
   title:{
    iconType:"",
    title:"",
   },
   description:""

});
import type { StateCreator } from "zustand";
import type {
  OnboardingStore,
  OnboardingState,
  AgeGroupOption,
  GenderOption,
  LevelOption,
  SkillOption,
  WorkAreaOption,
  DifficultyOption,
  TripOption,
  UseCaseOption,
  FeelOptionItem,
} from "./types";

/* ================= MOCK DATA ================= */

const initialMockData = {
  ageGroups: [
    { id: "<24", label: "<24" },
    { id: "25-34", label: "25 - 34" },
    { id: "35-44", label: "35 - 44" },
    { id: "45-54", label: "45 - 54" },
    { id: "55-64", label: "55 - 64" },
    { id: "65+", label: "65+" },
  ] satisfies AgeGroupOption[],

  genders: [
    { id: "male", label: "Male", icon: "male" },
    { id: "female", label: "Female", icon: "female" },
  ] satisfies GenderOption[],

  levels: [
    {
      id: "beginner",
      label: "Beginner (A1–A2)",
      description: "I can order food & handle basics.",
    },
    {
      id: "intermediate",
      label: "Intermediate (B1)",
      description: "I can chat about daily topics.",
    },
    {
      id: "upperIntermediate",
      label: "Upper-Intermediate (B2)",
      description: "I can discuss & explain my opinions.",
    },
    {
      id: "advanced",
      label: "Advanced (C1–C2)",
      description: "I can express myself in any situation.",
    },
  ] satisfies LevelOption[],

  skills: [
    { id: "speaking", title: "Build confidence in speaking", icon: "think" },
    { id: "pronunciation", title: "Pronounce words clearly", icon: "mouth" },
    { id: "vocabulary", title: "Grow your vocabulary", icon: "arm" },
    { id: "grammar", title: "Fix grammar mistakes", icon: "writing" },
    { id: "listening", title: "Understand native speakers better", icon: "ear" },
    { id: "writing", title: "Write with ease", icon: "notes" },
  ] satisfies SkillOption[],

  workAreas: [
    { label: "Technology & Engineering", icon: "working", iconClass: "w-7" },
    { label: "Finance & Business", icon: "graph", iconClass: "w-7" },
    { label: "Students & Education", icon: "graduate", iconClass: "w-7" },
    { label: "Services & Skilled Work", icon: "tools", iconClass: "w-7" },
    { label: "Marketing & Sales", icon: "aim", iconClass: "w-7" },
    { label: "Science & Healthcare", icon: "firstaid", iconClass: "w-7" },
    { label: "Media & Creativity", icon: "brush", iconClass: "w-7" },
    { label: "Currently Unemployed", icon: "search", iconClass: "w-7" },
  ] satisfies WorkAreaOption[],

  confidenceIssuesOptions: [
    "I freeze up",
    "I struggle to explain myself",
    "People don't understand my accent",
    "I mess up grammar",
    "I reply too slowly",
    "None of the above",
  ],

  difficultyOptions: [
    { label: "Hard to find time", icon: "time", iconClass: "w-7" },
    { label: "Struggle to stay motivated", icon: "sleep", iconClass: "w-7" },
    { label: "Not enough practice", icon: "overfear", iconClass: "w-7" },
    { label: "Forget what I learn quickly", icon: "brain", iconClass: "w-7" },
    { label: "Nervous when speaking", icon: "fear", iconClass: "w-7" },
    { label: "Feels too complicated", icon: "brick", iconClass: "w-7" },
    { label: "Honestly, no problem. I'm good!", icon: "cool", iconClass: "w-7" },
  ] satisfies DifficultyOption[],

  tripOptions: [
    { label: "Breaking the ice", icon: "think", iconClass: "w-7" },
    { label: "Keeping the conversation going", icon: "air", iconClass: "w-7" },
    { label: "Thinking of words on the spot", icon: "search", iconClass: "w-7" },
    { label: "Catching different accents", icon: "couple", iconClass: "w-7" },
    { label: "Explaining big ideas", icon: "brain", iconClass: "w-7" },
  ] satisfies TripOption[],

  useCaseOptions: [
    { label: "Reading news/books", icon: "study", iconClass: "w-7" },
    { label: "Watching shows/movies", icon: "computer", iconClass: "w-7" },
    { label: "Listening to music", icon: "earbuds", iconClass: "w-7" },
    { label: "At work or study", icon: "working", iconClass: "w-7" },
    { label: "Talking with people", icon: "message", iconClass: "w-7" },
    { label: "Rarely", icon: "monkey", iconClass: "w-7" },
  ] satisfies UseCaseOption[],

  feelOptions: [
    { id: "no", label: "No", icon: "wrong" },
    { id: "maybe", label: "May be", icon: "sad" },
    { id: "yes", label: "Yes", icon: "tick" },
  ] satisfies FeelOptionItem[],

  contextChips: ["Tour Guide", "Medical Staff", "Teacher", "Lawyer"],

  contextCategories: [
    { label: "Career Training", value: "career" },
    { label: "Daily Conversation", value: "daily" },
  ],
};

/* ================= INITIAL STATE ================= */

const initialState: OnboardingState = {
  ageGroup: null,
  gender: null,
  englishLevel: null,
  selectedSkills: [],
  workArea: null,
  confidenceIssues: [],
  difficultyFactors: [],
  selectedTrips: [],
  englishUseCases: [],
  feelSameWay: null,
  contextCategory: undefined,
  selectedContext: "Tour Guide",

  ...initialMockData,

  currentStep: 1,
  totalSteps: 12,
  isCompleted: false,
  percentage: 40,
  statsValue: 7,
  isCallDrawerOpen: false,
  callDrawerCloseIn: 0,
};

/* ================= SLICE ================= */

export const createOnboardingSlice: StateCreator<
  OnboardingStore,
  [["zustand/immer", never]],
  [],
  OnboardingStore
> = (set, get) => ({
  ...initialState,

  setAgeGroup: (ageGroup) => set((s) => { s.ageGroup = ageGroup; }),
  setGender: (gender) => set((s) => { s.gender = gender; }),
  setEnglishLevel: (englishLevel) => set((s) => { s.englishLevel = englishLevel; }),
  setWorkArea: (workArea) => set((s) => { s.workArea = workArea; }),
  setFeelSameWay: (feelSameWay) => set((s) => { s.feelSameWay = feelSameWay; }),
  setContextCategory: (contextCategory) => set((s) => { s.contextCategory = contextCategory; }),
  setSelectedContext: (selectedContext) => set((s) => { s.selectedContext = selectedContext; }),

  toggleSkill: (skillId) =>
    set((s) => {
      if (s.selectedSkills.includes(skillId)) {
        s.selectedSkills = s.selectedSkills.filter(id => id !== skillId);
      } else {
        s.selectedSkills.push(skillId);
      }
    }),

  toggleConfidenceIssue: (issue) =>
    set((s) => {
      if (s.confidenceIssues.includes(issue)) {
        s.confidenceIssues = s.confidenceIssues.filter(i => i !== issue);
      } else {
        s.confidenceIssues.push(issue);
      }
    }),

  toggleDifficultyFactor: (factor) =>
    set((s) => {
      if (s.difficultyFactors.includes(factor)) {
        s.difficultyFactors = s.difficultyFactors.filter(f => f !== factor);
      } else {
        s.difficultyFactors.push(factor);
      }
    }),

  toggleTrip: (trip) =>
    set((s) => {
      if (s.selectedTrips.includes(trip)) {
        s.selectedTrips = s.selectedTrips.filter(t => t !== trip);
      } else {
        s.selectedTrips.push(trip);
      }
    }),

  toggleUseCase: (useCase) =>
    set((s) => {
      if (s.englishUseCases.includes(useCase)) {
        s.englishUseCases = s.englishUseCases.filter(u => u !== useCase);
      } else {
        s.englishUseCases.push(useCase);
      }
    }),


  setSelectedSkills: (selectedSkills) => set((s) => { s.selectedSkills = selectedSkills; }),
  setConfidenceIssues: (confidenceIssues) => set((s) => { s.confidenceIssues = confidenceIssues; }),
  setDifficultyFactors: (difficultyFactors) => set((s) => { s.difficultyFactors = difficultyFactors; }),
  setSelectedTrips: (selectedTrips) => set((s) => { s.selectedTrips = selectedTrips; }),
  setEnglishUseCases: (englishUseCases) => set((s) => { s.englishUseCases = englishUseCases; }),

  nextStep: () => set((s) => { s.currentStep = Math.min(s.currentStep + 1, s.totalSteps); }),
  prevStep: () => set((s) => { s.currentStep = Math.max(s.currentStep - 1, 1); }),
  goToStep: (step) => set((s) => { s.currentStep = Math.max(1, Math.min(step, s.totalSteps)); }),

  completeOnboarding: () => set((s) => { s.isCompleted = true; }),
  resetOnboarding: () => set(() => initialState),

  updateStats: (percentage, statsValue) => set((s) => {
    s.percentage = percentage;
    s.statsValue = statsValue;
  }),

  resetSelections: () =>
    set((s) => {
      s.ageGroup = null;
      s.gender = null;
      s.englishLevel = null;
      s.selectedSkills = [];
      s.workArea = null;
      s.confidenceIssues = [];
      s.difficultyFactors = [];
      s.selectedTrips = [];
      s.englishUseCases = [];
      s.feelSameWay = null;
      s.contextCategory = undefined;
      s.selectedContext = "Tour Guide";
    }),

  isStepValid: (step) => {
    const s = get();
    if (step === 1) return s.ageGroup !== null;
    if (step === 2) return s.gender !== null;
    if (step === 3) return s.englishLevel !== null;
    if (step === 4) return s.selectedSkills.length > 0;
    return true;
  },

  getProgressPercentage: () =>
    Math.round((get().currentStep / get().totalSteps) * 100),

  getAllSelections: () => ({
    ageGroup: get().ageGroup,
    gender: get().gender,
    englishLevel: get().englishLevel,
    selectedSkills: get().selectedSkills,
    workArea: get().workArea,
    confidenceIssues: get().confidenceIssues,
    difficultyFactors: get().difficultyFactors,
    selectedTrips: get().selectedTrips,
    englishUseCases: get().englishUseCases,
    feelSameWay: get().feelSameWay,
    contextCategory: get().contextCategory,
    selectedContext: get().selectedContext,
  }),

  openCallDrawer: (duration) =>
  set((s) => {
    s.isCallDrawerOpen = true;
    s.callDrawerCloseIn = duration;
  }),

closeCallDrawer: () =>
  set((s) => {
    s.isCallDrawerOpen = false;
    s.callDrawerCloseIn = 0;
  }),

tickCallDrawer: () =>
  set((s) => {
    if (s.callDrawerCloseIn <= 1) {
      s.isCallDrawerOpen = false;
      s.callDrawerCloseIn = 0;
    } else {
      s.callDrawerCloseIn -= 1;
    }
  }),

});

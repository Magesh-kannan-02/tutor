export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  NOT_AUTHORIZED: "/not-authorized",
  PLAYGROUND: "/playground",
  SELECT_TEST: "/select-test",
  ONBOARDING: "/onboarding",
  FEEDBACK: "/feedback",
  REPORT: "/report",

};
export const STEPS = {
  FLUENCY: "fluency",
  PRONUNCIATION:"pronunciation",
  VOCABULARY: "vocabulary",
  GRAMMAR: "grammar",
  COMPLETION: "completion",
  VERIFIED: "verified",
  RATING:"rating",
  FEED_BACKUSER_DDETAILS:"feedbackuserdetails",
  VERFIFICATION:"verification"
};
export const KEYS={
  ONBOARDING:"onboarding",
  FEEDBACK:"feedback",
  REPORT:"report"
}

export const ONBOARDING_PAGES = {
  
  AGE: "age",
  GENDER: "gender",
  SKILL: "skill",
  CONFIDENCE: "confidence",
  FEEL:"feel",
  USE: "use",
  AREA: "area",
  PERCENT:"percentage",
  DIFFICULTY:"difficulty",
  TRIPS:"trips",
  DIDYOUKNOW:"didyouknow",
  LEVEL: "level",
  CONTEXT: "context",
  CALL: "call",
} as const;


export const FLOW = [
  {
    key: KEYS.ONBOARDING,
    path: ROUTES.ONBOARDING,
    pages: [

      ONBOARDING_PAGES.AGE,
      ONBOARDING_PAGES.GENDER,
      ONBOARDING_PAGES.SKILL,
      ONBOARDING_PAGES.CONFIDENCE,
      ONBOARDING_PAGES.FEEL,
      ONBOARDING_PAGES.USE,
      ONBOARDING_PAGES.AREA,
      ONBOARDING_PAGES.PERCENT,
      ONBOARDING_PAGES.DIFFICULTY,
      ONBOARDING_PAGES.TRIPS,
      ONBOARDING_PAGES.DIDYOUKNOW,
      ONBOARDING_PAGES.LEVEL,
      ONBOARDING_PAGES.CONTEXT,
      ONBOARDING_PAGES.CALL,
    ] as const,
  },
  {
    key: KEYS.FEEDBACK,
    path: ROUTES.FEEDBACK,
    pages: [STEPS.RATING, STEPS.COMPLETION, STEPS.FEED_BACKUSER_DDETAILS, STEPS.VERFIFICATION, STEPS.VERIFIED] as const,
  },
  {
    key: KEYS.REPORT,
    path: ROUTES.REPORT,
    pages: [STEPS.FLUENCY,STEPS.PRONUNCIATION,  STEPS.GRAMMAR,STEPS.VOCABULARY] as const,
  },
] as const;

export type StepKey = (typeof FLOW)[number]["key"];
export type PageKey<T extends StepKey> = Extract<
  (typeof FLOW)[number],
  { key: T }
>["pages"][number];

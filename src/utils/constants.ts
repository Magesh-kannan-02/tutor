export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  NOT_AUTHORIZED: "/not-authorized",
  PLAYGROUND:"/playground",
  SELECT_TEST:"/select-test",

};
export const FLOW = [
  {
    key: "onboarding",
    pages: ["basic", "profile", "preferences"],
  },
  {
    key: "feedback",
    pages: ["rating", "comment"],
  },
  {
    key: "report",
    pages: ["summary", "confirm"],
  },
] as const;

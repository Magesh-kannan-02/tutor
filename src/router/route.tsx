import {
  FlowRenderer,
  Home,
  NotAuthorized,
  PlayGround,
  SelectTest,
  Accounts,
  AccountChange,
  Profile,
} from "@/pages";

import { ROUTES } from "@/utils";
interface Route {
  path: string;
  element: React.ReactNode;
}

// Public pages
export const publicRoutes: Route[] = [
  { path: ROUTES.NOT_AUTHORIZED, element: <NotAuthorized /> },
  { path: ROUTES.PLAYGROUND, element: <PlayGround /> },
  { path: ROUTES?.SELECT_TEST, element: <SelectTest /> },
  { path: ROUTES?.ONBOARDING, element: <FlowRenderer /> },
  { path: ROUTES.FEEDBACK, element: <FlowRenderer /> },
  { path: ROUTES.REPORT, element: <FlowRenderer /> },
];

// Protected pages
export const privateRoutes = [
  { path: ROUTES?.HOME, element: <Home /> },
  {
    path: ROUTES.ACCOUNTS,
    element: <Accounts />,
  },
  {
    path: ROUTES.CHANGE_NAME,
    element: <AccountChange />,
  },
  {
    path: ROUTES.CHANGE_EMAIL,
    element: <AccountChange />,
  },
  {
    path: ROUTES.PROFILE,
    element: <Profile />,
  },
  {
    path: ROUTES.VERIFICATION,
    element: <AccountChange />,
  },
  {
    path: ROUTES.VERIFIED,
    element: <AccountChange />,
  },
  {
    path: ROUTES.CHANGE_PASSWORD,
    element: <AccountChange />,
  },
  {
    path: ROUTES.OLD_PASSWORD,
    element: <AccountChange />,
  },
];

// Role-based access
export const roleRoutes: Record<string, string[]> = {
  admin: [ROUTES?.HOME],
  user: [
    ROUTES?.HOME,
    ROUTES?.ACCOUNTS,
    ROUTES.CHANGE_NAME,
    ROUTES.CHANGE_EMAIL,
    ROUTES.PROFILE,
    ROUTES.VERIFICATION,
    ROUTES.VERIFIED,
    ROUTES.CHANGE_PASSWORD,
  ],
};

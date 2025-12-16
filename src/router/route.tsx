import {Home,NotAuthorized,PlayGround,SelectTest,Onboarding} from "@/pages";


import { ROUTES } from "@/utils";
// Public pages
export const publicRoutes = [
  { path: ROUTES.NOT_AUTHORIZED, element: <NotAuthorized /> },
  { path: ROUTES.PLAYGROUND, element: <PlayGround /> },
  { path: ROUTES?.SELECT_TEST, element: <SelectTest /> }, 
  { path: ROUTES?.ONBOARDING, element: <Onboarding /> }, 
];

// Protected pages
export const privateRoutes = [
  { path: ROUTES?.HOME, element: <Home /> },
];

// Role-based access
export const roleRoutes: Record<string, string[]> = {
  admin: [ROUTES?.HOME],
  user: [ROUTES?.HOME],
};

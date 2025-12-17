import {Home,NotAuthorized,PlayGround,SelectTest} from "@/pages";


import { ROUTES } from "@/utils";
// Public pages
export const publicRoutes = [
  { path: ROUTES.NOT_AUTHORIZED, element: <NotAuthorized /> },
  { path: ROUTES.PLAYGROUND, element: <PlayGround /> },
  { path: ROUTES?.SELECT_TEST, element: <SelectTest /> }, 
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

import {Home,NotAuthorized,PlayGround} from "@/pages";


import { ROUTES } from "@/utils";
// Public pages
export const publicRoutes = [
  { path: ROUTES.NOT_AUTHORIZED, element: <NotAuthorized /> },
  { path: ROUTES.PLAYGROUND, element: <PlayGround /> },
  
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

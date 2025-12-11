import { Navigate, useLocation } from "react-router-dom";
import { roleRoutes } from "@/router/route";
import { ROUTES } from "@/utils";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const location = useLocation();
  const currentPath = location?.pathname;
  const userRole = "user";
  const isAuthenticated = true; // authentication logic 
  if (!isAuthenticated) {
    return <Navigate to={ROUTES?.LOGIN} replace />;
  }

  const allowedPaths = roleRoutes[userRole as keyof typeof roleRoutes];

  if (!allowedPaths || !allowedPaths.includes(currentPath)) {
    return <Navigate to={ROUTES?.NOT_AUTHORIZED} replace />;
  }

  return children;
}

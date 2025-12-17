import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./PrivateRoute";
import { privateRoutes, publicRoutes } from "@/router/route";
import {NotFound} from "@/pages";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        {publicRoutes?.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}

        {/* Protected routes */}
        {privateRoutes?.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<ProtectedRoute>{element}</ProtectedRoute>}
          />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

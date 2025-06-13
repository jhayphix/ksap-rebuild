// routes/RouteConfig.ts
import { RouteObject } from "react-router-dom";
import { usePublicRoutes } from "@/routes/PublicRoutes";

// This file will just hold the aggregation logic now, not actual routes.
export const useRouteConfig = (): RouteObject[] => {
  const publicRoutes = usePublicRoutes();
  // Add others like errorRoutes or authRoutes if needed

  return [...publicRoutes];
};

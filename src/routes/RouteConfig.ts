// routes/RouteConfig.ts
import { RouteObject } from "react-router-dom";
import { useErrorRoutes } from "@/routes/ErrorRoutes";

// This file will just hold the aggregation logic now, not actual routes.
export const useRouteConfig = (): RouteObject[] => {
  const errorRoutes = useErrorRoutes();

  return [...errorRoutes];
};

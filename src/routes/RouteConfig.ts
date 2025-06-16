// routes/RouteConfig.ts
import { RouteObject } from "react-router-dom";
import { usePublicRoutes } from "@/routes/PublicRoutes";
import { useErrorRoutes } from "@/routes/ErrorRoutes";
import { useGuestRoutes } from "@/routes/GuestRoutes";
import { useProtectedRoutes } from "@/routes/ProtectedRoutes";

// This file will just hold the aggregation logic now, not actual routes.
export const useRouteConfig = (): RouteObject[] => {
  const publicRoutes = usePublicRoutes();
  const errorRoutes = useErrorRoutes();
  const guestRoutes = useGuestRoutes();
  const protectedRoutes = useProtectedRoutes();

  return [...publicRoutes, ...guestRoutes, ...protectedRoutes, ...errorRoutes];
};

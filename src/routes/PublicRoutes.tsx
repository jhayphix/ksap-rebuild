// routes/PublicRoutes.ts
import { useNavigationContext } from "@/contexts/NavigationContextProvider";
import { RouteObject } from "react-router-dom";

export const usePublicRoutes = (): RouteObject[] => {
  const { home } = useNavigationContext();

  return [
    {
      path: home.path,
      element: <>Home Page</>,
    },
  ];
};

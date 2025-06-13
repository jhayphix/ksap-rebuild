// routes/PublicRoutes.ts
import { useNavigationContext } from "@/contexts/NavigationContextProvider";
import { RouteObject } from "react-router-dom";

export const usePublicRoutes = (): RouteObject[] => {
  const nav = useNavigationContext();

  return [
    {
      path: "/",
      element: <>Home Page</>,
    },
    {
      path: nav.externalScholarships.path,
      element: <>External Scholarships</>,
    },
  ];
};

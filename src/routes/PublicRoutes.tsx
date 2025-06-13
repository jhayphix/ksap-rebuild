import { useNavigationContext } from "@/contexts/NavigationContextProvider";
import { RouteObject } from "react-router-dom";
import DashboardPage from "@/pages/general/DashboardPage";
import ExternalScholarshipsPage from "@/pages/externalScholarships/ExternalScholarshipsPage";

export const usePublicRoutes = (): RouteObject[] => {
  const { home, dashboard, externalScholarships } = useNavigationContext();

  return [
    {
      path: home.path,
      element: <DashboardPage />,
    },
    {
      path: dashboard.path,
      element: <DashboardPage />,
    },
    {
      path: externalScholarships.path,
      element: <ExternalScholarshipsPage />,
    },
  ];
};

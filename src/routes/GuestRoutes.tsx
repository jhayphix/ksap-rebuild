import { useNavigationContext } from "@/contexts/NavigationContextProvider";
import { RouteObject } from "react-router-dom";
import AuthSelectionPage from "@/pages/auth/AuthSelectionPage";

export const useGuestRoutes = (): RouteObject[] => {
  const { authSelection } = useNavigationContext();

  return [
    {
      path: authSelection.path,
      element: <AuthSelectionPage />,
    },
  ];
};

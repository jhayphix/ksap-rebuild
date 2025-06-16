import { useNavigationContext } from "@/contexts/NavigationContextProvider";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { authSelection } = useNavigationContext();

  // Change this - use auth
  const isAuthenticated = true;
  const location = useLocation();

  if (!isAuthenticated) {
    return (
      <Navigate to={authSelection?.path} state={{ from: location }} replace />
    );
  }

  return children;
};

export default RequireAuth;

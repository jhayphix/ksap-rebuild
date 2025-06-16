import { Navigate } from "react-router-dom";

const RequireAdmin = ({ children }: { children: JSX.Element }) => {
  //   const userRole = "ADMIN";

  //   if (userRole !== "ADMIN" && userRole !== "SUPER_ADMIN") {
  //     return <Navigate to="/unauthorized" replace />;
  //   }

  return children;
};

export default RequireAdmin;

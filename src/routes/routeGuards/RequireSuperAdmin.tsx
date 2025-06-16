import { Navigate } from "react-router-dom";
const RequireSuperAdmin = ({ children }: { children: JSX.Element }) => {
  //   if (user?.role !== "SUPER_ADMIN") {
  //     return <Navigate to="/unauthorized" replace />;
  //   }

  return children;
};

export default RequireSuperAdmin;

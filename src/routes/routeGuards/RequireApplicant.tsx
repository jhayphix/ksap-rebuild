import { Navigate } from "react-router-dom";
const RequireApplicant = ({ children }: { children: JSX.Element }) => {
  //   if (user?.role !== "APPLICANT") {
  //     return <Navigate to="/unauthorized" replace />;
  //   }

  return children;
};

export default RequireApplicant;

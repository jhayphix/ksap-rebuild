import { Navigate } from "react-router-dom";

const RegisteredApplicantRoute = ({ children }: { children: JSX.Element }) => {
  //   const { user } = useAuth();

  //   if (!user?.applicantProfile) {
  //     return <Navigate to="/auth/applicant/register" replace />;
  //   }

  return children;
};

export default RegisteredApplicantRoute;

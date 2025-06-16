import { Navigate } from "react-router-dom";

const UnregisteredApplicantRoute = ({
  children,
}: {
  children: JSX.Element;
}) => {
  //   const { user } = useAuth();

  //   if (user?.applicantProfile) {
  //     return <Navigate to="/applications/my" replace />;
  //   }

  return children;
};

export default UnregisteredApplicantRoute;

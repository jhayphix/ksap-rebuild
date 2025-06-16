import { Routes, Route, useLocation } from "react-router-dom";
import { useContext } from "react";
import { NavigationContext } from "@contexts/NavigationContextProvider";

// Middleware
import AuthMiddleware from "@middleware/AuthMiddleware";
import ApplicantMiddleware from "@middleware/ApplicantMiddleware";
import AdminMiddleware from "@middleware/AdminMiddleware";
import SuperAdminMiddleware from "@middleware/SuperAdminMiddleware";
import ApplicantNotRegisteredMiddleware from "@middleware/ApplicantNotRegisteredMiddleware";
import RegisteredMiddleware from "@middleware/RegisteredMiddleware";

import RegisterApplicantPage from "@pages/auth/RegisterApplicantPage";

import UpdateApplicantPage from "@pages/auth/UpdateApplicantPage";
import ViewApplicantProfilePage from "@pages/auth/ViewApplicantProfilePage";
import MyApplicationsPage from "@pages/application/MyApplicationsPage";
import ViewApplicationPage from "@pages/application/ViewApplicationPage";
import CreateApplicationPage from "@pages/application/CreateApplicationPage";
import UpdateApplicationPage from "@pages/application/UpdateApplicationPage";

import CreateScholarshipPage from "@pages/scholarship/CreateScholarshipPage";
import UpdateScholarshipPage from "@pages/scholarship/UpdateScholarshipPage";

import ViewExternalScholarshipPage from "@pages/externalScholarship/ViewExternalScholarshipPage";
import CreateExternalScholarshipPage from "@pages/externalScholarship/CreateExternalScholarshipPage";
import UpdateExternalScholarshipPage from "@pages/externalScholarship/UpdateExternalScholarshipPage";
const WebRouting = () => {
  const location = useLocation();
  const {
    registerApplicantRoute,
    updateApplicantRoute,
    viewApplicantProfileRoute,
    myApplicationsRoute,
    viewApplicationRoute,
    createApplicationRoute,
    updateApplicationRoute,
    createScholarshipRoute,
    updateScholarshipRoute,

    viewExternalScholarshipRoute,
    createExternalScholarshipRoute,
    updateExternalScholarshipRoute,
  } = useContext(NavigationContext);

  return (
    <Routes location={location} key={location.pathname}>
      {/* ✅ Protected Routes (Only Authenticated Users) */}
      <Route element={<AuthMiddleware />}>
        {/* ✅ Applicant-Only Routes */}
        <Route element={<ApplicantMiddleware />}>
          {/* ✅ Unregistered Applicants Can Register */}
          <Route element={<ApplicantNotRegisteredMiddleware />}>
            <Route
              path={registerApplicantRoute?.path}
              element={<RegisterApplicantPage />}
            />
          </Route>

          {/* ✅ Registered Applicants */}
          <Route element={<RegisteredMiddleware />}>
            <Route
              path={viewApplicantProfileRoute?.path}
              element={<ViewApplicantProfilePage />}
            />
            <Route
              path={myApplicationsRoute?.path}
              element={<MyApplicationsPage />}
            />
            <Route
              path={viewApplicationRoute?.path}
              element={<ViewApplicationPage />}
            />
            <Route
              path={createApplicationRoute?.path}
              element={<CreateApplicationPage />}
            />
            <Route
              path={updateApplicationRoute?.path}
              element={<UpdateApplicationPage />}
            />
            <Route
              path={updateApplicantRoute?.path}
              element={<UpdateApplicantPage />}
            />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};
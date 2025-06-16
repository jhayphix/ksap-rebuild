import { RouteObject } from "react-router-dom";
import { Outlet } from "react-router-dom";

import { useNavigationContext } from "@/contexts/NavigationContextProvider";

// useProtectedRoutes.ts
import RequireAuth from "@/routes/routeGuards/RequireAuth";
import RequireAdmin from "@/routes/routeGuards/RequireAdmin";
import RequireSuperAdmin from "@/routes/routeGuards/RequireSuperAdmin";
import RequireApplicant from "@/routes/routeGuards/RequireApplicant";
import RequireRegisteredApplicant from "@/routes/routeGuards/RequireRegisteredApplicant";
import RequireNotRegisteredApplicant from "@/routes/routeGuards/RequireNotRegisteredApplicant";

// Pages
import ViewScholarshipPage from "@/pages/scholarships/ViewScholarshipPage";
import CreateScholarshipPage from "@/pages/scholarships/CreateScholarshipPage";
import UpdateScholarshipPage from "@/pages/scholarships/UpdateScholarshipPage";
import CreateExternalScholarshipPage from "@/pages/externalScholarships/CreateExternalScholarshipPage";
import ViewExternalScholarshipPage from "@/pages/externalScholarships/ViewExternalScholarshipPage";
import UpdateExternalScholarshipPage from "@/pages/externalScholarships/UpdateExternalScholarshipPage";
import AdminPanelPage from "@/pages/general/AdminPanelPage";
import EvaluateApplicationPage from "@/pages/applications/EvaluateApplicationPage";
import RegisterAdminPage from "@/pages/auth/admin/RegisterAdminPage";
import UpdateAdminPage from "@/pages/auth/admin/UpdateAdminPage";
import RegisterApplicantPage from "@/pages/auth/applicant/RegisterApplicantPage";
import ViewApplicantProfilePage from "@/pages/auth/applicant/ViewApplicantProfilePage";
import ViewAdminProfilePage from "@/pages/auth/admin/ViewAdminProfilePage";
import MyApplicationsPage from "@/pages/applications/MyApplicationsPage";
import SearchAndFilterPage from "@/pages/search/SearchAndFilterPage";
import ScholarshipApplicationsPage from "@/pages/scholarships/ScholarshipApplicationsPage";
import ManageUsersPage from "@/pages/auth/ManageUsersPage";

export const useProtectedRoutes = (): RouteObject[] => {
  const {
    viewScholarship,
    createScholarship,
    updateScholarship,
    viewExternalScholarship,
    createExternalScholarship,
    updateExternalScholarship,
    adminPanel,
    registerAdmin,
    evaluateApplication,
    viewAdminProfile,
    updateAdminProfile,
    searchAndFilter,
    scholarshipApplications,
    manageUsers,
    myApplications,
    registerApplicant,
    viewApplicantProfile,
  } = useNavigationContext();

  return [
    {
      element: (
        <RequireAuth>
          <Outlet />
        </RequireAuth>
      ),
      children: [
        {
          path: viewScholarship.path,
          element: <ViewScholarshipPage />,
        },

        // Admin only route
        {
          element: (
            <RequireAdmin>
              <Outlet />
            </RequireAdmin>
          ),
          children: [
            {
              path: adminPanel.path,
              element: <AdminPanelPage />,
            },
            {
              path: viewAdminProfile.path,
              element: <ViewAdminProfilePage />,
            },
            {
              path: evaluateApplication.path,
              element: <EvaluateApplicationPage />,
            },
            {
              path: scholarshipApplications.path,
              element: <ScholarshipApplicationsPage />,
            },
            {
              path: manageUsers.path,
              element: <ManageUsersPage />,
            },
            {
              path: searchAndFilter.path,
              element: <SearchAndFilterPage />,
            },

            {
              element: (
                <RequireSuperAdmin>
                  <Outlet />
                </RequireSuperAdmin>
              ),
              children: [
                {
                  path: createScholarship.path,
                  element: <CreateScholarshipPage />,
                },
                {
                  path: updateScholarship.path,
                  element: <UpdateScholarshipPage />,
                },
                {
                  path: updateAdminProfile.path,
                  element: <UpdateAdminPage />,
                },
                {
                  path: registerAdmin.path,
                  element: <RegisterAdminPage />,
                },
                {
                  path: viewExternalScholarship.path,
                  element: <ViewExternalScholarshipPage />,
                },
                {
                  path: createExternalScholarship.path,
                  element: <CreateExternalScholarshipPage />,
                },
                {
                  path: updateExternalScholarship.path,
                  element: <UpdateExternalScholarshipPage />,
                },
              ],
            },
          ],
        },

        // Applicant only Route
        {
          element: (
            <RequireApplicant>
              <Outlet />
            </RequireApplicant>
          ),
          children: [
            {
              element: (
                <RequireNotRegisteredApplicant>
                  <Outlet />
                </RequireNotRegisteredApplicant>
              ),
              children: [
                {
                  path: registerApplicant.path,
                  element: <RegisterApplicantPage />,
                },
              ],
            },
            {
              element: (
                <RequireRegisteredApplicant>
                  <Outlet />
                </RequireRegisteredApplicant>
              ),
              children: [
                {
                  path: myApplications.path,
                  element: <MyApplicationsPage />,
                },
                {
                  path: viewApplicantProfile.path,
                  element: <ViewApplicantProfilePage />,
                },
              ],
            },
          ],
        },
      ],
    },
  ];
};

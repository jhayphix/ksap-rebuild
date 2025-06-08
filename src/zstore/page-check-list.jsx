// Middleware
import AuthMiddleware from "@middleware/AuthMiddleware";
import GuestMiddleware from "@middleware/GuestMiddleware";
import ApplicantMiddleware from "@middleware/ApplicantMiddleware";
import AdminMiddleware from "@middleware/AdminMiddleware";
import SuperAdminMiddleware from "@middleware/SuperAdminMiddleware";
import ApplicantNotRegisteredMiddleware from "@middleware/ApplicantNotRegisteredMiddleware";
import RegisteredMiddleware from "@middleware/RegisteredMiddleware";

// Pages
import DashboardPage from "@pages/general/DashboardPage";
import AdminPanelPage from "@pages/general/AdminPanelPage";
import AuthSelectionPage from "@pages/auth/AuthSelectionPage";

import RegisterApplicantPage from "@pages/auth/RegisterApplicantPage";
import RegisterAdminPage from "@pages/auth/RegisterAdminPage";
import UpdateApplicantPage from "@pages/auth/UpdateApplicantPage";
import UpdateAdminPage from "@pages/auth/UpdateAdminPage";
import ViewApplicantProfilePage from "@pages/auth/ViewApplicantProfilePage";
import ViewAdminProfilePage from "@pages/auth/ViewAdminProfilePage";
import ManageUsersPage from "@pages/auth/ManageUsersPage";

import MyApplicationsPage from "@pages/application/MyApplicationsPage";
import ViewApplicationPage from "@pages/application/ViewApplicationPage";
import CreateApplicationPage from "@pages/application/CreateApplicationPage";
import UpdateApplicationPage from "@pages/application/UpdateApplicationPage";
import EvaluateApplicationPage from "@pages/application/EvaluateApplicationPage";
import SearchApplicationPage from "@pages/application/SearchApplicationPage";

import ViewScholarshipPage from "@pages/scholarship/ViewScholarshipPage";
import ScholarshipApplicationsPage from "@pages/scholarship/ScholarshipApplicationsPage";
import CreateScholarshipPage from "@pages/scholarship/CreateScholarshipPage";
import UpdateScholarshipPage from "@pages/scholarship/UpdateScholarshipPage";

import ExternalScholarshipsPage from "@pages/externalScholarship/ExternalScholarshipsPage";
import ViewExternalScholarshipPage from "@pages/externalScholarship/ViewExternalScholarshipPage";
import CreateExternalScholarshipPage from "@pages/externalScholarship/CreateExternalScholarshipPage";
import UpdateExternalScholarshipPage from "@pages/externalScholarship/UpdateExternalScholarshipPage";

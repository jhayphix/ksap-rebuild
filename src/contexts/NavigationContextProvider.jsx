// React modules
import { createContext, useContext } from "react";

// Routes
import { generalRoutes } from "@/constants/routes/generalRoutes";
import { authRoutes } from "@/constants/routes/authRoutes";
import { userManagementRoutes } from "@/constants/routes/userManagementRoutes";
import { applicationRoutes } from "@/constants/routes/applicationRoutes";
import { scholarshipRoutes } from "@/constants/routes/scholarshipRoutes";
import { externalScholarshipRoutes } from "@/constants/routes/externalScholarshipRoutes";
import { searchRoutes } from "@/constants/routes/searchRoutes";
import { baseRoute } from "@/constants/routes/config";

// Context
export const NavigationContext = createContext(null);

export const useNavigationContext = () => useContext(NavigationContext);

const NavigationContextProvider = ({ children }) => {
  // Navigation route groups
  const commonNavTopRoutes = [
    generalRoutes.dashboard,
    externalScholarshipRoutes.externalScholarships,
  ];

  const commonNavBottomRoutes = []; // Add footer nav routes if needed

  const adminOnlyNavRoutes = [
    searchRoutes.searchAndFilter,
    userManagementRoutes.manageUsers,
  ];

  const superAdminOnlyNavRoutes = [
    ...adminOnlyNavRoutes,
    authRoutes.registerAdmin,
    scholarshipRoutes.createScholarship,
    externalScholarshipRoutes.createExternalScholarship,
  ];

  const applicantOnlyNavRoutes = [applicationRoutes.myApplications];

  // Combines top, role-specific, and bottom nav items
  const buildNavRoutes = (roleRoutes) => [
    ...commonNavTopRoutes,
    ...roleRoutes,
    ...commonNavBottomRoutes,
  ];

  // Final nav map by user role
  const navRoutesByRole = {
    public: buildNavRoutes([]),
    admin: buildNavRoutes(adminOnlyNavRoutes),
    superAdmin: buildNavRoutes(superAdminOnlyNavRoutes),
    applicant: buildNavRoutes(applicantOnlyNavRoutes),
  };

  const value = {
    baseRoute,
    navRoutesByRole,
    ...generalRoutes,
    ...authRoutes,
    ...userManagementRoutes,
    ...applicationRoutes,
    ...scholarshipRoutes,
    ...externalScholarshipRoutes,
    ...searchRoutes,
  };

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationContextProvider;

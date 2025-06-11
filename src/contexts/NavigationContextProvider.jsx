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
  // Nav groupings
  const defaultNavRoutesOnTop = [
    generalRoutes.dashboard,
    externalScholarshipRoutes.externalScholarships,
  ];
  const defaultNavRoutesOnBottom = [];

  const adminRoutesOnlyList = [
    searchRoutes.searchAndFilter,
    userManagementRoutes.manageUsers,
  ];
  const superAdminRoutesOnlyList = [
    ...adminRoutesOnlyList,
    authRoutes.registerAdmin,
    scholarshipRoutes.createScholarship,
    externalScholarshipRoutes.createExternalScholarship,
  ];
  const applicantRoutesOnlyList = [applicationRoutes.myApplications];

  const getNavRoutes = (routes) => [
    ...defaultNavRoutesOnTop,
    ...routes,
    ...defaultNavRoutesOnBottom,
  ];

  const navLinksByUserType = {
    default: getNavRoutes([]),
    superAdminRoutesOnly: getNavRoutes(superAdminRoutesOnlyList),
    adminRoutesOnly: getNavRoutes(adminRoutesOnlyList),
    applicantRoutesOnly: getNavRoutes(applicantRoutesOnlyList),
  };

  const value = {
    baseRoute,
    navLinksByUserType,
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

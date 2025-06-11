import { useState } from "react";

export const useNavigation = () => {
  const [activeRoute, setActiveRoute] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleSidebarCollapse = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const navigateTo = (route: string) => {
    setActiveRoute(route);
    if (window.innerWidth < 768) {
      closeSidebar();
    }
  };

  return {
    activeRoute,
    isSidebarOpen,
    isSidebarCollapsed,
    toggleSidebar,
    toggleSidebarCollapse,
    closeSidebar,
    navigateTo,
    setActiveRoute,
  };
};

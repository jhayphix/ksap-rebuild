// constants/routes/generalRoutes.ts
import { FaHome } from "react-icons/fa";
import { BsGrid } from "react-icons/bs";
import { iconSize, baseRoute } from "@/constants/routes/config";

export const generalRoutes = {
  home: {
    title: "Home",
    path: `${baseRoute}/`,
    icon: <FaHome size={iconSize} />,
    end: true,
    roles: ["GUEST", "APPLICANT", "ADMIN"],
    permissions: [],
    layout: "public",
  },
  dashboard: {
    title: "Scholarships",
    path: `${baseRoute}/dashboard`,
    icon: <BsGrid size={iconSize} />,
    end: true,
    roles: ["APPLICANT", "ADMIN"],
    permissions: ["VIEW_DASHBOARD"],
    layout: "applicant",
  },
  authSelection: {
    title: "Auth Selection",
    path: `${baseRoute}/auth-selection`,
    icon: <BsGrid size={iconSize} />,
    end: true,
    roles: ["GUEST", "APPLICANT", "ADMIN"],
    permissions: [],
    layout: "public",
  },
};

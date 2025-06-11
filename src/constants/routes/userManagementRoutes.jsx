// constants/routes/userManagementRoutes.ts
import { FaUsersCog } from "react-icons/fa";
import { iconSize, baseRoute } from "@/constants/routes/config";

export const userManagementRoutes = {
  manageUsers: {
    title: "Manage Users",
    path: `${baseRoute}/manage/users`,
    icon: <FaUsersCog size={iconSize} />,
    end: false,
    roles: ["ADMIN"],
    permissions: ["MANAGE_USERS"],
    layout: "admin",
  },
};

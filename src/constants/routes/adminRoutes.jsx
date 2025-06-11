import { FaUsers } from "react-icons/fa";
import { iconSize, baseRoute } from "@/constants/routes/config";

export const adminRoutes = {
  adminPanel: {
    title: "Admin Panel",
    path: `${baseRoute}/admin-panel`,
    icon: <FaUsers size={iconSize} />,
    end: true,
    roles: ["ADMIN"], // Only accessible to admins
    permissions: ["VIEW_DASHBOARD"], // Optional, for fine-grained control
    layout: "admin", // Could be 'admin', 'default', or 'public'
  },
};

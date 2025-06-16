// constants/routes/scholarshipRoutes.ts
import {
  FaRegBookmark,
  FaUsers,
  FaClipboardCheck,
  FaPlusCircle,
} from "react-icons/fa";
import { iconSize, baseRoute } from "@/constants/routes/config";

export const scholarshipRoutes = {
  viewScholarship: {
    title: "Preview Scholarship",
    path: `${baseRoute}/scholarships/:id`,
    getPath: (id: string) => `${baseRoute}/scholarships/${id}`,
    icon: <FaRegBookmark size={iconSize} />,
    end: false,
    roles: ["APPLICANT", "ADMIN"],
    permissions: ["VIEW_SCHOLARSHIP"],
    layout: "applicant",
  },
  scholarshipApplications: {
    title: "Scholarship Applicants",
    path: `${baseRoute}/scholarships/applications/:id`,
    getPath: (id: string) => `${baseRoute}/scholarships/applications/${id}`,
    icon: <FaUsers size={iconSize} />,
    end: false,
    roles: ["ADMIN"],
    permissions: ["VIEW_SCHOLARSHIP_APPLICANTS"],
    layout: "admin",
  },
  createScholarship: {
    title: "Add Scholarship",
    path: `${baseRoute}/scholarships/new`,
    icon: <FaPlusCircle size={iconSize} />,
    end: false,
    roles: ["ADMIN"],
    permissions: ["CREATE_SCHOLARSHIP"],
    layout: "admin",
  },
  updateScholarship: {
    title: "Edit Scholarship",
    path: `${baseRoute}/scholarships/:id/edit`,
    getPath: (id: string) => `${baseRoute}/scholarships/${id}/edit`,
    icon: <FaClipboardCheck size={iconSize} />,
    end: false,
    roles: ["ADMIN"],
    permissions: ["UPDATE_SCHOLARSHIP"],
    layout: "admin",
  },
};

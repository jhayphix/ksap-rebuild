import { BsBoxArrowUpRight, BsGlobeAmericas } from "react-icons/bs";
import { FaRegBookmark } from "react-icons/fa";
import { iconSize, baseRoute } from "@/constants/routes/config";

export const externalScholarshipRoutes = {
  externalScholarships: {
    title: "External Scholarships",
    path: `${baseRoute}/external-scholarships`,
    icon: <BsBoxArrowUpRight size={iconSize} />,
    end: true,
    roles: ["APPLICANT", "ADMIN"],
    permissions: ["VIEW_EXTERNAL_SCHOLARSHIPS"],
    layout: "public",
  },
  viewExternalScholarship: {
    title: "Preview Scholarship",
    path: `${baseRoute}/external-scholarships/view/:id`,
    getPath: (id: string) => `${baseRoute}/external-scholarships/view/${id}`,
    icon: <FaRegBookmark size={iconSize} />,
    end: false,
    roles: ["APPLICANT", "ADMIN"],
    permissions: ["VIEW_EXTERNAL_SCHOLARSHIPS"],
    layout: "public",
  },
  createExternalScholarship: {
    title: "Add External Scholarship",
    path: `${baseRoute}/external-scholarships/new`,
    icon: <BsGlobeAmericas size={iconSize} />,
    end: true,
    roles: ["ADMIN"],
    permissions: ["CREATE_EXTERNAL_SCHOLARSHIP"],
    layout: "admin",
  },
  updateExternalScholarship: {
    title: "Edit External Scholarship",
    path: `${baseRoute}/external-scholarships/edit/:id`,
    getPath: (id: string) => `${baseRoute}/external-scholarships/edit/${id}`,
    icon: <FaRegBookmark size={iconSize} />,
    end: false,
    roles: ["ADMIN"],
    permissions: ["EDIT_EXTERNAL_SCHOLARSHIP"],
    layout: "admin",
  },
};

import {
  FaClipboardList,
  FaClipboardCheck,
  FaUserEdit,
  FaPlusCircle,
} from "react-icons/fa";
import { BsPencil } from "react-icons/bs";
import { iconSize, baseRoute } from "@/constants/routes/config";

export const applicationRoutes = {
  myApplications: {
    title: "My Applications",
    path: `${baseRoute}/my-applications`,
    icon: <FaClipboardList size={iconSize} />,
    end: false,
    roles: ["APPLICANT"],
    permissions: ["VIEW_OWN_APPLICATIONS"],
    layout: "applicant",
  },
  viewApplication: {
    title: "Preview Application",
    path: `${baseRoute}/applications/:id`,
    getPath: (id: string) => `${baseRoute}/applications/${id}`,
    icon: <FaClipboardCheck size={iconSize} />,
    end: false,
    roles: ["ADMIN", "APPLICANT"],
    permissions: ["VIEW_APPLICATION"],
    layout: "default",
  },
  createApplication: {
    title: "Create Application",
    path: `${baseRoute}/applications/:id/create`,
    getPath: (id: string) => `${baseRoute}/applications/${id}/create`,
    icon: <FaPlusCircle size={iconSize} />,
    end: false,
    roles: ["APPLICANT"],
    permissions: ["CREATE_APPLICATION"],
    layout: "applicant",
  },
  updateApplication: {
    title: "Edit Application",
    path: `${baseRoute}/applications/:id/edit`,
    getPath: (id: string, sectionIndex = 0) =>
      `${baseRoute}/applications/${id}/edit?section=${sectionIndex}`,
    icon: <BsPencil size={iconSize} />,
    end: false,
    roles: ["APPLICANT"],
    permissions: ["EDIT_APPLICATION"],
    layout: "applicant",
  },
  evaluateApplication: {
    title: "Evaluate Application",
    path: `${baseRoute}/applications/:id/evaluate`,
    getPath: (id: string) => `${baseRoute}/applications/${id}/evaluate`,
    icon: <FaUserEdit size={iconSize} />,
    end: false,
    roles: ["ADMIN"],
    permissions: ["EVALUATE_APPLICATION"],
    layout: "admin",
  },
};

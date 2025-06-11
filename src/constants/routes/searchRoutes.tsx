// constants/routes/searchRoutes.ts
import { FaSearch } from "react-icons/fa";
import { iconSize, baseRoute } from "@/constants/routes/config";

export const searchRoutes = {
  searchAndFilter: {
    title: "Search & Filter",
    path: `${baseRoute}/search-and-filter`,
    icon: <FaSearch size={iconSize} />,
    end: false,
    roles: ["APPLICANT", "ADMIN"],
    permissions: ["SEARCH_SCHOLARSHIPS"],
    layout: "shared",
  },
};

import { RouteObject } from "react-router-dom";
import NotFoundPage from "@/pages/error/NotFoundPage";

export const useErrorRoutes = (): RouteObject[] => {
  return [
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ];
};

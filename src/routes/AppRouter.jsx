// AppRouter.tsx
import { useRoutes } from "react-router-dom";
import { useRouteConfig } from "@/routes/RouteConfig";

const AppRouter = () => {
  const routes = useRouteConfig();
  const routing = useRoutes(routes);

  return routing;
};

export default AppRouter;

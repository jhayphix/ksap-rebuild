import { Routes, Route, useLocation } from "react-router-dom";

import NotFoundPage from "@/pages/error/NotFoundPage";
import PublicRoutes from "@/routes/PublicRoutes";

const WebRouting = () => {
  const location = useLocation();

  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={"Home Page"} />

        <PublicRoutes />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default WebRouting;

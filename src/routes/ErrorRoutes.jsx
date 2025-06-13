import NotFoundPage from "@/pages/error/NotFoundPage";
import { Routes, Route, useLocation } from "react-router-dom";

const ErrorRoutes = () => {
  const location = useLocation();
  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default ErrorRoutes;

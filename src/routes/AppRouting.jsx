import { Routes, Route, useLocation } from "react-router-dom";

import NotFoundPage from "@/pages/notFound/NotFoundPage";

const WebRouting = () => {
  const location = useLocation();

  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={"Home Page"} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default WebRouting;

import { Routes, Route, useLocation } from "react-router-dom";

import NotFoundPage from "@/pages/error/NotFoundPage";
import { NavigationContext } from "@/contexts/NavigationContextProvider";
import { useContext } from "react";

const WebRouting = () => {
  const location = useLocation();
  const { navLinksByUserType } = useContext(NavigationContext);

  console.log(navLinksByUserType);

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

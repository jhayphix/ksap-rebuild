import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const DefaultNavTab = ({
  tabMappings = { "Default Tab": "default" }, // Example format
  queryParamKey = "tab",
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabSearchParam =
    searchParams.get(queryParamKey) || Object.values(tabMappings)[0];
  const [activeTab, setActiveTab] = useState(tabSearchParam);

  useEffect(() => {
    setSearchParams({ [queryParamKey]: tabSearchParam?.toLowerCase() });
    setActiveTab(tabSearchParam);
  }, [tabSearchParam, setSearchParams, queryParamKey]);

  const handleTabClick = (tabKey) => {
    setActiveTab(tabKey);
    setSearchParams({ [queryParamKey]: tabKey?.toLowerCase() });
  };

  return (
    <ul id="navTabId" className="flex border-b select-none">
      {Object.entries(tabMappings)?.map(
        ([displayName, queryParamKey], index) => (
          <li className="mr-2 -mb-px" key={index}>
            <p
              className={`
          block
          py-2 px-4
          rounded-t
          cursor-pointer
          select-none
          ${
            activeTab?.toLowerCase() === queryParamKey?.toLowerCase()
              ? "text-gray-800 bg-white border border-b-0 border-gray-300 font-semibold"
              : "text-gray-500 bg-gray-100 border border-transparent hover:bg-gray-200"
          }
        `}
              onClick={() => handleTabClick(queryParamKey)}
            >
              {displayName}
            </p>
          </li>
        )
      )}
    </ul>
  );
};

export default DefaultNavTab;

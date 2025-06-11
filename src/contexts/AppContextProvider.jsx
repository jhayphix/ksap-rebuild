import NavigationContextProvider from "@/contexts/NavigationContextProvider";

const AppContextProvider = ({ children }) => {
  return (
    <>
      {/* Register context here */}
      <NavigationContextProvider>{children}</NavigationContextProvider>
    </>
  );
};

export default AppContextProvider;

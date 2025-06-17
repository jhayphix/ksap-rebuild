import TopNavbar from "@/layouts/TopNavbar";
import SideNavbar from "@/layouts/SideNavbar";
import Footer from "@/layouts/Footer";

const AppLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground">
      {/* Top Navbar */}
      <TopNavbar />

      <div className="flex flex-1 overflow-hidden">
        {/* Side Navbar */}
        <SideNavbar />

        {/* Main Content */}
        <main
          className="main-content-width flex-1 overflow-y-auto p-6"
          style={{ height: "500vh" }}
        >
          {children}
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AppLayout;

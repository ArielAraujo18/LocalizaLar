import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "../Sidebar/AppSidebar";
import SidebarToggle from "../Sidebar/SidebarToogle";
import Home from "../../pages/Home/home";

function Layout() {
  return (
    <SidebarProvider>
      <div className="flex">
        <AppSidebar />

        <div className="flex-1">
          <SidebarToggle />
          <Home />
        </div>
      </div>
    </SidebarProvider>
  );
}

export default Layout;
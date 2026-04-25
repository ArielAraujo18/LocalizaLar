import { useSidebar } from "@/components/ui/sidebar";
import { Menu } from "lucide-react";

function SidebarToggle() {
  const { toggleSidebar } = useSidebar();

  return (
    <button onClick={toggleSidebar} className="p-2 md:hidden">
      <Menu />
    </button>
  );
}

export default SidebarToggle;
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";

export default function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="p-4 font-bold">
          <img src="" alt="" />
          <span className="font-bold">LocalizaLar</span>
          </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <button className="w-full text-left p-2 hover:bg-muted">
            Home
          </button>
          <button className="w-full text-left p-2 hover:bg-muted">
            Perfil
          </button>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <button className="p-2 w-full text-left">Sair</button>
      </SidebarFooter>
    </Sidebar>
  );
}
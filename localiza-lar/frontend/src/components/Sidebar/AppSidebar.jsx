import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Home, Building2, Users, User } from "lucide-react";

export default function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="p-4 flex items-center gap-2">
          <img src="/Pin.png"
          alt="logo"
          className="w-8 h-8 object-contain" />
          <div className="flex flex-col leading-tight">
            <span className="font-bold ">LocalizaLar</span>
            <span className="text-xs text-gray-500">Encontre o seu lar</span>
          </div>
        </div>
          <hr className="w-full" />
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <button className="w-full flex gap-2 items-center text-left p-2 text-pink-600 hover:bg-muted ">
            <Home size={18} />
            <span>Início</span>
          </button>
          <button className="w-full flex gap-2 items-center text-left p-2 text-pink-600 hover:bg-muted ">
            <Building2 size={18} />
            <span>Imóveis</span>
          </button>
          <button className="w-full flex gap-2 items-center text-left p-2 text-pink-600 hover:bg-muted ">
            <Users size={18} />
            <span>Encontrar coleagas</span>
          </button>
          <button className="w-full flex gap-2 items-center text-left p-2 text-pink-600 hover:bg-muted ">
            <User size={18} />
            <span>Meu perfil</span>
          </button>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <button className="p-2 w-full text-left">Sair</button>
      </SidebarFooter>
    </Sidebar>
  );
}
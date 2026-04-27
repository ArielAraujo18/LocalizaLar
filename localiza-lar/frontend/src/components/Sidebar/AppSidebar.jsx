import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Home, Building2, Users, User, LogOut} from "lucide-react";
import { useState } from "react";

export default function AppSidebar() {
  
  const [user, setUser] = useState(() => {
    const data = localStorage.getItem("user");
    return data ? JSON.parse(data) : null;
  });

  return (
    <Sidebar className="w-64 hidden md:flex flex-col h-screen">
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

      <SidebarContent className="flex-1 overflow-y-auto">
        <SidebarGroup>
          <button className="w-full flex gap-2 items-center text-left p-2 text-pink-600 hover:text-pink-300">
            <Home size={18} />
            <span>Início</span>
          </button>
          <button className="w-full flex gap-2 items-center text-left p-2 text-pink-600 hover:text-pink-300">
            <Building2 size={18} />
            <span>Imóveis</span>
          </button>
          <button className="w-full flex gap-2 items-center text-left p-2 text-pink-600 hover:text-pink-300">
            <Users size={18} />
            <span>Encontrar coleagas</span>
          </button>
          <button className="w-full flex gap-2 items-center text-left p-2 text-pink-600 hover:text-pink-300">
            <User size={18} />
            <span>Meu perfil</span>
          </button>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className="flex flex-col m-1 bg-pink-100 p-2 rounded-[10px]">
          <img src={user.picture} className="w-8 h-8 object-contain"/>
          <span>{user.name}</span>
          <span>{user.email}</span>
        </div>
        <hr />
          <div className="p-6 flex items-center justify-center text-red-900 hover:text-red-400 ">
            <button className="flex items-center gap-1">
                <LogOut size={18} />
                <span>Sair</span>
            </button>
          </div>
      </SidebarFooter>
    </Sidebar>
  );
}
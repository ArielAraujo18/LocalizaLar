import { BrowserRouter, Routes, Route } from "react-router-dom";

import Cadastro from "../pages/Cadastro/cadastro";
import Login from "../pages/Login/login";
import Home from "../pages/Home/home";

import AppSidebar from "../components/Sidebar/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

function AppRoutes() {
  return (
    <BrowserRouter>
      <SidebarProvider>
        <AppSidebar />

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastrar" element={<Cadastro />} />
          <Route path="/home" element={<Home />} />
        </Routes>

      </SidebarProvider>
    </BrowserRouter>
  );
}

export default AppRoutes;
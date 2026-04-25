import { BrowserRouter, Routes, Route } from "react-router-dom";

import Cadastro from "../pages/Cadastro/cadastro";
import Login from "../pages/Login/login";
import Layout from "../components/layouts/Layouts";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastrar" element={<Cadastro />} />
        <Route path="/home" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
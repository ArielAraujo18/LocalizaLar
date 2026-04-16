import { BrowserRouter, Routes, Route } from "react-router-dom"

import Cadastro from "../pages/Cadastro/cadastro";
import Login from "../pages/Login/login";
import Home from "../pages/Home/home"
import Sidebar from "../components/Sidebar/Sidebar";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastrar" element={<Cadastro />}/>
                <Route path="/home" element={<Home />}/>
                <Route path="/sidebar" element={<Sidebar />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;
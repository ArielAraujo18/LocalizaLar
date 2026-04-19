import './Sidebar.css';
import { Link } from "react-router-dom";

function Sidebar(){
    return(
        <section className='sidebar-content-principal'>
            <section className='sidebar-content'>
                <button className='sidebar-content-botao' onClick={() => {
                    document.querySelector('.sidebar-content').classList.toggle('active');
                }}>
                    <img src="https://cdn-icons-png.flaticon.com/512/561/561134.png" alt="icone de menu" />
                </button>
            </section>
            <section className="sidebar-content active">
                <Link to="/login">Login</Link>
                <Link to="/cadastro">Cadastro</Link>
            </section>
        </section>
    )
};

export default Sidebar;
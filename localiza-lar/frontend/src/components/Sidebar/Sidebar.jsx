import './Sidebar.css';

function Sidebar(){
    return(
        <section className='sidebar-content-principal'>
            <section className='sidebar-content-title'>
                <img src="" alt="" />
                <h1>LocalizaLar</h1>
                <span>Encontre o seu lar</span>
                <hr />
            </section>

            <section className='sidebar-content-content'>
                <a href="">Início</a>
                <a href="">Imóvies</a>
                <a href="">Encontrar colegas</a>
                <a href="">Meu perfil</a>
            </section>


            <section className='sidebar-content-footer'>
                <hr />
                <img src="" alt="" />
                <h1>USER</h1>
                <span>Email</span>
            </section>

            <section className='sidebar-content-exit'>
                <a href="">Sair</a>
            </section>

        </section>
    )
};

export default Sidebar;
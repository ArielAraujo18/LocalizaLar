import "./cadastro.css"
import {Link} from "react-router-dom";

function Cadastro(){
    return(
        <section className="conteudo-cadastrar">
            <section className="conteudo-tela-cadastrar">

                <section className="conteudo-tela-cadastrar-voltar">
                    <Link to={"/"}>
                    <span><a href=""> &#11013; Back to sign in</a></span>
                    </Link>
                </section>

                <section className="conteudo-tela-cadastrar-titulo">
                    <span> Create your account </span>
                </section>

                <section className="conteudo-tela-cadastrar-conteudoE">
                    <span>Email</span>
                    <input className="input-email-cadastrar" type="text" placeholder="Email" />
                    <span>Password</span>
                    <input className= "input-password-cadastrar" type="password" placeholder="Password" />
                    <span>Confirm Password</span>
                    <input className = "input-confirmPass-cadastrar" type="password" placeholder="Re-enter password"/>
                </section>

                <section className="conteudo-tela-cadastrar-botao">
                     <button>Create account</button>
                </section>

            </section>
        </section>
    )
};

export default Cadastro;
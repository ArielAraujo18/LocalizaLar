import "./login.css"
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

/*************  ✨ Windsurf Command ⭐  *************/
/*******  a4976484-40a6-4e96-88fc-2e1e9d58de9c  *******/
function Login(){

    const [setUser] = useState(null);

    function handleGoogleLogin(response){
        fetch("http://localhost:3001/auth/google", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({ credential: response.credential }),
        })
            .then((res) => res.json())
            .then((user) => {
                localStorage.setItem("user", JSON.stringify(user));
                window.location.href = "/home";
            })
            .then((user) => {
                console.log(user);
                setUser(user);
            });
            
    }

    useEffect(() => {
        window.google.accounts.id.initialize({
            client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
            callback: handleGoogleLogin,
        });
        window.google.accounts.id.renderButton(
            document.getElementById("googleBtn"),
            { theme: "outline", size: "large" }
        );
    }, );

    console.log("CLIENT:", import.meta.env.VITE_GOOGLE_CLIENT_ID);
    return(
        
        <section className="conteudo-login">

            <section className="conteudo-tela-login">

                <section className="conteudo-tela-login-imagem">
                    <img src="/LocalizaLar.png" alt="" />
                </section>

                <section className="conteudo-tela-login-titulo">
                    <h1>Welcome to Localiza-Lar</h1>
                </section>

                <section className="conteudo-tela-login-subtitulo">
                    <span>Sign-in to continue</span>
                </section>

                <section className="conteudo-tela-login-botaoG">
                    <div id="googleBtn"></div>
                </section>

                <section className="conteudo-tela-login-divi">
                    <hr />
                    <span>OR</span>
                    <hr />
                </section>
                <section className="conteudo-tela-login-conteudos">
                    <span>E-mail</span>
                    <input className="input-email" type="email" placeholder="Email" />
                    <span>Password</span>
                    <input className="input-password" type="password" placeholder="Password" />
                </section>
                <section className="conteudo-tela-login-esqueceuS">
                    <button>Sign in</button>
                    <a href="">Forgot password?</a>
                    <Link to={"/cadastrar"}>
                        Need an account? Sign up
                    </Link>
                </section>
            </section>

        </section>
    )
};

export default Login;
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

function Login(){

    const [user, setUser] = useState(null);

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
        <section className="flex justify-center items-center min-h-[100dvh] p-2">
        
            <section className="flex flex-col items-center w-full max-w-[360px] md:max-w-[400px] p-3 md:p-8 bg-white rounded-[20px]">

                {/* imagem */}
                <section>
                <img
                    src="/LocalizaLar.png"
                    className="mt-4 w-full max-w-[320px] h-[100px] scale-[3]"
                />
                </section>

                {/* título */}
                <section className="text-sm font-sans">
                <h1>Welcome to Localiza-Lar</h1>
                </section>

                {/* subtítulo */}
                <section className="text-[1.1rem] mb-6 font-sans">
                <span>Sign-in to continue</span>
                </section>

                {/* google button placeholder */}
                <section className="w-full flex justify-center">
                <div id="googleBtn"></div>
                </section>

                {/* divider */}
                <section className="flex items-center w-full my-6 gap-2">
                <hr className="flex-1 border-t border-gray-300" />
                <span className="text-xs font-semibold">OR</span>
                <hr className="flex-1 border-t border-gray-300" />
                </section>

                {/* inputs */}
                <section className="flex flex-col items-center w-full">

                <span className="py-2 text-base font-serif">E-mail</span>
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full max-w-[300px] pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-base
                    bg-[url('https://cdn-icons-png.flaticon.com/512/561/561127.png')] bg-no-repeat bg-[length:18px] bg-[10px_center]"
                />

                <span className="py-2 text-base font-serif">Password</span>
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full max-w-[300px] pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-base
                    bg-[url('https://cdn-icons-png.flaticon.com/512/3064/3064155.png')] bg-no-repeat bg-[length:18px] bg-[10px_center]"
                />
                </section>

                {/* actions */}
                <section className="flex flex-col items-center mt-4 gap-4">

                <button
                    className="bg-pink-500 hover:bg-pink-400 transition duration-200
                    text-white w-full max-w-[330px] py-4 rounded-full
                    border border-gray-300 flex items-center justify-center"
                >
                    Sign in
                </button>

                <a href="#" className="text-black hover:underline">
                    Forgot password?
                </a>

                <Link to="/cadastrar" className="text-black hover:underline">
                    Need an account? Sign up
                </Link>

                </section>

            </section>
        </section>
    )
};

export default Login;
import { useState } from "react";

function Home() {
  const [user, setUser] = useState(() => {
    const data = localStorage.getItem("user");
    return data ? JSON.parse(data) : null;
  });

  return (
    <div className="flex justify-center m-6">
      <div className="w-full min-w-[60rem] ">

        <div className="flex flex-col m-4">
          <span className="font-bold text-pink-600 text-5xl family-sans">Meu perfil</span>
          <span className="font-light text-gray-500">Preencha suas informações para conectar-se com outros estudantes</span>
        </div>

        <section className="bg-white mt-11 p-4 rounded-[15px] h-[17rem]">
          <span>Foto de perfil</span>
          <img src={user?.picture} width="80"/>
        </section>

      </div>
    </div>
  );
}

export default Home;
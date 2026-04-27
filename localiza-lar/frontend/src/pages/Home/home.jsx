import { useState } from "react";

function Home() {
  const [user, setUser] = useState(() => {
    const data = localStorage.getItem("user");
    return data ? JSON.parse(data) : null;
  });

  return (
  <div className="flex justify-center px-4 py-6 md:m-6">
    <div className="w-full md:w-[60rem] md:max-w-[60rem] mx-auto">

      <div className="flex flex-col gap-2 mb-6 md:m-4">
        <span className="font-bold text-pink-600 text-2xl md:text-5xl">
          Meu perfil
        </span>
        <span className="text-sm md:text-base text-gray-500">
          Preencha suas informações para conectar-se com outros estudantes
        </span>
    </div>

    <section className="bg-white p-4 md:p-6 rounded-xl">
      <span className="block mb-3 text-sm md:text-base">
        Foto de perfil
      </span>

      <img
        src={user?.picture}
        className="w-16 h-16 md:w-20 md:h-20 rounded-full"
      />
    </section>

    </div>
  </div>
  );
}

export default Home;
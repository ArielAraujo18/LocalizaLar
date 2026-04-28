import { Link } from "react-router-dom";

function Cadastro() {

  const signup = () => {

  }
  
  return (
    <div className="flex justify-center items-center min-h-[100dvh] p-2">
      <div className="bg-white w-full max-w-[360px] md:max-w-[400px] p-3 md:p-8 h-full rounded-[20px]">

        <div className="ml-4 mt-4">
          <Link to="/" className="no-underline text-slate-600 hover:underline">
            &#11013; Back to sign in
          </Link>
        </div>

        <div className="flex flex-col justify-center items-center p-4">
          <span className="text-[1.3rem] font-semibold font-sans">
            Create your account
          </span>
        </div>

        <div className="flex flex-col items-center gap-2 mb-4">
          <span>Email</span>
          <input
            type="text"
            placeholder="Email"
            className="w-full max-w-[300px] pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-base
            bg-[url('https://cdn-icons-png.flaticon.com/512/561/561127.png')] bg-no-repeat bg-[length:18px] bg-[10px_center]"
          />

          <span>Password</span>
          <input
            type="password"
            placeholder="Password"
            className="w-full max-w-[300px] pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-base
            bg-[url('https://cdn-icons-png.flaticon.com/512/3064/3064155.png')] bg-no-repeat bg-[length:18px] bg-[10px_center]"
          />

          <span>Confirm Password</span>
          <input
            type="password"
            placeholder="Re-enter password"
            className="w-full max-w-[300px] pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-base
            bg-[url('https://cdn-icons-png.flaticon.com/512/3064/3064155.png')] bg-no-repeat bg-[length:18px] bg-[10px_center]"
          />
        </div>

        <div className="flex flex-col items-center my-4">
          <button
            className="bg-pink-500 hover:bg-pink-400 transition duration-200
            text-white text-[1.1rem] font-medium cursor-pointer
            w-full max-w-[330px] py-4 rounded-full border border-gray-300
            flex items-center justify-center"
          >
            Create account
          </button>
        </div>

      </div>
    </div>
  );
}

export default Cadastro;
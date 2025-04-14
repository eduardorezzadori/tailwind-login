import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-slate-200 h-screen">
      <main className="flex">
        <div className="w-1/2 text-gray-950 h-screen flex justify-center items-center">
          <form className="flex flex-col w-1/2">
            <div className="w-full flex flex-row justify-around mb-4">
            <Image
              alt=""
              src="/user.png"
              width={121}
              height={121}>
            </Image>
                </div>
            <h1 className="w-full text-center text-3xl mb-4">Login</h1>
            <input type="text" placeholder="Digite seu e-mail..." className="m-2 border-2 border-gray-300 shadow-sm px-2" />
            <input type="password" placeholder="senha" className="m-2 border-2 border-gray-300 shadow-sm px-2" />
            <div className="flex flex-row space-x-2">
              <div className="text-sm">
                <input type="radio" id="remberme" className="mx-1" />
                <label id="remember-label">Lembrar minha senha</label>
              </div>
              <div className="text-sm w-1/2 flex flex-row items-end">
                <a href="#" className="text-blue-500 underline w-full text-end">Esqueceu a senha?</a>
              </div>
            </div>
            <button className="bg-blue-500 mt-4 rounded-sm">Acessar</button>
            <div className="flex flex-row space-x-2 justify-center text-sm mt-4">
              <p>Ainda não possui uma conta?</p>
              <a href="#">Cadastre-se</a>
            </div>
          </form >
        </div>
        <div className="bg-blue-500 w-1/2 flex flex-col h-screen justify-center items-center">
          <div className="w-1/2">
            <p className="text-2xl ">Domine as técnologias mais buscadas pelo mercado!</p>
            <Image
              alt=""
              width={414}
              height={386}
              src="/techs.png"
              className="mt-8">
            </Image>
          </div>
        </div>
      </main>
    </div>
  );
}

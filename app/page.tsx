import Image from "next/image";
import Link from "next/link";
import './main.css';

export default function Home() {
  
  return (
    <main className="container flex items-center justify-center h-screen bg-black text-white">
         <div id="menuJogo" className="animate-pulse flex flex-col space-y-6 items-center justify-center text-center w-1/2 h-1/2 p-6 rounded-lg">
          <span id="bolinha" className="relative flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
          </span>
          <h1  id="titulo" className=" text-9xl	 font-bold">Armory & machine</h1>
          <Link href="/game" className="rounded-lg bg-white text-black px-6 py-3 text-sm font-medium  transition-colors hover:bg-slate-400 hover:text-white md:text-base">Entrar</Link>
         </div>
    </main>
  );
}

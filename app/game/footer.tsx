import Link from "next/link";

export default function Footer() {
    return(
        <div className="flex bottom-0 text-center">
           
                <Link href="/game" className="bg-slate-600 py-3 text-white w-1/3">Construir</Link>
                <Link href="/pesquisa" className="bg-slate-600 py-3 text-white w-1/3">Pesquisa</Link>
                <Link href="/log" className="bg-slate-600 py-3 text-white w-1/3">Log</Link>
            
        </div>
    );
}
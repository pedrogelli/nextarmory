import Menu from "../game/footer";
import ItemPesquisa from "./itemPesquisa";

export default function Pesquisa(){
    return (
        <main className="w-9/12 mx-auto px-4 py-6 container">
            <p className="p-2 bg-slate-600 text-white"><b>PESQUISA</b></p>

            <ItemPesquisa 
            nicho="Tank" 
            nome="Main" 
            nomeProximo="Tank" 
            func="" 
            nivel= {0}  />
            
           
            <Menu/>
        </main>
    );
}
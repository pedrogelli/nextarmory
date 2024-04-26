import Barra from "./barra";
import Menu from "./menu";

export default function Game(){
    /* Reset Inicial */
    /* 
    pontos = 0;
    stepProgress = 0;
    productionTime = 50;
    capacidade = 15;
    */

return (
    <main className="w-9/12 mx-auto px-4 py-6 container">
        <Barra tipo={"Aquecer"} capacidade={15} tempoProducao={50}/>
        {/* <Barra tipo={aquecer} capacidade={capacidade} tempoProducao={productionTime}/> */}
        <Barra tipo={"Tanque"} capacidade={15} tempoProducao={50}/>
        
        <Menu/> 
    </main>
);
}
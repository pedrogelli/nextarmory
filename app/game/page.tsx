import Barra from "./barra";
import Header from "./header";
import Footer from "./footer";
import 'flowbite';
import {fetchProgressBars} from "../lib/data";

export default function Game(){
    /* Reset Inicial */
    /* 
    pontos = 0;
    stepProgress = 0;
    productionTime = 50;
    capacidade = 15;
    */
    fetchProgressBars();

return (
    <>
    
    <main className="lg:w-6/12 mx-auto   px-4 ">

        <Header/> 

        <div id="myTabContent">

            <div className="bg-gray-50 p-4 rounded-lg dark:bg-gray-800 " id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <Barra 
                nome={"Aquecer"} 
                nivel={0}
                tempoProducao={50}
                capacidade={15} 
                volume_producao={1}
                bots={0}
                />
                {/* <Barra tipo={aquecer} capacidade={capacidade} tempoProducao={productionTime}/> */}
                <Barra 
                nome={"Tanque"} 
                nivel={0}
                tempoProducao={50}
                capacidade={15} 
                volume_producao={1}
                bots={0}
                />
            </div>
            <div className="bg-gray-50 p-4 rounded-lg dark:bg-gray-800 hidden" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
            <Barra 
                nome={"Trabalhador"} 
                nivel={0}
                tempoProducao={50}
                capacidade={15} 
                volume_producao={1}
                bots={0}
                />
            </div>

        </div>

        <Footer/> 
    </main>
    <script src="https://unpkg.com/@themesberg/flowbite@1.2.0/dist/flowbite.bundle.js"></script>
    </>
);
}
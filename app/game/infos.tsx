import { productionTimeLabel } from "./barra";
export default function Infos(props:any){
    {console.log("Production Time Label 3: " + productionTimeLabel)}
    return (
        <div className="flex p-3">
            <div className="w-1/2 divide-y divide-gray-400 pr-6 space-y-2">
                <p>Capacidade: {props.capacidade}</p>
                
                <p>Tempo de produção: { props.productionTimeLabel}s</p>
                <p>Volume de produção: 1</p>

            </div>
            <div className="w-1/2 divide-y divide-gray-400 pr-6 space-y-2">
                <p>???? : ???</p>
                <p>???? : ???</p>
                <p>???? : ???</p>
            </div>
        </div>
    );
}
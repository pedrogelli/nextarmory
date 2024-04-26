import Barra  from './barra';


type BotaoHabilidadeProps = {
    func: any;
    nome: string;
    custo: number;
    level: number;
    nextLevel: number;
    alias: string;
    isDisabled: boolean;
};

export default function BotaoHabilidade(props : BotaoHabilidadeProps) {
    /*if(pontos > props.custo) {
        console.log(pontos);
        console.log("Pode comprar");
    }else {
        console.log(pontos);
        console.log("Não pode comprar");
    }*/
    return (
        props.nome ? (
            <div className="w-1/3 p-3">
                <div className="flex justify-between">
                    <p>Custo:</p>
                    <p>{props.custo}x {props.alias}</p>
                </div>
                
                <button
                    className="bg-white text-black px-6 py-3 my-2 border border-slate-400 hover:bg-slate-200 disabled:text-white disabled:bg-neutral-800"
                    onClick={props.func}
                    disabled={false}
                >
                    {props.nome}
                </button>

                <div className="flex justify-between">
                    <p>Nível:</p>
                    <p>{props.level}</p>
                </div>

                <div className="flex justify-between">
                    <p>Próximo:</p>
                    {
                        props.nome == "Velocidade" ? (
                            <p>{props.nextLevel.toLocaleString("en")}s</p>
                        ) : (
                            <p>{props.nextLevel}</p>
                        )
                    }
                </div>
        </div>
        ) : (
            <div className="w-1/3 m-6 bg-slate-500"></div>
        )

    );
}
export default function ItemPesquisa(props: any) {
    
    return (
        <div id="pesquisaWrapper" className="flex">

                <div className="w-1/3">
                    <div className="text-2xl">
                        {props.nome}
                    </div>
                    <div id="nextResearch" className="">
                        <p>Próximo: {props.nomeProximo}</p>
                    </div>
                </div>
                
                <div className="w-1/3">
                    <button
                    className="bg-blue-500 px-6 py-3 rounded-lg text-white m-2"
                    onClick={props.func}
                    ><b>Pesquisar</b><br/>Custo: 15 heat</button>
                </div>

                <div className="w-1/3">
                    <p>Usar?</p>
                </div>

            </div>
    );
}

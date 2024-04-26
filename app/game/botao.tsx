import { useState } from 'react';
type MeuComponenteProps = {
    func: any;
    nome: string;
    isDisabled: boolean;
};


export default function Botao(props: MeuComponenteProps) {
    
    return(
        
        <button className="bg-white px-6 py-3 border border-slate-400 hover:bg-slate-200 disabled:text-white disabled:bg-neutral-800"
        onClick={props.func}
        disabled={props.isDisabled}>
            {props.nome}
        </button>

    );
}
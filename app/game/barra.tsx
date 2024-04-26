"use client";
import { useState, useEffect } from 'react';
import Infos from './infos';
import Botao from './botao';
import BotaoHabilidade from './botaoHabilidade';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

export let productionTimeLabel = 5;

export default function Barra(props: any) {
  const [isDisabled, setIsDisabled] = useState(false);
  const [isDisabledVelocidade, setIsDisabledVelocidade] = useState(true);
  const [isDisabledCapacidade, setIsDisabledCapacidade] = useState(true);
  
  {/** Inicializa as variáveis */}
    const [stepProgress, setStepProgress] = useState(0);
    const [pontos, setPontos] = useState(0); //Pontos da barra
    const [buttonClicked, setButtonClicked] = useState(false);
    const [productionTime, setProductionTime] = useState(props.tempoProducao);
    const [productionTimeLabel, setProductionTimeLabel] = useState(props.tempoProducao / 10);
    const [capacidade, setCapacidade] = useState(props.capacidade);
    const tamStepCap = 100 / capacidade;
    const porcentagemCapacidade = pontos * tamStepCap;
    const [levelVelocidade, setLevelVelocidade] = useState(0);

    const productionVolume = 1;
    const [custoVelocidade, setCustoVelocidade] = useState(1);
    const [custoCapacidade, setCustoCapacidade] = useState(1);
 

    console.log("Step Progress: " + stepProgress);
    console.log("O step da barra de progresso")
    console.log("Tamanho do step da barra capacidade: " + tamStepCap);
    console.log("Porcentagem Da barra capacidade: " + porcentagemCapacidade);
    console.log("Tempo de produção: " + productionTime / 10 + "s");
    console.log("Pontos da barra: " + pontos);
    console.log("Capacidade: " + capacidade);
    
    console.log("Volume de produção: " + productionVolume);
    console.log("Custo da habilidade: " + custoVelocidade);
    console.log("         ");
    
    const handleButtonClick = () => {
        setButtonClicked(true); // Define buttonClicked como true quando o botão é clicado
      };

      // Aumentar Velocidade do Aquecer
    const velocidade = () => {
      if(custoVelocidade <= pontos){
        setProductionTime(productionTime - 3);
        setProductionTimeLabel((productionTime - 3) / 10);
        setPontos(pontos - custoVelocidade);
        setCustoVelocidade(custoVelocidade + 3);
        setLevelVelocidade(levelVelocidade + 1);
        setIsDisabledVelocidade(true);
      }else {
        console.log("Sem Aquecer para gastar");
      }
    };

    // Aumentar Capacidade do Aquecer
    const aumentarCapacidade = () => {
      if(custoCapacidade <= pontos){
        {/* Deve retirar Tanks e não pontos de Aquecer */}
        setPontos(pontos - custoCapacidade);
        setCapacidade(capacidade + 15);
        setCustoCapacidade(custoCapacidade + 3)
        console.log("Gastou 1 ponto");
        console.log("         ");
      }else {
        console.log("Sem pontos para gastar");
      }
    };

   // Comportamento do progresso da barra
   useEffect(() => {
    // Clicou em Aquecer
    if (buttonClicked) {
      const interval = setInterval(() => {
        if (stepProgress < 100) {
          setStepProgress(stepProgress + 1);
          setIsDisabled(true);
        } else {
              clearInterval(interval);
              // Verifica se tem espaço para adicionar ponto.
              if(pontos < capacidade){
                setPontos(pontos + 1);
              }
              setStepProgress(0);
              setButtonClicked(false);
              setIsDisabled(false);
        }
    }, productionTime); // Atualiza a cada segundo (1000ms)
    return () => {
        console.log("return do useeffect");
        clearInterval(interval)}; // Limpa o intervalo quando o componente é desmontado
    }
}, [buttonClicked, stepProgress, pontos, capacidade, productionTime, custoVelocidade, custoCapacidade]);

    {/* Segundo useEffect */ }
    useEffect(() => {
      console.log("rodando dentro do segundo useEffect");
      

      return () => {
        console.log("return do segundo useEffect");
        // Limpeza do segundo useEffect
      };
    }, []); // Adicionamos um array vazio como dependência do segundo useEffect, o que significa que ele será executado apenas uma vez



    return (
      <div className='container my-6'>
        <div className="columns-1 bg-slate-100 ">

          <div id="mainWrapper" className='flex m-3'>

            <div id="mainButton" className=''>
              <Botao isDisabled={isDisabled} func={handleButtonClick} nome={props.tipo} />
            </div>

            <div id="barras" className='w-full pl-2'>

              {/* barra capacidade */}
              <div id="capacidade" className="w-full mb-1.5"> 
                  <div className="shadow w-full bg-neutral-900 border-2 border-slate-400 ">
                    <div className="bg-white text-xs leading-none h-6 py-2  text-center" style={{width:porcentagemCapacidade+'%'}}>
                    <span className='text-black'>{pontos}/{capacidade}</span>
                    </div>
                  </div>
              </div>

              {/* barra progresso */}
              <div id="progresso" className="w-full">
                  <div className="shadow w-full bg-neutral-900 border-2 border-slate-400">
                      <div className="bg-white leading-none py-1.5 text-center text-black " style={{width:stepProgress+'%'}}>
                      </div>
                  </div>
              </div>

            </div>

          </div> {/* fim do mainWrapper*/}

          <div id="barraDetalhes" className='flex px-2 columns-3 bg-white border-2 border-slate-400'>
            
            <div id="sinalHabilidade" className='w-1/3 text-left'>
              <div className='h-2 w-5 mx-0.5 border border-slate-400 inline-block'></div>
              <div className='h-2 w-5 mx-0.5 border border-slate-400 inline-block'></div>
              <div className='h-2 w-5 mx-0.5 bg-slate-900 border border-slate-400 inline-block'></div>
            </div>
            
            <div id="labelDetalhes" className='w-1/3 text-center'>
              <ChevronUpIcon className="h-4 w-6 inline "/>
              <p className='inline mx-2 text-xs'>DETALHES</p>
              <ChevronUpIcon className="h-4 w-6 inline"/>
            </div>

            <div className='w-1/3 text-right'>
              <div className='h-2 w-5 bg-slate-900 border border-slate-400 inline-block'></div>
            </div>

          </div>
          
          <Infos capacidade={capacidade} productionTimeLabel={productionTimeLabel}/>
          {/*console.log("Production Time Label 2: " + productionTimeLabel)*/}

        </div>

        <div className="flex text-sm bg-neutral-900 text-white">
          <BotaoHabilidade
            func={velocidade}
            nome={"Velocidade"}
            alias={"Aquecer"}
            custo={custoVelocidade}
            level={levelVelocidade}
            nextLevel={productionTimeLabel - 0.3}
            isDisabled={isDisabledVelocidade}
           />
           <BotaoHabilidade
            func={aumentarCapacidade}
            nome={"Capacidade"}
            alias={"Tanque"}
            custo={1}
            level={0}
            nextLevel={20}
            isDisabled={isDisabledCapacidade}
           />
           <BotaoHabilidade
            func={null}
            nome={""}
            alias={""}
            custo={1}
            level={0}
            nextLevel={1}
            isDisabled={isDisabled}
           />
        </div>
        <div id="requisitos" className='bg-black text-white py-2'>
          <div>
            <p className='text-center'>Requisitos</p>
          </div>
          <div className='flex justify-between px-2'>

            <div className='inline'>
              <p className='inline left-0'>Heat</p>
            </div>

            <div className='inline '>
              <p className='inline right-0'>10</p>
              <p className='inline right-0'>O</p>
            </div>

          </div>
          
        </div>
     </div>
    )
}


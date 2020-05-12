import React from 'react';

import './App.css';

//import dos componentes
import Card from './components/layout/Card';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComPatametros';
import ComFilhos from './components/basicos/ComFilhos';
import Repeticao from './components/basicos/Repeticao';
import Condicional from './components/basicos/Condicional';
import CondicionalComIF from './components/basicos/CondicionalComIF';
import Pai from './components/comunicacao/direta/Pai';
import Super from './components/comunicacao/indireta/Super';

export default (props) => (
  <div className="App">
    {/* Exemplo de componente*/}
    <Card titulo="#01 - Primeiro Componente" color="#92B06A">
      <Primeiro />
    </Card>

    <Card titulo="#02 - Componente com Parametro" color="#FF85CB">
      {/*Ao chamar o componente e colocar parametros como abaixo, no arquivo do componente deve se
        usar '{props.nome-do-seu-parametro}' para sobrescreve-lo como código JavaScript}
      <ComParametro titulo="Opa" subtitulo="Epa"/> */}
      <ComParametro titulo="Este é o título" subtitulo="Este é o subtítulo" />
    </Card>

    <Card titulo="#03 - Componente com Filhos" color="#D96459">
      <ComFilhos>
        <ul>
          <li>Ana</li>
          <li>Bia</li>
          <li>Carlos</li>
          <li>Daniel</li>
        </ul>
      </ComFilhos>
    </Card>

    <Card titulo="#04 - Componente com Repetição" color="#008BBA">
      <Repeticao />
    </Card>

    <Card titulo="#05 - Componente com Condicional (v1.0)" color="#E94C6F">
      <Condicional numero={10} />
    </Card>

    <Card
      titulo="#06 - Componente com CondicionalComIF (v2.0)"
      color="#FA6900 "
    >
      <CondicionalComIF numero={11} />
    </Card>

    <Card titulo="#07 - Componente de Comunicação Direta" color="#4298B5 ">
      <Pai sobrenome="Freitas" />
    </Card>

    <Card titulo="#08 - Componente de Comunicação Indireta" color="#4298B5 ">
      <Super />
    </Card>
  </div>
);

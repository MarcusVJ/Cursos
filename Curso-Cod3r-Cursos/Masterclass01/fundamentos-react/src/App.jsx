import React from 'react';

import './App.css';

//import dos componentes
import Primeiro from './components/Primeiro';
import ComParametro from './components/ComPatametros';
import ComFilhos from './components/ComFilhos';
import Card from './components/layout/Card';
import Repeticao from './components/Repeticao';
import Condicional from './components/Condicional';
import CondicionalComIF from './components/CondicionalComIF';

export default (props) => (
  <div className="App">
    {/* Exemplo de componente*/}
    <Card titulo="#01 - Primeiro Componente">
      <Primeiro />
    </Card>

    <Card titulo="#02 - Componente com Parametro">
      {/*Ao chamar o componente e colocar parametros como abaixo, no arquivo do componente deve se
        usar '{props.nome-do-seu-parametro}' para sobrescreve-lo como código JavaScript}
      <ComParametro titulo="Opa" subtitulo="Epa"/> */}
      <ComParametro titulo="Este é o título" subtitulo="Este é o subtítulo" />
    </Card>

    <Card titulo="#03 - Componente com Filhos">
      <ComFilhos>
        <ul>
          <li>Ana</li>
          <li>Bia</li>
          <li>Carlos</li>
          <li>Daniel</li>
        </ul>
      </ComFilhos>
    </Card>

    <Card titulo="#04 - Componente com Repetição">
      <Repeticao />
    </Card>

    <Card titulo="#05 - Componente com Condicional (v1.0)">
      <Condicional numero={10} />
    </Card>
    <Card titulo="#06 - Componente com CondicionalComIF (v2.0)">
      <CondicionalComIF numero={11} />
    </Card>
  </div>
);

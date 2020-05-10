import React from 'react';

import './Card.css';

//prettier-ignore
export default (props) => (
  <div className="Card">
    <div className="Conteudo">
      {props.children}
    </div>
    <div className="Footer">
      {props.titulo}
    </div>
  </div>
);
